import React from 'react'
import mainStyle from '../AdminPage/AdminPage.module.css'
import AdminHeader from '../../components/AdminHeader/AdminHeader'

function AdminPage() {
    return (
        <div className={mainStyle.container}>
            {/* header */}
            <AdminHeader className={mainStyle.header}/>
        
            {/* dashboard */}
            <div className={mainStyle.dashboard}></div>
        </div>
    )
}

export default AdminPage
