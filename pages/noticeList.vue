<template>
  <div class="content-bg">
    <AppLoading :show="showLoading"></AppLoading>
    <div class="">
      <van-row>
        <van-col span="3">
          <div class="margin-top-5">
            <i class="fa fa-chevron-left" style="font-size: 22px;color: #ffffff" @click="returnList()"></i>
          </div>
        </van-col>
        <van-col span="18">
          <div class="text-center detail-title margin-top-5 color-FFFFFF font-size-16">
            <div>{{$t("通知公告")}}</div>
          </div>
        </van-col>
        <!--<van-col span="3">
          <div class="text-center margin-top-5">
            <i class="fa fa-envelope-o" style="font-size: 22px;color: #ffffff"></i>
          </div>
        </van-col>-->
      </van-row>
    </div>

    <div class="margin-top-20">
      <div>
        <van-row gutter="20">
          <van-col span="12" @click="tagChange($event, 1)">
            <div class="notice-tab" :class="activeTag == 1 ? 'notice-active' : 'notice-default'">
              <i class="fa fa-volume-up" style="font-size: 20px;position: relative; top: 2px;"></i>
              <span>通知</span>
            </div>
          </van-col>
          <van-col span="12" @click="tagChange($event, 2)">
            <div class="notice-tab" :class="activeTag == 2 ? 'notice-active' : 'notice-default'">
              <i class="fa fa-commenting-o" style="font-size: 20px;position: relative; top: 2px;"></i>
              <span>公告</span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>

    <div class="margin-top-20" :style="styleObject">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >

          <div class="notice-content" v-for="item in list" :key="item">
            <div class="notice-title">
              <span>xxxxxx</span>
            </div>

            <div class="notice-detail">
              <span>xxxxxxxxxxxx</span>
            </div>

            <div class="notice-time">
              <span>
                <i class="fa fa-clock-o"></i>
                <label>xxxxxx</label>
              </span>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import AppLoading from './../components/AppLoading'
import mixins from "../mixins/mixins";
export default {
  mixins: [mixins],
  components: {AppLoading},
  data(){
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      showLoading: false,
      activeTag: 1,
      styleObject: {
        'height': '',
        'position': 'relative',
        'overflow-y': 'auto'
      }
    }
  },
  created() {
    this.hh();
  },
  methods: {
    hh(){
      if (process.browser) {
        this.styleObject.height = window.innerHeight - 150 + 'px';
      }
    },
    tagChange(event, type){
      this.activeTag = type;
      //this.showLoading = true;
      this.list = [];
      this.onLoad();
    },
    returnList(){
      this.$router.push({
        path: '/userDetail'
      });
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;
        //this.showLoading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
}
</script>

<style>
  .content-bg{
    padding: 10px 20px;
  }
  .notice-tab{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
  }
  .notice-content{
    padding: 0px 10px;
    border-radius: 5px;
    background: #f8f8f8;
    margin-bottom: 10px;
  }
  .notice-title{
    font-size: 14px;
    font-weight: bold;
    padding:10px 0px;
    border-bottom: 1px solid #dddddd;
  }
  .notice-detail{
    padding: 10px 0px;
  }
  .notice-time{
    font-size: 13px;
    color: #C9C9C9;
    padding: 5px 0px;
    text-align: right;
  }
  .notice-active{
    color: #ffffff;
    background: #FF9800;
    border: 1px solid #FF9800;
  }
  .notice-default{
    color: #dddddd;
    background: #ffffff;
    border: 1px solid #dddddd;
  }
</style>
