<template>
  <div class="content-bg">
    <div class="content-title">
      <div class="pull-left">
        <span class="content-title-line">

        </span>
          <span class="content-title-text">
          {{campusName}}
        </span>
      </div>
      <div class="pull-right content-title-btn">
        <van-button size="small" type="warning" @click="logout()">{{$t("退出")}}</van-button>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="margin-top-10">
      <div class="content-info" v-for="(item, index) in list" :key="index">
        <div class="info-bg margin-bottom-20" @click="detail($event, item)">
          <van-row class="info-content">
            <van-col span="6">
              <img width="60" v-if="item.photoSimple" height="70" :src="item.photoSimple" />
              <img width="60" v-else height="70" :src="require('./../static/img/default.png')" />
            </van-col>
            <van-col span="9">
              <div class="margin-top-5">
                <span class="font-size-18 font-blod">{{item.realName}}</span>
              </div>
              <div class="margin-top-20">
                <span class="font-size-18">{{item.className}}</span>
              </div>
            </van-col>
            <van-col span="9">
              <div class="margin-top-5 text-right">
                <span class="font-size-18 font-blod">{{item.studentId}}</span>
              </div>
              <!--<div class="margin-top-20 text-right">
                <span class="font-size-18">{{item.collegeName}}</span>
              </div>-->
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "../mixins/mixins";
import {Notify} from "vant";
export default {
  mixins: [mixins],
  data(){
    return {
      list: [],
    }
  },
  created() {
    //this.init();
    this.initData();
  },
  methods: {
    init(){
      if (this.userList.length > 0){
        this.list = this.userList;
      }else {
        this.$router.push({
          path: '/login'
        });
      }
      this.campusName = this.campusName;
    },
    initData(){
      let data = {
        domain: this.campusUrl,
        uri: '/user/loginUserInfo'
      };
      this.$axios.get("/proxy/", {params: data}).then(res => {
        if (res.data.data){
          this.list = res.data.data.studentList;
        }
      });
    },
    detail(event, item) {
      //console.log(this.campusUrl + "/user/user/getSess");
      this.$router.push({
        path: '/userDetail',
        query: {
          userId: item.userId,
          list: JSON.stringify(this.list),
          campusName: this.campusName
        }
      });
    },
    logout(){
      let data = {
        domain: this.campusUrl,
        uri: '/user/logouts'
      };
      data = this.$qs.stringify(data);
      this.$axios.post("/proxy/", data, {headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}}).then(res => {
        if (res.data.code == 200){
          this.$router.push({
            path: '/login'
          });
        }else {
          Notify({ type: 'warning', message: res.data.desc });
        }
      });
    }
  }
}
</script>

<style scoped>
  .content-bg{
    padding: 10px 20px;
  }
  .info-bg{
    background-image: url("~static/img/info-bg.png");
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .content-title{
    color: #ffffff;
    padding: 0px 0px;
    margin: 0px 0px;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    font-size: 15px;
    vertical-align: center;
  }
  .content-title-line{
    display: inline-block;
    background: #ffffff;
    width: 5px;
    height: 25px;
    border-radius: 4px;
  }
  .content-title-text{
    position: relative;
    top: -8px;
    margin-left: 5px;
  }
  .content-title-btn{
    position: relative;
    top: -8px;
  }
  .content-info{
    position: relative;
    background: #dddddd;
    margin: 0px 0px;
    border-radius: 5px;
  }
  .info-content{
    padding: 15px 15px;
  }
</style>
