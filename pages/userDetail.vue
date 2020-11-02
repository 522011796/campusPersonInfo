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
          <div class="text-center detail-title">
            <div>{{$t("个人报告")}}</div>
            <div>xxxxxxxx学院</div>
          </div>
        </van-col>
        <van-col span="3">
          <div class="text-center margin-top-5">
            <i class="fa fa-envelope-o" style="font-size: 22px;color: #ffffff"></i>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="margin-top-10">
      <div class="detail-block">
        <div class="detail-block-title">
          <van-row>
            <van-col span="12">
              <div>
                <van-button type="primary" size="small" color="#6bd575" @click="showYearList()">
                  {{yearStr}}
                  <i class="fa fa-caret-down"></i>
                </van-button>
              </div>
            </van-col>
            <van-col span="12">
              <div class="text-right color-6bd575" style="position: relative; top: 5px">
                <span>{{$t("整体量化率")}}</span>
                <span class="margin-left-5">0%</span>
              </div>
            </van-col>
          </van-row>
        </div>

        <div class="detail-block-userinfo margin-top-10">
          <van-row>
            <van-col span="5">
              <img width="60" height="70" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
            <van-col span="9" class="padding-left-10">
              <div class="margin-top-5">
                <span>xxxxxxxxxxx</span>
              </div>
              <div class="margin-top-5">
                <span>xxxxxxxxxxx</span>
              </div>
              <div class="margin-top-5">
                <span>xxxxxxxxxxx</span>
              </div>
            </van-col>
            <van-col span="1">
              <div style="background: #dddddd;height: 70px;width: 1px"></div>
            </van-col>
            <van-col span="9">
              <div class="margin-top-5">
                <span>xxxxxxxxxxx</span>
              </div>
              <div class="margin-top-5">
                <span>xxxxxxxxxxx</span>
              </div>
              <div class="margin-top-5">
                <span>xxxxxxxxxxx</span>
              </div>
            </van-col>
          </van-row>
        </div>

        <div style="padding: 15px 15px;">
          <div class="line-div"></div>
        </div>

        <div class="detail-block-list" :style="styleObject">
          <div>
            <div>
              <span class="detail-block-tag">

              </span>
              <span class="detail-block-list-text">{{$t("素质学分")}}</span>
              <span class="pull-right color-6bd575">0{{$t("分")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("加分")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'credit', '加分')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("减分")}}</label>
                <label>
                  <van-button plain size="mini" type="danger" @click="showDetail($event, 'credit', '减分')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="pull-right font-bold">{{$t("总分数")}}</span>
              <span class="clearfix"></span>
            </div>
          </div>
          <van-divider />
          <div>
            <div>
              <span class="detail-block-tag">

              </span>
              <span class="detail-block-list-text">{{$t("课堂考勤")}}</span>
              <span class="detail-block-list-sub_text font-size-12">{{$t("出勤率")}}0%</span>
              <span class="pull-right color-6bd575">0{{$t("节")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("迟到")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'late', '迟到')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("旷课")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'unsign', '旷课')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("早退")}}</label>
                <label>
                  <van-button plain size="mini" type="danger" @click="showDetail($event, 'early', '早退')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="pull-right font-bold">{{$t("总出勤")}}</span>
              <span class="clearfix"></span>
            </div>
          </div>
          <van-divider />
          <div>
            <div>
              <span class="detail-block-tag">

              </span>
              <span class="detail-block-list-text">{{$t("日常请假")}}</span>
              <span class="detail-block-list-sub_text font-size-12">{{$t("出勤率")}}0%</span>
              <span class="pull-right color-6bd575">0{{$t("天")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("请假")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'leave', '请假')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="pull-right font-bold">{{$t("总请假")}}</span>
              <span class="clearfix"></span>
            </div>
          </div>
          <van-divider />
          <div>
            <div>
              <span class="detail-block-tag">

              </span>
              <span class="detail-block-list-text">{{$t("归寝签到")}}</span>
              <span class="detail-block-list-sub_text font-size-12">{{$t("旷寝率")}}0%</span>
              <span class="pull-right color-6bd575">0{{$t("次")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("晚归")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'lateDorm', '晚归')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("旷寝")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'unsignDorm', '旷寝')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("超长")}}</label>
                <label>
                  <van-button plain size="mini" type="danger" @click="showDetail($event, 'longDorm', '超长')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="pull-right font-bold">{{$t("总出勤")}}</span>
              <span class="clearfix"></span>
            </div>
          </div>
          <van-divider />
          <div>
            <div>
              <span class="detail-block-tag">

              </span>
              <span class="detail-block-list-text">{{$t("奖惩统计")}}</span>
              <span class="detail-block-list-sub_text font-size-12">{{$t("奖惩率")}}0%</span>
              <span class="pull-right color-6bd575">0{{$t("次")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("奖励")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'puYes', '奖励')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("处分")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'puNo', '处分')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="pull-right font-bold">{{$t("总处分")}}</span>
              <span class="clearfix"></span>
            </div>
          </div>
          <van-divider />
          <div>
            <div>
              <span class="detail-block-tag">

              </span>
              <span class="detail-block-list-text">{{$t("内务评比")}}</span>
              <span class="detail-block-list-sub_text font-size-12">{{$t("合格率")}}0%</span>
              <span class="pull-right color-6bd575">0{{$t("次")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("合格")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'quYes', '合格')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("不合格")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'quNo', '不合格')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="pull-right font-bold">{{$t("不合格")}}</span>
              <span class="clearfix"></span>
            </div>
          </div>
          <van-divider />
          <div>
            <div>
              <span class="detail-block-tag">

              </span>
              <span class="detail-block-list-text">{{$t("门禁通行")}}</span>
              <span class="pull-right color-6bd575">0{{$t("次")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("进入")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'doorIn', '进入')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("外出")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'doorOut', '外出')">0{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="pull-right font-bold">{{$t("总通行")}}</span>
              <span class="clearfix"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="show" position="bottom" :close-on-click-overlay="false">
      <div class="detail-pop-opr-title">
        <van-row>
          <van-col span="8">
            <a href="javascript:;" class="color-disabled" @click="close()">{{$t("关闭")}}</a>
          </van-col>
          <van-col span="8">
            <div class="text-center">
              <span>{{timeText}}</span>
            </div>
          </van-col>
          <van-col span="8">
            <div class="text-right">
              <van-button plain type="danger" size="mini" @click="clearPickerOpr()">{{$t("清除")}}</van-button>
              <van-button plain type="primary" size="mini" @click="showPickerOpr()">{{$t("时间")}}</van-button>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="detail-pop">
        <div>
          <span class="detail-block-tag"></span>
          <span class="detail-block-list-text">{{type}}</span>

          <span class="margin-left-5 detail-block-list-text">{{typeText}}</span>

          <!--<span class="margin-left-5 detail-block-list-text color-ff976a">|</span>-->

          <span class="detail-block-list-text color-ff976a">
            0
            <label v-if="tag=='credit' || tag=='leave' || tag=='lateDorm' || tag=='lateUnsign' || tag=='lateLong' || tag=='puYes' || tag=='quYes' || tag=='puNo' || tag=='quNo' || tag=='doorIn' || tag=='doorOut'">次</label>
            <label v-if="tag == 'late' || tag == 'unsign' || tag == 'early'">节</label>
          </span>

          <span class="margin-left-5 detail-block-list-text color-ff976a" v-if="tag=='credit' || tag=='leave'">|</span>

          <span class="detail-block-list-text color-ff976a color-ff976a" v-if="tag=='credit' || tag=='leave'">
            0
            <label v-if="tag=='credit'">分</label>
            <label v-if="tag=='leave'">天</label>
          </span>
        </div>
        <div class="detail-pop-title margin-top-10">
          <van-row v-if="tag == 'credit'">
            <van-col span="8" class="text-center">
              <span>{{$t("日期")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("项目")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("分数")}}</span>
            </van-col>
          </van-row>
          <van-row v-if="tag == 'late' || tag == 'unsign' || tag == 'early'">
            <van-col span="8" class="text-center">
              <span>{{$t("日期")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("课程")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("节数")}}</span>
            </van-col>
          </van-row>
          <van-row v-if="tag == 'leave'">
            <van-col span="8" class="text-center">
              <span>{{$t("日期")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("事由")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("时长")}}</span>
            </van-col>
          </van-row>
          <van-row v-if="tag == 'lateDorm' || tag == 'unsignDorm' || tag == 'earlyDorm'">
            <van-col span="8" class="text-center">
              <span>{{$t("日期")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("类型")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("时长")}}</span>
            </van-col>
          </van-row>
          <van-row v-if="tag == 'puYes' || tag == 'puNo'">
            <van-col span="8" class="text-center">
              <span>{{$t("日期")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("说明")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("级别")}}</span>
            </van-col>
          </van-row>
          <van-row v-if="tag == 'quYes' || tag == 'quNo'">
            <van-col span="12" class="text-center">
              <span>{{$t("日期")}}</span>
            </van-col>
            <van-col span="12" class="text-center">
              <span>{{$t("项目")}}</span>
            </van-col>
          </van-row>
          <van-row v-if="tag == 'doorIn' || tag == 'doorOut'">
            <van-col span="8" class="text-center">
              <span>{{$t("日期")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("位置")}}</span>
            </van-col>
            <van-col span="8" class="text-center">
              <span>{{$t("类型")}}</span>
            </van-col>
          </van-row>
        </div>
        <div style="height: 500px;overflow-y: auto">
          <div class="detail-pop-content">
            <van-row v-if="tag == 'quYes' || tag == 'quNo'">
              <van-col span="12" class="text-center">
                <span>1</span>
              </van-col>
              <van-col span="12" class="text-center">
                <span>2</span>
              </van-col>
            </van-row>
            <van-row v-else>
              <van-col span="8" class="text-center">
                <span>1</span>
              </van-col>
              <van-col span="8" class="text-center">
                <span>2</span>
              </van-col>
              <van-col span="8" class="text-center">
                <span>3</span>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </van-popup>

    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title=""
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="savePicker"
        @cancel="cancelPicker"
      />
    </van-popup>

    <van-popup v-model="showYear" position="bottom">
      <div style="height: 300px; overflow-y: auto">
        <div class="text-center detail-pop-year-content" :class="item.id == yearId ? 'detail-opo-year-active' : ''" v-for="item in yearList" :key="item.id" @click="selectYear($event, item)">
          <span class="font-size-16">{{item.name}}</span>
        </div>
      </div>
    </van-popup>
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
      showLoading: false,
      show: false,
      showPicker: false,
      showYear: false,
      typeText: '',
      type: '',
      timeText: '',
      tag: '',
      styleObject: {
        'height': '',
        'position': 'relative',
        'overflow-y': 'auto'
      },
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2055, 11, 31),
      currentDate: new Date(),
      yearStr: '2020第一学期',
      yearId: '',
      yearList: [
        {name: '2020第一学期', id: 1},
        {name: '2020第二学期', id: 2},
        {name: '2020第三学期', id: 3},
        {name: '2020第四学期', id: 4},
        {name: '2020第五学期', id: 5},
      ]
    }
  },
  created() {
    this.hh();
  },
  methods: {
    hh(){
      if (process.browser) {
        this.styleObject.height = window.innerHeight - 245 + 'px';
      }
    },
    showDetail(event, type, subType){
      this.tag = type;
      this.typeText = subType;
      if (type == "credit"){
        this.type = this.$t("素质学分");
      }else if (type == "late"){
        this.type = this.$t("课堂考勤");
      }else if (type == "unsign"){
        this.type = this.$t("课堂考勤");
      }else if (type == "early"){
        this.type = this.$t("课堂考勤");
      }else if (type == "leave"){
        this.type = this.$t("日常请假");
      }else if (type == "lateDorm"){
        this.type = this.$t("归寝签到");
      }else if (type == "unsignDorm"){
        this.type = this.$t("归寝签到");
      }else if (type == "longDorm"){
        this.type = this.$t("归寝签到");
      }else if (type == "puYes"){
        this.type = this.$t("奖惩统计");
      }else if (type == "puNo"){
        this.type = this.$t("奖惩统计");
      }else if (type == "quYes"){
        this.type = this.$t("内务评比");
      }else if (type == "quNo"){
        this.type = this.$t("内务评比");
      }else if (type == "doorIn"){
        this.type = this.$t("门禁通行");
      }else if (type == "doorOut"){
        this.type = this.$t("门禁通行");
      }
      this.show = true;
    },
    close(){
      this.show = false;
    },
    showPickerOpr(){
      this.showPicker = true;
    },
    clearPickerOpr(){
      this.timeText = "";
    },
    savePicker(event){
      let dateTimeYear = this.$moment(this.currentDate).format("yyyy");
      let dateTimeMonth = this.$moment(this.currentDate).format("M");
      this.timeText = this.$moment(this.currentDate).format("YYYY-MM-DD");
      this.showPicker = false;
    },
    cancelPicker(event){
      this.showPicker = false;
      this.currentDate = new Date();
    },
    closeOverlay(){
      this.currentDate = new Date();
    },
    showYearList(){
      this.showYear = true;
    },
    selectYear(event, item){
      this.yearStr = item.name;
      this.yearId = item.id;
      this.showYear = false;
    },
    returnList(){
      this.$router.push({
        path: '/userList'
      });
    }
  }
}
</script>

