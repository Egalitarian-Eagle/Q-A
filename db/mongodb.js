const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdc', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected'), err => console.log('err'));
const { Schema, model } = mongoose;


const PhotoSchema = new Schema({
  photos_id: Number,
  url: String
})

const Photo=model('Photo',PhotoSchema);

const AnswerSchema = new Schema({
  id: Number,
  body: String,
  date: String,
  answerer_name: String,
  helpfulness: Number,
  photos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo',
  }

})
const Answer=model('Answer',AnswerSchema);

const QuestionSchema = new Schema({
  product_id: Number,
  results: [{
    question_id: Number,
    question_body: String,
    question_date: String,
    asker_name: String,
    question_helpfulness: {
      type:Number,
      default:0
    }
    reported: Boolean,
    answers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer',
    }
});

const Question = mongoose.model('Question', QuestionSchema);


module.exports={Answer,Photo,Question};