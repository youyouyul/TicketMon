import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/member_action'

export default function (SpecificComponent, option, adminRoute = null) {
    // 백엔드에 사용자 상태 정보를 요청
    // option
    // null : 아무나 출입 가능
    // true : 로그인한 사용자만 출입 가능
    // false : 로그인한 사용자는 출입 불가능
    function AuthenticationCheck(props) {
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)

                if (!response.payload.isAuth) { // 미로그인
                    if (option) {
                        props.history.push('/login')
                    }
                } else { // 로그인
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if (!option) {
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}