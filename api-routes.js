// Libraries
var express = require('express')
var router = express.Router()

// SQLite3 Library (https://github.com/mapbox/node-sqlite3/wiki/API)
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./store.sqlite3')

// Routes
router.get('/users', function (req, res) {
  var format = req.query.format

  db.serialize(function () {
    db.all('SELECT * FROM users', (error, rows) => {
          if(!error) {
            if (format === 'json'){
              res.json(rows)
            } else {
              res.render('users.html', {users: rows})
            }
          } else {
            if (format === 'json') {
              res.json({errors: [error]})
            } else {
              res.render('error.html')
            }
          }
        })
  })
})

router.post('/users', function (req, res) {
  var body = req.body
  // var params = [
  //   body.first_name,
  //   body.last_name,
  //   body.email
  // ]

  db.serialize(function () {
    // console.log(params)
    // db.run("INSERT INTO users (first_name, last_name, email) VALUES (? ,? ,?)", [params], (error) => {
    db.run("INSERT INTO users (first_name, last_name, email) VALUES (? ,? ,?)", [body.first_name, body.last_name, body.email], (error) => {
      if (!error) {
        res.json({success:true})
      }
    });
  })
})

router.patch('/user/:id', function (req, res) {
    var body = req.body
    var id = req.params.id

  db.serialize(function () {

    db.run("UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id= ?",[body.first_name, body.last_name, body.email, id], (error) => {
      if (!error) {
        res.json({success:true})
      }
    })
  })
})

router.delete('/user/:id', function (req, res) {
    var id = req.params.id

  db.serialize(function () {

    db.run("DELETE FROM users WHERE id= ?", id, (error) => {
      if (!error) {
        res.json({success:true})
      }
    })
  })
})

router.get('/orders', function (req, res) {
  var format = req.query.format

  db.serialize(function () {
    db.all('SELECT * FROM orders', (error, rows) => {
          if(!error) {
            if (format === 'json'){
              res.json(rows)
            } else {
              res.render('orders.html', {orders: rows})
            }
          } else {
            if (format === 'json') {
              res.json({errors: [error]})
            } else {
              res.render('error.html')
            }
          }
        })
  })
})

router.post('/orders', function (req, res) {
  var body = req.body

  db.serialize(function () {
    db.run("INSERT INTO orders (user_id, item_id, quantity, created_at) VALUES (? ,? ,?)", [body.user_id, body.item_id, body.quantity, body.created_at], (error) => {
      if (!error) {
        res.json({success:true})
      }
    });
  })
})

router.patch('/order/:id', function (req, res) {
    var body = req.body
    var id = req.params.id

  db.serialize(function () {

    db.run("UPDATE orders SET user_id = ?, item_id = ?, quantity = ?, created_at = ? WHERE id= ?",[body.user_id, body.item_id, body.quantity, body.created_at, id], (error) => {
      if (!error) {
        res.json({success:true})
      }
    })
  })
})

router.delete('/order/:id', function (req, res) {
    var id = req.params.id

  db.serialize(function () {

    db.run("DELETE FROM orders WHERE id= ?", id, (error) => {
      if (!error) {
        res.json({success:true})
      }
    })
  })
})


router.get('/addresses', function (req, res) {
  var format = req.query.format

  db.serialize(function () {
    db.all('SELECT * FROM addresses', (error, rows) => {
          if(!error) {
            if (format === 'json'){
              res.json(rows)
            } else {
              res.render('addresses.html', {addresses: rows})
            }
          } else {
            if (format === 'json') {
              res.json({errors: [error]})
            } else {
              res.render('error.html')
            }
          }
        })
  })
})

router.post('/addresses', function (req, res) {
  var body = req.body

  db.serialize(function () {
    db.run("INSERT INTO addresses (user_id, address, city, state, zip) VALUES (? ,? ,?)", [body.user_id, body.address, body.city, body.state, body.zip], (error) => {
      if (!error) {
        res.json({success:true})
      }
    });
  })
})

router.patch('/address/:id', function (req, res) {
    var body = req.body
    var id = req.params.id

  db.serialize(function () {

    db.run("UPDATE addresses SET user_id = ?, address = ?, city = ?, state = ?, zip = ? WHERE id= ?",[body.user_id, body.address, body.city, body.state, body.zip, id], (error) => {
      if (!error) {
        res.json({success:true})
      }
    })
  })
})

router.delete('/address/:id', function (req, res) {
    var id = req.params.id

  db.serialize(function () {

    db.run("DELETE FROM addresses WHERE id= ?", id, (error) => {
      if (!error) {
        res.json({success:true})
      }
    })
  })
})


router.get('/items', function (req, res) {
  var format = req.query.format

  db.serialize(function () {
    db.all('SELECT * FROM items', (error, rows) => {
          if(!error) {
            if (format === 'json'){
              res.json(rows)
            } else {
              res.render('items.html', {items: rows})
            }
          } else {
            if (format === 'json') {
              res.json({errors: [error]})
            } else {
              res.render('error.html')
            }
          }
        })
  })
})

router.post('/items', function (req, res) {
  var body = req.body

  db.serialize(function () {
    db.run("INSERT INTO items (title, category, description, price) VALUES (? ,? ,?)", [body.title, body.category, body.description, body.price], (error) => {
      if (!error) {
        res.json({success:true})
      }
    });
  })
})

router.patch('/item/:id', function (req, res) {
    var body = req.body
    var id = req.params.id

  db.serialize(function () {

    db.run("UPDATE items SET title = ?, category = ?, description = ?, price = ? WHERE id= ?",[body.title, body.category, body.description, body.price, id], (error) => {
      if (!error) {
        res.json({success:true})
      }
    })
  })
})

router.delete('/item/:id', function (req, res) {
    var id = req.params.id

  db.serialize(function () {

    db.run("DELETE FROM items WHERE id= ?", id, (error) => {
      if (!error) {
        res.json({success:true})
      }
    })
  })
})


module.exports = router
