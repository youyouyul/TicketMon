import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

function LandingPage(props) {
  useEffect(() => {
    axios.get('/api/hello').then(response => {
      console.log(response)
    })
  }, [])

  const onClickHandler = () => {
    axios.get('/api/members/logout').then(response => {
      if (response.data.success) {
        props.history.push('/login')
      } else {
        alert('로그아웃 실패')
      }
    })
  }

  return (
    <div>
      <NavBar></NavBar>
      <h2>시작 페이지</h2>
      <br />
      <button onClick={onClickHandler}>로그아웃</button>      
    </div>
  )
}

export default withRouter(LandingPage)
