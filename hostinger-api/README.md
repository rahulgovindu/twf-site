# TWF — Hostinger deploy (static site + PHP form API)

The site is a Next.js **static export**; forms post to these small PHP
endpoints backed by a MySQL database on the same Hostinger plan.

## One-time setup

1. **Create the database** — hPanel → Databases → MySQL Databases →
   create database + user, note the names and password.
2. **Import the schema** — hPanel → phpMyAdmin → select the database →
   Import → `schema.sql`.
3. **Configure credentials** — copy `config.sample.php` to `config.php`,
   fill in the dsn/user/pass from step 1. Never commit `config.php`.

## Each deploy

1. Locally: `npm run build` → produces the `out/` folder.
2. Upload the **contents of `out/`** to `public_html/`.
3. Upload this folder's PHP files to `public_html/api/`
   (`subscribe.php`, `book-call.php`, `config.php`).
   The forms post to `/api/subscribe.php` and `/api/book-call.php`.

## Checking submissions

phpMyAdmin → tables `subscribers` and `call_requests`
(`call_requests.status`: new → contacted → done, update by hand for now).
