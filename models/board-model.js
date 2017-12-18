
var mongoose = require('mongoose');

    var boardSchema = mongoose.Schema({
            company: String,
            projectName: String,
            description: String,
            githubRepo: String
    });

    var Board = mongoose.model('Board', boardSchema);

    var firstBoard = new Board ({ company: 'Nattiv', projectName: 'Maya', description: 'A.I project'});
        console.log(firstBoard); // 'Silence'

    firstBoard.save(function (err, firstBoard) {
            if (err) return console.error(err);
            console.log('Saved');
            process.exit()
        });
      