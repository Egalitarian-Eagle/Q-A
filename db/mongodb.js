const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdc', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected'), err => console.log('err'));
const { Schema, model } = mongoose;


const AnswerSchema = new Schema({
  id: Number,
  question_id: Number,
  body: String,
  date_written: Number,
  answerer_name: String,
  answerer_email: String,
  reported: {
    type: Number,
    default: 0
  },
  helpful: {
    type: Number,
    default: 0
  },
  photos:[String]

})
const Answer = model('Answer', AnswerSchema);


// answer: id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful
// question: id, product_id, body, date_written, asker_name, asker_email, reported, helpful
// photos: id, answer_id, url


const QuestionSchema = new Schema({
  id: Number,
  product_id: Number,
  body: String,
  date_written: Number,
  asker_name: String,
  asker_email: String,
  reported: {
    type: Number,
    default: 0
  },
  helpful: {
    type: Number,
    default: 0
  },
  answers:[AnswerSchema]
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = { Answer, Question };