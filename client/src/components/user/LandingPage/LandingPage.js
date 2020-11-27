import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Slider from '../Slider/Slider'
import PostList from '../PostList/PostList'
import styles from './LandingPage.module.scss'

// dummy data
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
const posts = [
  {
    id: 1,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201110103105ee61f26c-9783-442b-b3ea-1f194b9437a2.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '신지훈 콘서트',
    price: '30000원'
  },
  {
    id: 2,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/202011101533414c00f966-8737-4a23-a184-ba5582f18ed9.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'a구역',
    want: 'b구역'
  },
  {
    id: 3,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201110103105ee61f26c-9783-442b-b3ea-1f194b9437a2.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: '아무구역 2연석'
  },
  {
    id: 4,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/2020102016595281d50cce-5f11-4df9-8fe0-5f49261617f6.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '거미 콘서트 3연석',
    price: '100,000원'
  },
  {
    id: 5,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '캣츠 R석',
    price: '원가양도'
  },
  {
    id: 6,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: 'R석 한자리'
  },
  {
    id: 7,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/09/202009171314503f99f7ef-c9b5-44c8-af5f-f7a9db174d42.png/melon/resize/180x250/strip/true',
    type: 2,
    have: '뮤지컬 호프 S석',
    price: '90000원'
  },
  {
    id: 8,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010221359092a800c16-b5bb-4602-a9ed-63429feb8bdd.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'B구역 2연석',
    want: 'A구역 2연석'
  },
  {
    id: 2,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/202011101533414c00f966-8737-4a23-a184-ba5582f18ed9.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'a구역',
    want: 'b구역'
  },
  {
    id: 3,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201110103105ee61f26c-9783-442b-b3ea-1f194b9437a2.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: '아무구역 2연석'
  },
  {
    id: 4,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/2020102016595281d50cce-5f11-4df9-8fe0-5f49261617f6.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '거미 콘서트 3연석',
    price: '100,000원'
  },
  {
    id: 5,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '캣츠 R석',
    price: '원가양도'
  },
  {
    id: 6,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: 'R석 한자리'
  },
  {
    id: 7,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/09/202009171314503f99f7ef-c9b5-44c8-af5f-f7a9db174d42.png/melon/resize/180x250/strip/true',
    type: 2,
    have: '뮤지컬 호프 S석',
    price: '90000원'
  },
  {
    id: 8,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010221359092a800c16-b5bb-4602-a9ed-63429feb8bdd.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'B구역 2연석',
    want: 'A구역 2연석'
  },
  {
    id: 2,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/202011101533414c00f966-8737-4a23-a184-ba5582f18ed9.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'a구역',
    want: 'b구역'
  },
  {
    id: 3,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201110103105ee61f26c-9783-442b-b3ea-1f194b9437a2.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: '아무구역 2연석'
  },
  {
    id: 4,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/2020102016595281d50cce-5f11-4df9-8fe0-5f49261617f6.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '거미 콘서트 3연석',
    price: '100,000원'
  },
  {
    id: 5,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '캣츠 R석',
    price: '원가양도'
  },
  {
    id: 6,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: 'R석 한자리'
  },
  {
    id: 7,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/09/202009171314503f99f7ef-c9b5-44c8-af5f-f7a9db174d42.png/melon/resize/180x250/strip/true',
    type: 2,
    have: '뮤지컬 호프 S석',
    price: '90000원'
  },
  {
    id: 8,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010221359092a800c16-b5bb-4602-a9ed-63429feb8bdd.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'B구역 2연석',
    want: 'A구역 2연석'
  },
  {
    id: 2,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/202011101533414c00f966-8737-4a23-a184-ba5582f18ed9.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'a구역',
    want: 'b구역'
  },
  {
    id: 3,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201110103105ee61f26c-9783-442b-b3ea-1f194b9437a2.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: '아무구역 2연석'
  },
  {
    id: 4,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/2020102016595281d50cce-5f11-4df9-8fe0-5f49261617f6.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '거미 콘서트 3연석',
    price: '100,000원'
  },
  {
    id: 5,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '캣츠 R석',
    price: '원가양도'
  },
  {
    id: 6,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: 'R석 한자리'
  },
  {
    id: 7,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/09/202009171314503f99f7ef-c9b5-44c8-af5f-f7a9db174d42.png/melon/resize/180x250/strip/true',
    type: 2,
    have: '뮤지컬 호프 S석',
    price: '90000원'
  },
  {
    id: 8,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010221359092a800c16-b5bb-4602-a9ed-63429feb8bdd.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'B구역 2연석',
    want: 'A구역 2연석'
  },
  {
    id: 2,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/202011101533414c00f966-8737-4a23-a184-ba5582f18ed9.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'a구역',
    want: 'b구역'
  },
  {
    id: 3,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201110103105ee61f26c-9783-442b-b3ea-1f194b9437a2.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: '아무구역 2연석'
  },
  {
    id: 4,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/2020102016595281d50cce-5f11-4df9-8fe0-5f49261617f6.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '거미 콘서트 3연석',
    price: '100,000원'
  },
  {
    id: 5,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '캣츠 R석',
    price: '원가양도'
  },
  {
    id: 6,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: 'R석 한자리'
  },
  {
    id: 7,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/09/202009171314503f99f7ef-c9b5-44c8-af5f-f7a9db174d42.png/melon/resize/180x250/strip/true',
    type: 2,
    have: '뮤지컬 호프 S석',
    price: '90000원'
  },
  {
    id: 8,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010221359092a800c16-b5bb-4602-a9ed-63429feb8bdd.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'B구역 2연석',
    want: 'A구역 2연석'
  },
  {
    id: 2,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/202011101533414c00f966-8737-4a23-a184-ba5582f18ed9.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'a구역',
    want: 'b구역'
  },
  {
    id: 3,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201110103105ee61f26c-9783-442b-b3ea-1f194b9437a2.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: '아무구역 2연석'
  },
  {
    id: 4,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/2020102016595281d50cce-5f11-4df9-8fe0-5f49261617f6.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '거미 콘서트 3연석',
    price: '100,000원'
  },
  {
    id: 5,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '캣츠 R석',
    price: '원가양도'
  },
  {
    id: 6,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: 'R석 한자리'
  },
  {
    id: 7,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/09/202009171314503f99f7ef-c9b5-44c8-af5f-f7a9db174d42.png/melon/resize/180x250/strip/true',
    type: 2,
    have: '뮤지컬 호프 S석',
    price: '90000원'
  },
  {
    id: 8,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010221359092a800c16-b5bb-4602-a9ed-63429feb8bdd.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'B구역 2연석',
    want: 'A구역 2연석'
  },
  {
    id: 2,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/202011101533414c00f966-8737-4a23-a184-ba5582f18ed9.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'a구역',
    want: 'b구역'
  },
  {
    id: 3,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/11/20201110103105ee61f26c-9783-442b-b3ea-1f194b9437a2.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: '아무구역 2연석'
  },
  {
    id: 4,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/2020102016595281d50cce-5f11-4df9-8fe0-5f49261617f6.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '거미 콘서트 3연석',
    price: '100,000원'
  },
  {
    id: 5,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 2,
    have: '캣츠 R석',
    price: '원가양도'
  },
  {
    id: 6,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010131140305e60203c-fec7-4154-851a-0c3c5ee82cae.jpg/melon/resize/180x250/strip/true',
    type: 3,
    want: 'R석 한자리'
  },
  {
    id: 7,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/09/202009171314503f99f7ef-c9b5-44c8-af5f-f7a9db174d42.png/melon/resize/180x250/strip/true',
    type: 2,
    have: '뮤지컬 호프 S석',
    price: '90000원'
  },
  {
    id: 8,
    img: 'https://cdnticket.melon.co.kr/resource/image/upload/product/2020/10/202010221359092a800c16-b5bb-4602-a9ed-63429feb8bdd.jpg/melon/resize/180x250/strip/true',
    type: 1,
    have: 'B구역 2연석',
    want: 'A구역 2연석'
  }
]

function LandingPage(props) {
  useEffect(() => {
    axios.get('/api/hello').then(response => {
      console.log(response)
    })
  }, [])

  return (
    <div>
      <NavBar></NavBar>
      <Slider concerts={concerts}></Slider>
      <div className={styles.post_area}>
        <div className={styles.post_header}>
          <h3 className={styles.title}>진행 중인 거래</h3>
          <a href='/posts' className={styles.more}>더 보기</a>
        </div>
        <PostList posts={posts}></PostList>
      </div>
      
    </div>
  )
}

export default withRouter(LandingPage)
