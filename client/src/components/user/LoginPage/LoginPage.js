import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/member_action'
import { withRouter } from 'react-router-dom'
import Button from '../../Button/Button'
import styles from './LoginPage.module.scss'
import Logo from '../../../resources/ticketmon_logo.png'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

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
        <div className={styles.wrap}>
            <div className={styles.header}>
                <a href="/" title="TicketMon 메인"><img src={Logo} width="300px" alt="TicketMon" /></a>
            </div>
            <div className={styles.input_area}>
                <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                    <input type="text" value={Username} onChange={onUsernameHandler} className={cx('text_input', 'id_input')} placeholder="아이디" />
                    <input type="password" value={Password} onChange={onPasswordHandler} className={styles.text_input} placeholder="비밀번호" />
                    <div>
                        <div className={styles.wrap_info}>
                            <a title="아이디 찾기" className={styles.first_child}>아이디 찾기</a>
                            <span className={styles.bar}>|</span>
                            <a title="비밀번호 찾기">비밀번호 찾기</a>
                            <span className={styles.bar}>|</span>
                            <a href="/register" title="회원가입">회원가입</a>
                        </div>
                    </div>
                    <br />
                    <Button type="submit" size="large" color="orange" fullWidth>로그인</Button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(LoginPage)