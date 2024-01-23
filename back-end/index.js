const express = require('express')
const cors = require('cors')

const db = require("./mysql/index")

const port = 9999
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/getall', (req, res) => {
      db.getAll((err, results) => {
            if (err) {
                  res.status(500).send(err)
            } else {
                  res.json(results)
            }
      })
}),
      app.get('/getone/:id', (req, res) => {
            const id = req.params.id;

            db.getone(id, (err, results) => {
                  if (err) {
                        res.status(500).send(err);
                  } else {
                        if (results.length === 0) {
                              res.status(404).json({ error: 'Product not found' });
                        } else {
                              res.json(results[0]); // Assuming you only expect one result
                        }
                  }
            });
      }),
      app.post('/add', (req, res) => {
            db.add(req.body, (err, results) => {
                  if (err) {
                        res.status(500).send(err)
                  } else {
                        res.json(results)
                  }
            })
      }),

      app.delete('/DELETE/:id', (req, res) => {
            db.DELETE(req.params.id, (err, results) => {
                  if (err) {
                        res.status(500).send(err)
                  } else {
                        res.json(results)
                  }
            })
      }),


      app.put('/update/:id', (req, res) => {
            db.update(req.params.id, req.body, (err, result) => {
                  if (err) {
                        res.status(500).send(err);
                  } else {
                        res.json(result);
                  }
            })
      }),
      app.get('/search/:term', (req, res) => {
            const searchTerm = req.params.term;

            db.search(searchTerm, (err, results) => {
                  if (err) {
                        res.status(500).send(err);
                  } else {
                        res.json(results);
                  }
            });
      });




app.listen(port, () => {
      console.log(`listening on ${port}`)
})
