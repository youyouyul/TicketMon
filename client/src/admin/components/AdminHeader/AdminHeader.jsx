import React from 'react'
import classNames from 'classnames/bind'
import Logo from '../../../resources/ticketmon_logo.png'
import styles from '../AdminHeader/AdminHeader.module.css'
import {ADMIN_MGMT, USER_MGMT, AUTH_MGMT} from '../../../Config'

const cx = classNames.bind(styles);

function AdminHeader({onClick}) {

    const onClickPageType = (type) => {
        onClick(type)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_logo}>
                <a href="/admin" title="TicketMon 관리자"><img src={Logo} height="60px" alt="TicketMon"/></a>
            </div>
            <ul className={cx('nav_menu', 'active')}>
                <li className={styles.nav_item}><a className={styles.nav} onClick={() => onClickPageType(ADMIN_MGMT)}>관리자 관리</a></li>
                <li className={styles.nav_item}><a className={styles.nav} onClick={() => onClickPageType(USER_MGMT)}>사용자 관리</a></li>
                <li className={styles.nav_item}><a className={styles.nav} onClick={() =>onClickPageType(AUTH_MGMT)}>권한 관리</a></li>
            </ul>
            <ul className={cx('nav_user', 'active')}>
                <li className={styles.nav_item}><a href="/" className={styles.nav}>TicketMon</a></li>
                <li className={styles.nav_item}><a href="/login" className={styles.nav} onClick>로그아웃</a></li>
            </ul>
        </nav>
    )
}

export default AdminHeader