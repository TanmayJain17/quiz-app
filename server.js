const express = require('express');
const { db } = require('./db/connection');
const path = require('path'); 


const detailsRoute = require('./routes/details/index.js')
const scoreRoute = require('./routes/score/index.js')
const findScores = require('./routes/findScore/index.js')
const app = express()

const PORT = process.env.PORT || 4444;
app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.urlencoded({extended: true})) //bodyParser
app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')));

app.use('/findall',findScores)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
/* if(process.env.NODE_ENV==='production'){ */
app.use('/details',detailsRoute)
app.use('/score',scoreRoute)

/* app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  });
 */
/* app.get('/',(req, res)=>{
    res.send('ok it is working')
}) */


db.sync()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`'server started on http://localhost:${PORT}`)
    })
}) 
.catch((err)=>{
    console.error(err)
})