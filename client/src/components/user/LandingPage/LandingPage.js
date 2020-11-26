import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Slider from '../../Slider/Slider'

function LandingPage(props) {
  useEffect(() => {
    axios.get('/api/hello').then(response => {
      console.log(response)
    })
  }, [])

  return (
    <div>
      <NavBar></NavBar>
      <Slider></Slider>
    </div>
  )
}

export default withRouter(LandingPage)
