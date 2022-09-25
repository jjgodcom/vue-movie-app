export default {
  // namespaced : 하나의 스토어에서 모듈화 될수 있다는 옵션
  namespaced:true,
  // state : 실제로 취급하는 data
  state: ()=>{
    return{
      movies: []
    }
  },
  // getters : 계산된 상태 computed랑 비슷
  getters:{
    movieIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  // mutations,actions : 함수 methods 비슷
  // mutations : store 에서 데이터의 수정은 mutations에서만 가능
  mutations:{
    resetMovies(state){
      state.movies = []
    }
  },
  // 비동기로 동작
  actions:{
    searchMovies(){
    }
  }
}