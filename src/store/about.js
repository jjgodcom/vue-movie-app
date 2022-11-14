export default {
  // 스토어에 하나의 모듈이 될수 있도록 namespaced: true 추가
  namespaced: true,
  // 상태
  state: () => ({
    name: 'JJGODCOM',
    email: 'jjgodcom1@gmail.com',
    site: 'http://jjgodcom.com/',
    image: 'https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/master/src/assets/common/logo.png',
  })
}