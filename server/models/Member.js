const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

const memberSchema = mongoose.Schema({
    userName: {
        type: String,
        minlength: 2,
        maxlength: 10
    },
    password: {
        type: String
    },
    authId: {
        type: Number
    },
    token: {
        type: String
    }
})

memberSchema.pre('save', function(next) {
    var member = this

    if (member.isModified('password')) {
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)

            bcrypt.hash(member.password, salt, function(err, hash) {
                if (err) return next(err)

                member.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

// 비밀번호 일치 여부 확인
memberSchema.methods.comparePassword = function(plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

// 로그인 시 토큰 생성
memberSchema.methods.generateToken = function(callback) {
    var member = this
    var token = jwt.sign(member._id.toHexString(), 'secretToken') // token = _id + secretTocken

    member.token = token

    member.save(function(err, member) {
        if (err) return callback(err)
        callback(null, member)
    })
}

// 토큰으로 사용자 찾기
memberSchema.statics.findByToken = function(token, callback) {
    var member = this

    // decode token
    jwt.verify(token, 'secretToken', function(err, decoded) {
        member.findOne({"_id": decoded, "token": token }, function(err, member) {
            if (err) return callback(err)
            callback(member)
        })
    })

}

const Member = mongoose.model('Member', memberSchema)

module.exports = { Member }