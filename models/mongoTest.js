
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!')

    var cardSchema = mongoose.Schema({
        name: String,
        description: String,
        assignee: String
    });

    var Card = mongoose.model('columns', cardSchema);

    var silence = new Card ({ name: 'First Card', description: 'holaaa', assignee: 'Jarcor'});
    console.log(silence); // 'Silence'

    silence.save(function (err, silence) {
        if (err) return console.error(err);
        console.log('Saved');
        process.exit()
      });

  //   var boardSchema = mongoose.Schema({
  //     company: String,
  //     projectName: String,
  //     description: String,
  //     githubRepo: String
  // });

  // var Board = mongoose.model('Board', boardSchema);

  // var firstBoard = new Board ({ company: 'Nattiv', projectName: 'Maya', description: 'A.I project'});
  // console.log(firstBoard); // 'Silence'

  // firstBoard.save(function (err, firstBoard) {
  //     if (err) return console.error(err);
  //     console.log('Saved');
  //     process.exit()
  //   });

    
});