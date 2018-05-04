'use strict'

const http = require('http')
const https = require('https')

function pgSlackNotifier (opts) {
  return new Promise((resolve, reject) => {
    if (typeof opts !== 'object') {
      return reject(new Error('Missing necessary slack webhook parameters'))
    }
  })
}

module.exports = pgSlackNotifier
