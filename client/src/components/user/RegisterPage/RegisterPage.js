import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/member_action'
import { withRouter } from 'react-router-dom'

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
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label>User Name</label>
                <input type="text" value={Username} onChange={onUsernameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                
                <br />
                <button type="submit"> 회원가입 </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
