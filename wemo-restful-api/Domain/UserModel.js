'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  createdAt: {
    $type: Date,
    $default: new Date()
  },
  UserName: {
    $type: 'string',
    $required: true
  },
  Password: {
    $type: 'string',
    $required: true
  }
}).compile('UserModel')