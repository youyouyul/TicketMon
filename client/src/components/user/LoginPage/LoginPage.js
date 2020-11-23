import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/member_action'
import { withRouter } from 'react-router-dom'
import Button from '../../Button/Button'
import './LoginPage.scss'

function LoginPage(props) {
    const dispatch = useDispatch()

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            username: Username,
            password: Password
        }

        dispatch(loginUser(body)).then(response => {
            if (response.payload.loginSuccess) {
                props.history.push('/')
            } else {
                alert('로그인 실패')
            }
        })
    }

    return (
        <div className="LoginPage">
            <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label>User Name</label>
                <input type="text" value={Username} onChange={onUsernameHandler} />
                
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                
                <br />
                <Button type="submit" size="large" color="orange" fullWidth>로그인</Button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)