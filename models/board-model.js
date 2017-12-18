
var mongoose = require('mongoose');

    var boardSchema = mongoose.Schema({
            company: {type: String, required: true},
            projectName: {type: String, required: true},
            description: {type: String, required: true},
            githubRepo: {type: String, required: true}
    });

    var Board = mongoose.model('Board', boardSchema);

    var firstBoard = new Board ({ company: 'Nattiv', projectName: 'Maya', description: 'A.I project'});
        console.log(firstBoard); // 'Silence'

    firstBoard.save(function (err, firstBoard) {
            if (err) return console.error(err);
            console.log('Saved');
            process.exit()
        });
      