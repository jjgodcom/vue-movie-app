<template>
  <header>
    <Logo></Logo>
    <div class="nav nav-pills">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <!-- RouterLink = a태그 대신 사용 가능  -->
        <!-- :to = 이동할 주소 할당 -->
        <!-- active-class = 활성화된 클래스 이름 변경 가능 -->
        <RouterLink 
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{nav.name}}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components:{
    Logo
  },
  data(){
    return{
      navigations: [
        {
          name:'Search',
          href:'/'
        },
        {
          name:'Movie',
          href:'/movie'
        },
        {
          name:'About',
          href:'/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo{
    margin-right: 40px;
  }
}
</style>