const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  name: String,
  collegeName: String,
  email: String,
  phone: String,
  age: Number,
  degree: String,
  year: String,
  startDate: String,
  companyName: String,
  companyAddress: String,
  mentorName: String,
  mentorContact: String,
  mentorEmail: String,
  registrationNumber: String,
  city: String,
  stipend: Number,
  offerLetter: String,
});

module.exports = mongoose.model('Internship', internshipSchema);
