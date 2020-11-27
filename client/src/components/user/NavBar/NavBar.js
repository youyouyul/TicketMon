import React, { useState } from 'react'
import styles from './NavBar.module.scss'
import Logo from '../../../resources/ticketmon_logo.png'
import classNames from 'classnames/bind'
import Button from '../../Button/Button'
import axios from 'axios'

const cx = classNames.bind(styles);

function NavBar(props) {
    const [isActive, setNav] = (useState(false))
    const toggleNav = () => {
        setNav(isActive => !isActive)
    }

    const [SearchQuery, setSearchQuery] = useState("")
    const searchHandler = (e) => {
        setSearchQuery(e.currentTarget.value)
    }

    const logoutHandler = () => {
        axios.get('/api/members/logout').then(response => {
          if (response.data.success) {
            props.history.push('/login')
          } else {
            alert('로그아웃 실패')
          }
        })
      }

    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_logo}>
                <a href="/" title="TicketMon 메인"><img src={Logo} height="60px" alt="TicketMon"/></a>
            </div>
            <ul id="nav_menu" className={cx('nav_menu', isActive ? 'active' : '')}>
                <li><a href="/concert">공연</a></li>
                <li><a href="/trade">거래</a></li>
            </ul>
            <div className={styles.nav_search}>
                <input type="text" value={SearchQuery} onChange={searchHandler} className={cx('text_input')}/>
                <Button color='orange' size='none'>검색</Button>
            </div>
            <ul id="nav_user" className={cx('nav_user', isActive ? 'active' : '')}>
                <li><a href="/mypage">마이페이지</a></li>
                <li><a href="/logout" onClick={logoutHandler}>로그아웃</a></li>
                <li><a href="/login">로그인</a></li>
            </ul>
            <a href="#" className={styles.nav_toggleBtn} onClick={toggleNav}>#</a>
        </nav>
    )
}

export default NavBar
