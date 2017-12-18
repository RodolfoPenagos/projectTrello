
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

    
});