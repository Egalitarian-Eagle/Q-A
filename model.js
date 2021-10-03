const mongoose = require('mongoose');
const { Question, Answer } = require('./db/mongodb.js')

module.exports.model = {
  getQA: (id, callback) => {
    Question.aggregate([
      { '$match': { 'product_id': Number(id) } },
      {
        '$lookup': {
          'from': 'answers',
          'localField': 'id',
          'foreignField': 'question_id',
          'as': 'answers'
        }
      }
    ]).exec((err, data) => {
      if (err) {
        console.log(err)
      } else {
        callback(err, data)
      }
    })
  },
  postA: (ans, callback) => {
    Answer.count({}, (err, count) => {
      Answer.create({ id: count + 1, question_id: ans.question_id, body: ans.body, date_written: new Date().now, answerer_name: ans.name, answerer_email: ans.email, photos: ans.photos }, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          callback(err, data)
        }
      })
    });
  },
  postQ:(question,callback)=>{
    Question.count({},(err,count)=>{
      Question.create({id:count+1,product_id:question.product_id,body:question.body,date_written: new Date().now,asker_name:question.name,asker_email:question.email},(err, data) => {
        if (err) {
          console.log(err)
        } else {
          callback(err, data)
        }
      })
    })
  },
  reportQ:(body,callback)=>{
    Question.updateOne({id:body.question_id},{reported:1},(err, data) => {
      if (err) {
        console.log(err)
      } else {
        callback(err, data)
      }
    })
  },
  helpfulQ:(body,callback)=>{
    Question.updateOne({id:body.question_id},{helpful:body.helpful+1},(err, data) => {
      if (err) {
        console.log(err)
      } else {
        callback(err, data)
      }
    })
  },
  helpfulA:(body,callback)=>{
    Answer.updateOne({id:body.answer_id},{helpful:body.helpful+1},(err, data) => {
      if (err) {
        console.log(err)
      } else {
        callback(err, data)
      }
    })
  }
}

