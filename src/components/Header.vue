<template>
  <header>
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
export default {
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