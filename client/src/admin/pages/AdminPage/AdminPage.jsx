import React, {useState, useCallback} from 'react'
import mainStyle from '../AdminPage/AdminPage.module.css'
import AdminHeader from '../../components/AdminHeader/AdminHeader'
import MgmtPage from '../MgmtPage/MgmtPage';
import {DASHBOARD} from '../../../Config'

function AdminPage() {
    const [pageType, setPageType] = useState(DASHBOARD);

    const onClick = useCallback( type => {
        setPageType(type);
    }, [pageType]);

    return (
        <div className={mainStyle.container}>
            {/* header */}
            <AdminHeader className={mainStyle.header} onClick={onClick}/>
        
            {/* dashboard */}
            { pageType == 0 ?
                <div className={mainStyle.dashboard}>DashBoard</div>
                : <MgmtPage type={pageType}/>
            }
        </div>
    )
}

export default AdminPage
