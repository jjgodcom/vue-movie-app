import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

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
    async searchMovies({state,commit}, payload){
      try {
        const res = await _fetchMovie({
          ...payload,
          page:1
        })
        const {Search, totalResults} = res.data;
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        })
        // totalResults : 숫자로 나오지만 문자데이터
        const total = parseInt(totalResults, 10);
        const pageLength = Math.ceil(total / 10);
  
        // 추가 요청 전송
        if(pageLength > 1){
          for(let page = 2; page<= pageLength; page += 1){
            if(page > (payload.number/10))break
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const {Search} = res.data;
            commit('updateState', {
              movies: [...state.movies , ..._uniqBy(Search, 'imdbID')]
            })
          }
        }
      } catch (message) {
        commit('updateState',{
          movies: [],
          message
        })
      }
    }
  }
}

function _fetchMovie(payload){
  const {title, type, year, page} = payload;
  const OMDB_API_KEY = '7035c60c';
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  return new Promise((resolve, reject)=>{
    axios.get(url)
      .then((res)=>{ // 영화의 정보를 정상적으로 가지고 왔을때 실행
        if(res.data.Error){
          reject(res.data.Error)
        }
        resolve(res)
      })
      .catch((err)=>{ // 영화의 정보를 가지고 오는 부분에서 문제가 발생시 실행
        reject(err.message)
      })
  })
}