
CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    user_cpf VARCHAR(11) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    quantity INTEGER DEFAULT 1,
    observations TEXT,
    FOREIGN KEY (user_cpf) REFERENCES users(cpf) ON DELETE CASCADE
);