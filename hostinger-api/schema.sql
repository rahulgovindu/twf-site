-- TWF database schema — run once in Hostinger hPanel > Databases > phpMyAdmin.
-- Create the database + user in hPanel first, then import this file.

CREATE TABLE IF NOT EXISTS subscribers (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(254) NOT NULL,
  source VARCHAR(60) NOT NULL DEFAULT 'newsletter',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_email (email)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE IF NOT EXISTS call_requests (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(32) DEFAULT NULL,
  note TEXT,
  status ENUM('new', 'contacted', 'done') NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_status (status)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
