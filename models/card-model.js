
var mongoose = require('mongoose');

    var cardSchema = mongoose.Schema({
        name: {type: String, required: true},
        description: {type: String, required: true},
        assignee: {type: String, required: true}
    });

    var Card = mongoose.model('card', cardSchema);

    module.exports = Card

    // var firstCard = new Card ({ name: 'First Card', description: 'holaaa', assignee: 'Jarcor'});
    // console.log(firstCard); // 'Silence'

    // firstCard.save(function (err, firstCard) {
        // // if (err) return console.error(err);
        // console.log('Saved');
        // process.exit()
        // });