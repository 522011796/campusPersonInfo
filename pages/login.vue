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
      <div style="position: relative">
        <van-field autocomplete="off" v-model="campusName" :placeholder="$t('请输入学校名称')" class="color-FFFFFF" @input="changeCampusName($event)">
          <span slot="left-icon" class="login-content-form-icon"><i class="fa fa-building-o" style="color: #ffffff;font-size: 20px;position: relative; top: 2px;"></i></span>
        </van-field>

        <div id="menu_arr" class="transparent_class" :style="{display: showPop == true ? '' : 'none'}" style="position: absolute; top: 45px;left: 0px;background: #dddddd; max-height: 200px;width: 100%;z-index: 999999;overflow-y: auto;">
          <div v-for="item in list" :key="item.id">
            <van-cell :title="item.campusName" @click="selectItem($event, item)"/>
            <div class="line-div"></div>
          </div>
        </div>
      </div>

      <div class="custom-divider-login">
        <van-divider :style="{padding: '0 0px', margin: '0px 0px'}" />
      </div>
      <van-field autocomplete="off" v-model="phone" :placeholder="$t('请输入手机号')" class="color-FFFFFF">
        <span slot="left-icon" class="login-content-form-icon"><i class="fa fa-phone-square" style="color: #ffffff;font-size: 20px;position: relative; top: 2px;"></i></span>
      </van-field>
      <div class="custom-divider-login">
        <van-divider :style="{padding: '0 5px' }" />
      </div>
      <van-field autocomplete="off" v-model="code " :placeholder="$t('请输入验证码')" class="color-FFFFFF">
        <span slot="left-icon" class="login-content-form-icon"><i class="fa fa-lock" style="color: #ffffff;font-size: 20px;position: relative; top: 5px;"></i></span>
        <template #button>
          <van-button size="mini" plain type="primary" v-if="!timeDownStatus" @click="sendPhone()" style="min-width: 80px">
            <span>{{$t("发送验证码")}}</span>
          </van-button>
          <van-button size="mini" plain type="primary" v-if="timeDownStatus" style="min-width: 80px">
            <van-count-down millisecond :time="timeDown" :format="`ss ${$t('秒')}`" @finish="finish" style="font-size: 12px;color: #6bd575"/>
          </van-button>
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
import mixins from "../mixins/mixins";
import { Notify } from 'vant';
export default {
  layout: 'fullScreenLayout',
  mixins: [mixins],
  data(){
    return {
      campusName: '',
      username: '',
      password: '',
      phone: '',
      code: '',
      campusNameClick: '',
      list: [],
      listLike: [],
      showPop: false,
      timeDown: 6 * 1000,
      timeDownStatus: false
    }
  },
  created() {
    if (process.client){
      document.addEventListener("click", e => {
        let list = document.getElementById("menu_arr");
        if (list.contains(e.target)) {
          this.showPop = false;
        } else {
          this.showPop = false;
        }
      });
    }

    this.init();
    this.getCampusList();
  },
  methods: {
    init(){
      if (process.client){
        if (localStorage.getItem("name") && localStorage.getItem("name") != ""){
          this.campusName = localStorage.getItem("name");
        }
      }
    },
    getCampusList(){
      this.$axios.get("/proxy/campusmanage/appapi/get-campus-list?page=1&num=1000&format=json&appClientType=campus").then(res => {
        this.listLike = res.data.data.list;
      });
    },
    changeCampusName(event){
      let _self = this;
      let itemArr = [];
      this.campusNameClick = "";
      if (this.campusNameClick != ""){
        this.showPop = false;
        return;
      }

      this.listLike.filter(function (item) {
        if (event != "" && item.campus_code.indexOf(event) != -1){
          itemArr.push({
            campusName: item.campus_name,
            campusUrl: item.app_service_url,
            id: item.id
          });
        }
      });
      this.list = itemArr;

      this.showPop = true;
    },
    selectItem(event, item){
      this.campusNameClick = item.campusName;
      this.campusName = this.campusNameClick;
      this.campusUrl = item.campusUrl;
      localStorage.setItem("url", item.campusUrl);
      localStorage.setItem("name", item.campusName);

      this.showPop = false;
    },
    sendPhone(){
      this.timeDownStatus = true;
    },
    finish(){
      this.timeDownStatus = false;
      this.timeDown = 6 * 1000;
    },
    login(values) {
      if (this.campusName == "" || this.phone == "" || this.code == ""){
        Notify({ type: 'warning', message: this.$t("请检查信息填写是否正确！") });
        return;
      }
      console.log(this.campusUrl + "/user/user/getSess");
      this.$axios.get(this.campusUrl + "/user/user/getSess").then(res => {
        console.log(res);
      });
      /*this.$router.push({
        path: '/userList'
      });*/
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
  .line-div{
    height: 1px;
    background: #efefef;
  }
</style>
