/**
 * Tell IndexNow-enabled search engines which URLs changed.
 * Run only after the new build is live:
 *   npm run indexnow -- /about/ /feed.xml
 */
import { readdirSync } from "node:fs";

const HOST = "thewayforward.in";
const paths = process.argv.slice(2);

if (paths.length === 0) {
  console.error("Pass the changed site paths, for example: /about/");
  process.exit(1);
}

// Git Bash on Windows turns "/about/" into "C:/Program Files/Git/about/".
const badPaths = paths.filter((path) => !path.startsWith("/") || path.includes(":"));
if (badPaths.length > 0) {
  console.error(`These are not site paths: ${badPaths.join(", ")}`);
  console.error("In Git Bash, run it as: MSYS_NO_PATHCONV=1 npm run indexnow -- /about/");
  process.exit(1);
}

const keyFile = readdirSync("public").find((name) =>
  /^[a-f0-9]{32}\.txt$/.test(name),
);
if (!keyFile) {
  console.error("IndexNow key file is missing from public/.");
  process.exit(1);
}

const keyLocation = `https://${HOST}/${keyFile}`;
const check = await fetch(keyLocation);
if (!check.ok) {
  console.error(`Upload the site first. ${keyLocation} returned ${check.status}.`);
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: keyFile.replace(".txt", ""),
    keyLocation,
    urlList: paths.map((path) => new URL(path, `https://${HOST}`).toString()),
  }),
});

console.log(`IndexNow responded with ${response.status}.`);
process.exit(response.ok ? 0 : 1);
