import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

// 기본 내보내기
export default createRouter({
  // Hash는 해당하는 페이지에 /#/을 붙여서 접근하는 모드
  // 특정페이지에서 새로고침시 404방지
  // History 모드는 따로 서버에 세팅이 필요하기때문에 이 프로젝트에서는 Hash 모드 사용
  history: createWebHashHistory(),
  // routes 는 배열 데이터로 만들기
  // routes 는 페이지를 구분해주는 개념
  routes: [
    // path : 페이지를 구분하는 각각의 경로
    // '/' : 메인페이지를 뜻함
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})