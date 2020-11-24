import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/member_action'
import { withRouter } from 'react-router-dom'
import Button from '../../Button/Button'
import './RegisterPage.scss'
import Logo from '../../../resources/ticketmon_logo.png'

function RegisterPage(props) {
    const dispatch = useDispatch()

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호가 일치하지 않습니다.')
        }

        let body = {
            username: Username,
            password: Password
        }

        dispatch(registerUser(body)).then(response => {
            if (response.payload.success) {
                props.history.push('/login')
            } else {
                alert('회원가입 실패')
            }
        })
    }

    return (
        <div className="wrap">
            <div className="login_header">
                <a href="/" title="TicketMon 메인"><img src={Logo} width="300px" alt="TicketMon" /></a>
            </div>
            <div className="input_area">
                <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                    <input type="text" value={Username} onChange={onUsernameHandler} className="text_input" placeholder="아이디" />
                    <input type="password" value={Password} onChange={onPasswordHandler} className="text_input" placeholder="비밀번호" />
                    <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} className="text_input" placeholder="비밀번호 확인" />
                    <br />
                    <Button type="submit" size="large" color="orange" fullWidth>회원가입</Button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(RegisterPage)
