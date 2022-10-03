Skip to content
Search or jump to…
Pulls
Issues
Marketplace
Explore
 
@jjgodcom 
ParkYoungWoong
/
vue3-movie-app
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
vue3-movie-app/src/components/Loader.vue
@ParkYoungWoong
ParkYoungWoong Create project
Latest commit c1d0c44 on 11 Apr 2021
 History
 1 contributor
52 lines (50 sloc)  710 Bytes

<template>
  <div 
    :style="{ 
      width: `${size}rem`, 
      height: `${size}rem`,
      zIndex
    }"
    :class="{
      absolute,
      fixed
    }"
    class="spinner-border text-primary"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner-border {
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &.absolute {
    position: absolute;
  }
  &.fixed {
    position: fixed;
  }
}
</style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
vue3-movie-app/src/components at master · ParkYoungWoong/vue3-movie-appvue3-movie-app/Loader.vue at master · ParkYoungWoong/vue3-movie-app