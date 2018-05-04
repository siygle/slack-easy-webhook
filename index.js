'use strict'

const url = require('url')
const https = require('https')

function SlackEasyWebhook (link, opts) {
  return new Promise((resolve, reject) => {
    if (typeof opts !== 'object' || typeof link !== 'string') {
      return reject(new Error('Missing necessary input parameters'))
    }

    const notPass = ['channel', 'text'].some(i => {
      return opts.hasOwnProperty(i) === false
    })
    if (notPass) {
      return reject(Error('channel & text are necessary parameters'))
    }

    const postBody = JSON.stringify(opts)

    const webhookURL = url.parse(link)
    const req = https.request({
      protocol: webhookURL.protocol,
      hostname: webhookURL.hostname,
      path: webhookURL.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postBody)
      }
    }, (res) => {
      res.on('data', (d) => {
        return resolve(Buffer.from(d).toString('utf-8'))
      })
    })
    req.write(postBody)
    req.end()

    req.on('error', (err) => {
      return reject(err)
    })
  })
}

module.exports = SlackEasyWebhook
