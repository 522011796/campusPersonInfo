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
            <div>{{$t("详细")}}</div>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="margin-top-20">
      <div>
        <div class="detail-content-title">
          <span>{{detail.title}}</span>
        </div>

        <div class="detail-editor">
          <div>
            <span>{{$t("编辑人")}}：</span>
            <span>{{detail.editerName}}</span>
          </div>
        </div>
        <div class="detail-time">
          <div>
            <span>{{$moment(detail.editTime).format('YYYY-MM-DD HH:mm:ss')}}</span>
          </div>
        </div>

        <div class="detail-content" :style="styleObject">
          <div v-html="detail.content">

          </div>
        </div>
      </div>
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
      detail: {},
      showLoading: false,
      styleObject: {
        'height': '',
        'position': 'relative',
        'overflow-y': 'auto'
      }
    }
  },
  created() {
    this.hh();
    this.init();
  },
  methods: {
    hh(){
      if (process.browser) {
        this.styleObject.height = window.innerHeight - 180 + 'px';
      }
    },
    init(){
      let _self = this;
      this.msgId = this.$route.query.msgId;
      let data = {
        domain: this.campusUrl,
        uri: '/user/message/info',
        data: JSON.stringify({
          page: 1,
          num : 20,
          msgId: this.msgId
        })
      };
      this.showLoading = true;
      this.$axios.get("/proxy/", {params: data}).then(res => {
        this.detail = res.data.data.message;
        this.showLoading = false;
      });
    },
    returnList(){
      this.$router.push({
        path: '/noticeList',
        query: {
          userId: this.$route.query.userId,
          campusName: this.campusName,
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
  .detail-content-title{
    color: #FFFFFF;
    font-weight: bold;
    font-size: 15px;
    padding: 0px 0px 10px 0px;
    border-bottom: 1px dashed #efefef;
  }
  .detail-editor{
    color: #efefef;
    font-size: 13px;
    margin-top: 10px;
  }
  .detail-time{
    color: #efefef;
    font-size: 13px;
    margin-top: 5px;
    padding-bottom: 5px;
  }
  .detail-content{
    padding: 10px 10px;
    color: #999999;
    font-size: 13px;
    margin-top: 10px;
    border-radius: 4px;
    background: #FFFFFF;
  }
</style>
