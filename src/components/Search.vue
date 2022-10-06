<template>
  <div class="container">
    <!-- v-model : 양방향 데이터 바인딩-->
    <input 
      v-model="title"
      @keyup.enter="apply"
      class="form-control"
      type="text"
      placeholder="영화 시리즈 등 검색">
    <div class="selects">
      <!-- v-model="$data[filter.name]" -->
      <!-- 양방향 데이터 바인딩 하기 위해 $data 속성을 사용 -->
      <!-- 동적으로 동작하기위해 대괄호를 열어서 동적사용하기위해 명시함  -->
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option 
          v-if="filter.name === 'year'"
          value="">
          연도
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{item}}
        </option>
      </select>
    </div>
    <button 
      class="btn btn-primary"
      @click="apply">
      검색
    </button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      type:'movie',
      number:10,
      year:'',
      filters:[
        {
          name:'type',
          items:['movie','series','episode']
        },
        {
          name:'number',
          items:['10','20','30']
        },
        {
          name:'year',
          // 즉시실행 화살표 함수
          // 연도를 즉시실행 함수로 실행해 반환해서 사용할 예정
          items:(()=>{
            const years = [];
            const thisYear = new Date().getFullYear(); // 현재 년도 출력
            for(let i=thisYear; i >= 1985; i-=1){
              years.push(i);
            }
            return years
          })()
        }
      ]
    }
  },
  methods:{
    // 비동기로 작동해야함
    async apply(){
      // 영화 검색 기능
      // 엔터키 눌렀을때에도 가능하게
      this.$store.dispatch('movie/searchMovies', {
        title:this.title,
        type:this.type,
        number:this.number,
        year:this.year
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child{
      margin-right: 0;
    }
  }
  .selects{
    display: flex;
    select{
      width: 120px;
      margin-right: 10px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .btn{
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0; 
    // flex-shrink: 1; 인경우 비율이 감소하니깐 0으로 변경해서 절대 감소하지 않겟다고 설정
  }
  @include media-breakpoint-down(lg){
    display: block;
    input{
      margin-right: 0;
      margin-bottom: 10px;
    }
    .selects{
      margin-right: 0;
      margin-bottom: 10px;
      select{
        width: 100%;
      }
    }
    .btn{
        width: 100%;
      }
  }
}
</style>