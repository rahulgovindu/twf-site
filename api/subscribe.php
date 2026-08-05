<?php
/**
 * POST /api/subscribe.php — newsletter signup into the subscribers table.
 * Body: application/x-www-form-urlencoded or JSON { email, website? }
 * `website` is a honeypot: real users never fill it.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Same-origin check — the form only ever posts from our own pages.
$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== ($_SERVER['HTTP_HOST'] ?? '')) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Forbidden']);
    exit;
}

$raw = file_get_contents('php://input');
$data = [];
if (str_contains($_SERVER['CONTENT_TYPE'] ?? '', 'application/json')) {
    $data = json_decode($raw, true) ?: [];
} else {
    $data = $_POST;
}

// Honeypot — silently accept bots so they stop retrying.
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$email = filter_var(trim((string) ($data['email'] ?? '')), FILTER_VALIDATE_EMAIL);
if ($email === false || strlen($email) > 254) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}

try {
    $cfg = require __DIR__ . '/config.php';
    $pdo = new PDO($cfg['dsn'], $cfg['user'], $cfg['pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    $stmt = $pdo->prepare(
        'INSERT INTO subscribers (email, source) VALUES (:email, :source)
         ON DUPLICATE KEY UPDATE email = email'
    );
    $stmt->execute([
        ':email'  => $email,
        ':source' => substr((string) ($data['source'] ?? 'newsletter'), 0, 60),
    ]);

    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    error_log('subscribe.php: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Something went wrong. Please try again.']);
}
