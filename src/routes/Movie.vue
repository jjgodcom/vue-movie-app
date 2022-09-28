<template>
  <h1>Movie</h1>
</template>

<script>
export default {
  created(){
    console.log(this.$route);
    this.$store.dispatch('movie/searchMovieWithId',{
      // movie/tt123 : hello
      id: this.$route.params.id
    })
  }
}
</script>