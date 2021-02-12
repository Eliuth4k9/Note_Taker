const { dirname } = require('path');
const path = require('path');

module.exports = app => {

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/index.html'));
        console.log('i am index');
    });

    app.get('/notes',function(req, res){
        res.sendFile(path.join(__dirname, '../public/notes.html'));
        console.log('i work fine');
    }); 
}