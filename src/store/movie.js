import axios from 'axios'

export default {
  // namespaced : 하나의 스토어에서 모듈화 될수 있다는 옵션
  namespaced:true,
  // state : 실제로 취급하는 data
  state: ()=>{
    return{
      movies: [],
      message:'',
      loading: false
    }
  },
  // getters : 계산된 상태 computed랑 비슷
  getters:{
    
  },
  // mutations,actions : 함수 methods 비슷
  // mutations : store 에서 데이터의 수정은 mutations에서만 가능
  mutations:{
    updateState(state, payload){
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key =>{
        state[key] = payload[key]
      })
    },
    resetMovies(state){
      state.movies = []
    }
  },
  // 비동기로 동작
  actions:{
    async searchMovies({commit}, payload){
      const {title, type, number, year} = payload;
      const OMDB_API_KEY = '7035c60c';
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`);
      const {Search, totalResults} = res.data;
      commit('updateState', {
        movies: Search
      })
    }
  }
}