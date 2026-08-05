<?php
/**
 * POST /api/book-call.php — free one-on-one call request into call_requests.
 * Body: form-encoded or JSON { name, email, phone?, note?, website? }
 * `website` is a honeypot: real users never fill it.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = [];
if (str_contains($_SERVER['CONTENT_TYPE'] ?? '', 'application/json')) {
    $data = json_decode($raw, true) ?: [];
} else {
    $data = $_POST;
}

if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name  = trim((string) ($data['name'] ?? ''));
$email = filter_var(trim((string) ($data['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$phone = trim((string) ($data['phone'] ?? ''));
$note  = trim((string) ($data['note'] ?? ''));

if ($name === '' || mb_strlen($name) > 120) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please tell us your name.']);
    exit;
}
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
        'INSERT INTO call_requests (name, email, phone, note)
         VALUES (:name, :email, :phone, :note)'
    );
    $stmt->execute([
        ':name'  => mb_substr($name, 0, 120),
        ':email' => $email,
        ':phone' => $phone !== '' ? mb_substr($phone, 0, 32) : null,
        ':note'  => $note !== '' ? mb_substr($note, 0, 2000) : null,
    ]);

    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    error_log('book-call.php: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Something went wrong. Please try again.']);
}
