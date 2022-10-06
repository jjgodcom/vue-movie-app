<template>
  <div class="container">
    <h1>
      <span>OMDb API</span><br>
      오픈 무비<br>
      데이터베이스
    </h1>
    <p>
      OMDb API는 영화 정보를 얻기 위한 RESTful 웹 서비스이며 사이트의 모든 콘텐츠와 이미지는 사용자가 제공하고 유지 관리합니다.<br>
      이 서비스가 유용하다고 생각되면 일회성 기부 를 고려 하거나 후원자가 되십시오 .
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container{
  padding-top: 40px;
}
h1 {
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  span {
    color:$primary
  }
  p {
    margin: 30px 0;
    color:$gray-600;
  }
}
</style>