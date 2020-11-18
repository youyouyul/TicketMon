const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { Member } = require("./models/Member")
const { auth } = require("./middleware/auth")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect('mongodb+srv://sera:qwer1234@cluster0.evabn.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!')
})

app.get('/api/hello', (req, res) => {
  res.send('Hello!!!!!!!')
})

// 회원가입
app.post('/api/members/register', (req, res) => {
  const member = new Member(req.body)

  member.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })

    return res.status(200).json({ success: true })
  })
})

// 로그인
app.post('/api/members/login', (req, res) => {
  // 회원가입된 사용자인지 확인
  Member.findOne({ username: req.body.username }, (err, member) => {
    if (!member) {
      return res.json({
        loginSuccess: false,
        message: "존재하지 않는 사용자입니다."
      })
    }
    
    // 존재하는 사용자면 비밀번호 확인
    member.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

      // 비밀번호가 맞으면 토큰 생성
      member.generateToken((err, member) => {
        if (err) return res.status(400).send(err)

        // 쿠키에 토큰 저장
        res.cookie("x_auth", member.token).status(200)
          .json({ loginSuccess: true, _id: member._id})
      })
    })
  })
})

// 토큰으로 auth 확인
app.get('/api/members/auth', auth, (req, res) => {
  // 미들웨어를 통과해 왔으므로 auth가 확인된 상태
  res.status(200).json({
    _id: req.member._id,
    username: req.member.username
  })
})

// 로그아웃
app.get('/api/members/logout', auth, (res, req) => {
  Member.findOneAndUpdate(
    { _id: req.member._id }, { token: ""}, // 토큰 초기화
    
    (err, member) => {
      if (err) return res.json({ success: false, err })
      return res.status(200).send({ success: true})
    }
  )
})