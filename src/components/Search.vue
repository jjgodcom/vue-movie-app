<template>
  <div class="container">
    <!-- v-model : 양방향 데이터 바인딩-->
    <input 
      v-model="title"
      class="form-control"
      type="text"
      placeholder="영화 시리즈 등 겁색">
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
  }
}
</script>

<style lang="scss" scoped>
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
}
</style>