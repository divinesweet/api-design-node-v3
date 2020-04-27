import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const router = express.Router()

router.get('/me', (req, res) => {
  res.send({ me: 'hello from the router get' })
})

const routes = [
  'get /cat',
  'get cat/:id',
  'post /cat',
  'put /cat/:id',
  'delete /cat/:id'
]

router
  .routes('/cat')
  .get()
  .post()

router
  .routes('/cat/:id')
  .get()
  .put()

app.use('/api', router)
/*
const myLog = (req, res, next) => {
  console.log('logging')
  req.mydata = 'i am from a contorller midleware'
  next()
}

app.get('/data', [myLog, myLog, myLog], (req, res) => {
  res.send({ mesage: 'hello' })
})

app.post('/data', [myLog, myLog, myLog], (req, res) => {
  console.log(req.body)
  res.send({ data: req.mydata })
})

app.put('/data', (req, res) => {
  console.log(req.body)
  res.send({ ok: true })
})

app.delete('/data', (req, res) => {
  console.log(req.body)
  res.send({ ok: true })
})
*/
export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
