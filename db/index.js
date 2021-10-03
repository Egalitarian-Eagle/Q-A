// const db = require('./mongodb.js');
const mongoose = require('mongoose');

// const fs = require('fs');
// const csv = require('csvtojson');
// let exec = require('child_process').exec

const importData = () => {
  // let command = 'mongoimport --db sdc --collection questions --file ../../csv/questions.csv --type csv --headerline & mongoimport --db sdc --collection answers --file ../../csv/answers.csv --type csv --headerline & mongoimport --db sdc --collection photos --file ../../csv/answers_photos.csv --type csv --headerline'
  // exec(command, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('finish import');
  //   }
  // });
  mongoose.connect('mongodb://localhost/sdc', async (err, db) => {
    // await db.collection('answers').createIndex({ id: 1 }, { unique: true });
    // await db.collection('photos').createIndex({ answers_id: 1 });
    // await db.collection('questions').createIndex({ product_id: 1 });
    // await db.collection('answers').find().forEach((answer) => {
    //   db.collection('photos').aggregate(
    //     [
    //       { $match: {answer_id:answer.id} },
    //       {
    //         $group: {
    //           _id: null,
    //           id: { $last: '$answer_id' },
    //           photos: { $push: { url: "$url" } }
    //         }
    //       },
    //       { $unset: "_id" },
    //       {
    //         $merge: {
    //           into: 'answers',
    //           on: 'id'
    //         }
    //       }
    //     ]
    //   )
    // })

    // await db.collection('answers').updateMany({}, { $set: { photos: [] } });

    await db.collection('photos').find().forEach((photo) => {
      console.log('insert photos: ',photo.answer_id)
      db.collection('answers').updateOne({ id: photo.answer_id }, {
        $push: { 'photos': photo.url }
      })
    })


  }, { useNewUrlParser: true, useUnifiedTopology: true })

}
importData();
