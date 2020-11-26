import React from 'react'
import express from 'express'

const config = {
  port: 8080
}


const app = express()

// serve our static stuff through the public directory
app.use(express.static('public'))

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  serve((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        // You can also check renderProps.components or renderProps.routes for
        // your "not found" component or route respectively, and send a 404 as
        // below, if you're using a catch-all route.
        res.status(200).send(<RouterContext {...renderProps} />)
        // res.status(200).send(renderToString(<RouterContext {...renderProps} />))
      } else {
        res.status(404).send('Not found')
      }
    })
  })
})

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

module.exports = require('./config/express')(app, config);