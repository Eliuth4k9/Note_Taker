const { json } = require('body-parser');
const path = require('path')
var fs = require('fs');


module.exports = app => {
    var notes;
    var savedNotes = fs.readFileSync('db/db.json', 'UTF-8');
if (savedNotes) {
    var oldNotes = JSON.parse(savedNotes);
    noteData = oldNotes;
}
else {
    notes = [];
}

app.get('/api/notes', function(req, res) {
    console.log('get me something')
    return res.json(notes);
});

app.post('/api/notes', function(req, res) {
    var newNote = req.body;
    console.log(newNote, 'its me new data');
    notes.push(newNote);
    res.JSON(newNote);
    varID();
    fs.writeFileSync('db/db.json', JSON.stringify(notes, 2), function (err) {
        if (err)
        throw err
    });
});

app.delete('/api/notes/:id', function (req, res){
    console.log(req.params.id, 'hi');
    let deleteID = req.params.id;
    notes.splice(deleteID, 1);
    varID();
    fs.writeFileSync('db/db.json', JSON.stringify(notes), function (err) {
        if (err)
        throw err
    });
    res.json({deletion:'success'})
});

function varID() {
    for (i = 0; i < notes.length; i ++) {
        notes[i].id = i;
    }
}
}