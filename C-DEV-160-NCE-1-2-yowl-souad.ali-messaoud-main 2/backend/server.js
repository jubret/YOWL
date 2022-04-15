// set configuration
require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

const AuthMiddleware = require('./middleware/Auth')
const app = express()

var cors = require("cors");
app.use(cors());

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(e => {
    console.log('Connecting to database failed')
    console.log(e)
  })

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// static folder（ js、css ... ）
app.use(express.static(path.resolve(__dirname, '../dist')))

// middleware setting
app.use(AuthMiddleware.GetLoginUser)

// API routing
const UserRouters = require('./routes/User/index')
const PostRouters = require('./routes/post/post.route')
const CommentRouters = require('./routes/commentaire/comment.route')
UserRouters.forEach((RouteItem) => {
  app.use('/API/user/', RouteItem)
})
app.use('/API/post/', PostRouters)
app.use('/API/comment/', CommentRouters)



app.get('*', (req, res) => {
  res.json({
    msg: 'API'
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is started`)
  console.log(`Server environment: ${process.env.NODE_ENV}`)
  console.log(`Listening on ${process.env.PORT} port`)
  console.log('')
})

module.exports = {
  app
}
