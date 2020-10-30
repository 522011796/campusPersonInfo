<template>
  <div>
    <div v-if="defaultLoadingSpin" class="loading-spin">
      <van-loading class="loading-content" type="spinner" size="50" color="#d93442"/>
    </div>
    <nuxt></nuxt>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultLoadingSpin: false,
      }
    },
    created() {
      this.notScale();
      this.getUserInfo();
    },
    methods: {
      notScale(){
        // 缩放
        try {
          // 禁用双击缩放
          document.addEventListener("touchstart", function(event) {
            if (event.touches.length > 1) {
              event.preventDefault();
            }
          });
          var lastTouchEnd = 0;
          document.addEventListener(
            "touchend",
            function(event) {
              var now = new Date().getTime();
              if (now - lastTouchEnd <= 300) {
                event.preventDefault();
              }
              lastTouchEnd = now;
            },
            false
          );
          // 禁用双指手势操作
          document.addEventListener("gesturestart", function(event) {
            event.preventDefault();
          });
        } catch (error) {

        }
      },
      getUserInfo(){
        let _self = this;
        this.logined = false;
        let params = {
          scope: 3
        };
        this.$axios.get('/proxy/common/auth/get-user-info', {params: params}).then((res) => {
          if (res){
            if (res.data.code == 200){

            }
          };
        })
      }
    }
  }
</script>

<style scoped>
  .loading-spin{
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 99;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    background-color: hsla(0,0%,100%,.3)
  }
  .loading-content{
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-45%,-50%)
  }
</style>