<style scoped>
  .content-bg{
    padding: 10px 20px;
  }
  .detail-title{
    font-size: 16px;
    color: #ffffff;
  }
  .detail-block{
    background: #ffffff;
    border-radius: 5px;
    height: 100%;
  }
  .detail-block-title{
    padding:10px 15px;
  }
  .detail-block-userinfo{
    padding:0px 15px;
  }
  .line-div{
    height: 0.5px;
    background: #efefef;
    box-shadow: 0px 2px 2px 1px #dddddd;
  }
  .detail-block-tag{
    height: 20px;
    width: 5px;
    background: #6bd575;
    display: inline-block;
    border-radius: 5px;
  }
  .detail-block-list{
    padding:10px 15px;
  }
  .detail-block-list-text{
    position: relative;
    top: -5px;
    font-weight: bold;
  }
  .detail-block-list-sub_text{
    position: relative;
    top: -5px;
    font-size: 12px;
    color: #dddddd;
  }
  .detail-pop-title{
    height: 30px;
    line-height: 30px;
    background: #dddddd;
  }
  .detail-pop-content{
    height: 30px;
    line-height: 30px;
  }
  .detail-pop{
    padding: 10px 10px;
  }
  .detail-pop-opr-title{
    padding:10px 10px;
    border-bottom: 1px solid #dddddd;
  }
  .detail-pop-year-content{
    padding:15px 10px;
    border-bottom: 1px solid #efefef;
  }
  .detail-opo-year-active{
    color: #6bd575;
  }
</style>
