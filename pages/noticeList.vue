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

          <div v-for="item in detailList" :key="item.id">
            <div style="padding: 5px 5px; color: #ffffff; font-size: 15px; font-weight: bold;margin-bottom: 5px">
              <span>{{item.date}}</span>
            </div>
            <div class="notice-content" v-for="(itemChild, indexChild) in item.list" :key="itemChild.id" @click="detailMsg($event, itemChild)">
              <div class="notice-title">
                <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 100%">{{itemChild.title}}</div>
              </div>

              <div class="notice-detail">
                <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 100%">{{itemChild.title_desc}}</div>
              </div>

              <div class="notice-time">
              <span>
                <i class="fa fa-clock-o"></i>
                <label>{{$moment(itemChild.create_time).format('HH:mm:ss')}}</label>
              </span>
              </div>
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
      detailList: [],
      loading: false,
      finished: false,
      refreshing: false,
      showLoading: false,
      activeTag: 1,
      userId: '',
      styleObject: {
        'height': '',
        'position': 'relative',
        'overflow-y': 'auto'
      },
      page: 0,
      totalPage: 0,
      type: 1,
      classId: ''
    }
  },
  created() {
    this.hh();
    this.init();
  },
  methods: {
    hh(){
      if (process.browser) {
        this.styleObject.height = window.innerHeight - 150 + 'px';
      }
    },
    init(){
      let _self = this;
      this.classId = this.$route.query.classId;
      this.userId = this.$route.query.userId;
      let data = {
        page: this.page +1,
        num : 20,
        actionType: this.type,
        userId: this.userId
      };
      /*if(this.type == 2){
        data['classId'] = this.classId;
      }*/
      data = this.$qs.stringify(data);
      this.$axios.post(this.campusUrl + '/user/message/userMsg/groupByTime2', data, {headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}}).then(res => {
        this.refreshing = false;
        this.loading = false;
        _self.detailList = _self.detailList.concat(res.data.data.list);

        _self.totalPage = res.data.data.pageNum;
        _self.page = res.data.data.currentPage;

        if (this.totalPage == this.page) {
          this.finished = true;
        }
      });
    },
    tagChange(event, type){
      this.activeTag = type;
      this.type = type;
      this.detailList = [];
      this.page = 0;
      this.init();
    },
    returnList(){
      this.$router.push({
        path: '/userDetail',
        query: {
          list: JSON.stringify(this.userList),
          campusName: this.campusName,
          userId: this.$route.query.userId,
        }
      });
    },
    onRefresh(){
      // 清空列表数据
      this.loading = false;
      this.page = 0;
      this.detailList = [];
      this.init();
    },
    onLoad() {
      // 异步更新数据
      if (this.page != 0 && this.totalPage == this.page) {
        this.finished = true;
      } else {
        this.page = this.page + 1;
        this.init();
        this.finished = false;
      }
    },
    detailMsg(event, item){
      this.$router.push({
        path: '/noticeDetailList',
        query: {
          msgId: item.id,
          userId: this.$route.query.userId,
        }
      });
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
