const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true, trim: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  active: { type: Boolean, default: true, select: false },
  role: {
    type: String,
    enum: ['student', 'tutor', 'admin'],
    default: 'student',
  },
  createdDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Users', userSchema);