
var mongoose = require('mongoose');

    var columnSchema = mongoose.Schema({
        name: String,
        description: String
    });

    var Column = mongoose.model('Columns', columnSchema);

    var firstColumn = new Column ({ name: 'First Card', description: 'hola'});
    console.log(firstColumn); // 'Silence'

    firstColumn.save(function (err, firstColumn) {
        if (err) return console.error(err);
        console.log('Saved');
        process.exit()
        });