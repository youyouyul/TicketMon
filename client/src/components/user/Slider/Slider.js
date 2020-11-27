import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Slider.module.scss'

class Slide extends Component {
    render() {
        const { index, img, title, summary, ...props } = this.props;

        return (
            <a href='#' className={styles.slide} {...props}>
                <img src={img} />
                <span className={styles.txt}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.summary}>{summary}</span>
                </span>
            </a>
        )
    }
}

export default class ImageSlider extends Component {
  render() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true
    }

    const concerts = this.props.concerts

    return (
        <div className={styles.ImageSlider}>
            <Slider {...settings}>
                {concerts.map(concert => (
                    <Slide title={concert.title} summary={concert.summary} img={concert.img}></Slide>
                ))}
            </Slider>
        </div>
    )
  }
}