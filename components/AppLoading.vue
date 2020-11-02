<template>
  <div class="loading-bg" :show="show" v-if="show">
    <div class="loading-content">
      <van-loading type="spinner" color="#1989fa" size="35"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        default: false,
        type: Boolean
      }
    }
  }
</script>

<style scoped>
.loading-bg{
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9999;
  left: 0;
  top: 0;
  background: #dddddd;
  filter:alpha(opacity=50);
  -moz-opacity:0.5;
  -khtml-opacity: 0.5;
  opacity: 0.5;
}
.loading-content{
  text-align: center;
  margin-top: 50%;
}
</style>
