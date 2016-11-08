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

module.exports = router
