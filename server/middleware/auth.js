const { Member } = require("../models/Member")

let auth = (req, res, next) => {
    // 인증 처리
    // 클라이언트 쿠키에서 토큰 가져오기
    let token = req.cookies.x_auth

    // 토큰 복호화, 유저 찾기
    Member.findByToken(token, (err, member) => {
        if (err) throw err
        if (!member) return res.json({ isAuth: false, error: true })

        req.token = token
        req.member = member
        next()
    })
}

module.exports = { auth }