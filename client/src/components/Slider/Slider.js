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

const concerts = [
    {
        index: 1,
        title: '〈캣츠〉 40주년 내한공연－서울',
        summary: '전 세계가 사랑한 영원한 명작!',
        img: 'https://cdnticket.melon.co.kr/resource/image/upload/marketing/2020/10/20201013115337c05ff3b6-7641-4cfd-93ce-f4400b4bce1a.jpg'
    },
    {
        index: 2,
        title: '젠틀맨스 가이드：사랑과 살인편',
        summary: '기상천외한 독창적 코미디 뮤지컬',
        img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/20201007145358b04e3a6d-f72c-482f-a142-ce78755e66fa.jpg'
    },
    {
        index: 3,
        title: '정유진 첫 번째 단독 콘서트：MAIL',
        summary: '보이스 코리아 2020’의 화제의 주인공',
        img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201105143829488f0685-ad92-4c93-bded-0c19b1eb07b4.jpg'
    },
    {
        index: 4,
        title: '허각 10주년 콘서트 〈공연각〉',
        summary: '안녕하세요,  공연하는, 허각 입니다.',
        img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/202011181212320e527b2a-2acf-4fcd-8e12-31931a459d63.jpg'
    },
    {
        index: 5,
        title: '브로콜리너마저 콘서트',
        summary: '한 해의 마무리를 함께하는 특별한 시간',
        img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201118115338e6e135ca-4c47-4966-a8d0-522d6c35eee0.jpg'
    },
    {
        index: 6,
        title: '카더가든 연말 공연',
        summary: '이 시대의 아름다운 싱어송라이터 시리즈',
        img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/20201022134200f7d0e949-a77e-4010-acc4-2efc43d4d557.jpg'
    },
]

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