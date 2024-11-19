CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    college_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    age INT NOT NULL,
    degree VARCHAR(50) NOT NULL,
    year VARCHAR(20) NOT NULL
);

CREATE TABLE internships (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    company_name VARCHAR(100) NOT NULL,
    company_address TEXT NOT NULL,
    external_mentor_name VARCHAR(100) NOT NULL,
    external_mentor_contact VARCHAR(15) NOT NULL,
    external_mentor_email VARCHAR(100) NOT NULL,
    company_registration_number VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    stipend_amount DECIMAL(10, 2) NOT NULL,
    offer_letter VARCHAR(255) NOT NULL
);
