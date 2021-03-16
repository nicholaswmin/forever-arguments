'use strict'

// Parse command line arguments.
// Produces an object:
// {
//   env: 'production',
//   name: 'nikolas'
// }
const opts = require('nomnom').parse()

const express = require('express')
const app = express()

console.log('env:', opts.env)
console.log('name:', opts.name)

app.listen(5009, () => {
  console.log('Listening 5009')
})
