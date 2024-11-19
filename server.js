const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const app = express();


mongoose.connect('mongodb+srv://digvijaykesare1123:Vijay%401123@cluster0.jthgjzy.mongodb.net/hackathon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

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

const Internship = mongoose.model('Internship', internshipSchema);


app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });


app.post('/api/register', upload.single('offerLetter'), async (req, res) => {
  const { body, file } = req;

  if (!body.name || !body.collegeName || !body.email || !file) {
    return res.status(400).send({ message: 'Missing required fields' });
  }

  const data = { ...body, offerLetter: file.path };
  
  try {
    const newInternship = new Internship(data);
    await newInternship.save();
    res.status(200).send({ message: 'Registration Successful' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
