express = require('express')
app = express();
let ejs = require('ejs');
path = require('path');
app.use(express.static(path.join(__dirname, '/public')))
metrics = require('./metrics.js');

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');
app.set('port', 1337)


app.get('/metrics.json', (req, res) => {
    metrics.get((err, data) => {
      if(err) throw err
      res.status(200).json(data)
    })
  })


app.get(
    '/hello/:name', 
    (req, res) => res.render('hello.ejs', {name: req.params.name})
  )

// app.get('/', function (req, res) {
//     people = ['geddy', 'neil', 'alex'],
//     html = ejs.render('<h1><%=  people.join(", ");  %></h1>', {people: people});
//     // GET
//     res.send(html);
// })


// app.get('/hello/:name', (req, res) => 
//     res.send("Hello " + req.params.name)
//     )


app.listen(
    app.get('port'),
    () => console.log(`server listening on ${app.get('port')}`)
)



    