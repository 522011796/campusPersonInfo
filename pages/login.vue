<template>
  <div class="login-content">
    <div class="login-title">
      <div>
        <img width="80px" height="80px" :src="require('./../static/img/login-title.png')" />
      </div>
      <div class="login-title-text">
        {{$t("学生报告查询")}}
      </div>
    </div>

    <div class="login-form logIn custom-form-transform">
      <van-field autocomplete="off" v-model="username" :placeholder="$t('请输入学校名称')" class="color-FFFFFF">
        <span slot="left-icon" class="login-content-form-icon"><i class="fa fa-building-o" style="color: #ffffff;font-size: 20px;position: relative; top: 2px;"></i></span>
      </van-field>
      <div class="custom-divider-login">
        <van-divider :style="{padding: '0 5px' }" />
      </div>
      <van-field autocomplete="off" v-model="phone" :placeholder="$t('请输入手机号')" class="color-FFFFFF">
        <span slot="left-icon" class="login-content-form-icon"><i class="fa fa-phone-square" style="color: #ffffff;font-size: 20px;position: relative; top: 2px;"></i></span>
      </van-field>
      <div class="custom-divider-login">
        <van-divider :style="{padding: '0 5px' }" />
      </div>
      <van-field autocomplete="off" v-model="phone" :placeholder="$t('请输入验证码')" class="color-FFFFFF">
        <span slot="left-icon" class="login-content-form-icon"><i class="fa fa-lock" style="color: #ffffff;font-size: 20px;position: relative; top: 5px;"></i></span>
        <template #button>
          <van-button size="small" plain type="primary">{{$t("发送验证码")}}</van-button>
        </template>
      </van-field>
      <div class="custom-divider-login">
        <van-divider :style="{padding: '0 5px' }" />
      </div>
      <div class="margin-top-30">
        <van-button block type="default" @click="login">
          <span class="font-size-18 color-999999">{{$t("登录")}}</span>
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'fullScreenLayout',
  data(){
    return {
      username: '',
      password: '',
      phone: '',
      code: ''
    }
  },
  created() {

  },
  methods: {
    login(values) {
      this.$router.push({
        path: '/userList'
      });
    },
  }
}
</script>

<style>
  /*.login-content{
    position: absolute;
    background-image: url("~static/img/login-bg.png");
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
  }*/
  .login-title{
    text-align: center;
    margin-top: 5rem;
    font-size: 1.5rem;
    color: #ffffff;
  }
  .login-title-text{
    margin-top: 5px;
  }
  .login-form{
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 3rem;
  }
</style>
