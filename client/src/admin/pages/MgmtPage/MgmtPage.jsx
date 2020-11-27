import React from 'react'
import AdminMgmt from '../../components/AdminMgmt/AdminMgmt'
import AuthMgmt from '../../components/AuthMgmt/AuthMgmt'
import UserMgmt from '../../components/UserMgmt/UserMgmt'
import {ADMIN_MGMT, USER_MGMT, AUTH_MGMT} from '../../../Config'

function MgmtPage({type}) {
    if(type == ADMIN_MGMT)
        return <AdminMgmt />
    else if(type == USER_MGMT)
        return <UserMgmt />
    else if(type == AUTH_MGMT)
        return <AuthMgmt />
    else return <div></div>
}

export default MgmtPage
