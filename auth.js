const express = require('express');
const pool = require('../database');
const upload = require('../uploadMiddleware'); // Import Multer middleware
const router = express.Router();

router.post('/signup', upload.single('offer_letter'), async (req, res) => {
    const { name, college_name, email, phone_number, age, degree, year, internship } = req.body;

    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Offer letter upload is required' });
        }

        const userResult = await pool.query(
            `INSERT INTO users (name, college_name, email, phone_number, age, degree, year) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
            [name, college_name, email, phone_number, age, degree, year]
        );
        const userId = userResult.rows[0].id;

        const { start_date, company_name, company_address, external_mentor_name, 
                external_mentor_contact, external_mentor_email, company_registration_number, 
                city, stipend_amount } = JSON.parse(internship); // Parse JSON string if sent as JSON

        await pool.query(
            `INSERT INTO internships (user_id, start_date, company_name, company_address, 
                                       external_mentor_name, external_mentor_contact, 
                                       external_mentor_email, company_registration_number, city, 
                                       stipend_amount, offer_letter) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [userId, start_date, company_name, company_address, external_mentor_name, 
             external_mentor_contact, external_mentor_email, company_registration_number, city, 
             stipend_amount, req.file.filename] // Store the uploaded file's name
        );

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
