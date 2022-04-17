const expresss = require('express');
const app = expresss();

app.get('/', (req, res) => {
    res.sendFile('./templates/homePage.html', {root : __dirname} )
});

app.get('/api/', (req, res) => {
    res.send([1, 2, 3]);
});

const port = process.env.PORT || 3000;
app.use('/source', expresss.static(__dirname + '/source'));

app.listen(port, () => console.log(`Listening on port ${port}...`));