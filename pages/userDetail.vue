<template>
  <div class="content-bg">
    <AppLoading :show="showLoading"></AppLoading>
    <div class="">
      <van-row>
        <van-col span="3">
          <div class="margin-top-5">
            <i v-if="campusJump != 'jump'" class="fa fa-chevron-left" style="font-size: 22px;color: #ffffff" @click="returnList()"></i>
          </div>
        </van-col>
        <van-col span="18">
          <div class="text-center detail-title">
            <div>{{$t("个人报告")}}</div>
            <div>{{campusName}}</div>
          </div>
        </van-col>
        <van-col span="3">
          <div class="text-center margin-top-5">
            <i v-if="campusJump != 'jump'" class="fa fa-envelope-o" style="font-size: 22px;color: #ffffff" @click="noticeList"></i>
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
                <span class="margin-left-5">{{qtztRate}}%</span>
              </div>
            </van-col>
          </van-row>
        </div>

        <div class="detail-block-userinfo margin-top-10">
          <van-row>
            <van-col span="5">
              <img width="60" height="70" v-if="userInfo.photo_simple && userInfo.photo_simple != ''" :src="userInfo.photo_simple" />
              <img width="60" height="70" v-else :src="require('./../static/img/default.png')" />
            </van-col>
            <van-col span="9" class="padding-left-10">
              <div class="margin-top-5">
                <span>{{userInfo.real_name}}</span>
              </div>
              <div class="margin-top-5">
                <span>{{userInfo.class_name}}</span>
              </div>
              <div class="margin-top-5">
                <span>{{userInfo.college_name}}</span>
              </div>
            </van-col>
            <van-col span="1">
              <div style="background: #dddddd;height: 70px;width: 1px"></div>
            </van-col>
            <van-col span="9">
              <div class="margin-top-5">
                <span>{{$t("学号")}}: </span>
                <span>{{userInfo.student_id}}</span>
              </div>
              <div class="margin-top-5">
                <span>{{$t("宿舍")}}: </span>
                <span>{{userInfo.dormitory_no}}</span>
              </div>
              <div class="margin-top-5">
                <span>{{$t("手机")}}: </span>
                <span>{{userInfo.phone}}</span>
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
              <span class="pull-right color-6bd575">{{scoreSum}}{{$t("分")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("加分")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'credit', '加分', '加分', scoreAddCount)">{{scoreAddCount}}{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("减分")}}</label>
                <label>
                  <van-button plain size="mini" type="danger" @click="showDetail($event, 'credit', '减分', '减分', scoreMinusCount)">{{scoreMinusCount}}{{$t("次")}}</van-button>
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
              <span class="detail-block-list-sub_text font-size-12">{{$t("出勤率")}}{{rollCallActualRate}}%</span>
              <span class="pull-right color-6bd575">{{rollCallActualNum}}{{$t("节")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <div style="margin-bottom: 10px">
                <span>
                  <label>{{$t("出勤")}}</label>
                  <label>
                    <van-button plain size="mini" type="primary" @click="showDetail($event, 'actual', '出勤', '1', rollCallActualNum)">{{rollCallActualNum}}{{$t("节")}}</van-button>
                  </label>
                </span>
              </div>

              <span>
                <label>{{$t("迟到")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'late', '迟到', '3', rollCallLateNum)">{{rollCallLateNum}}{{$t("节")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("旷课")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'unsign', '旷课', '0', rollCallUnSignNum)">{{rollCallUnSignNum}}{{$t("节")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("早退")}}</label>
                <label>
                  <van-button plain size="mini" type="danger" @click="showDetail($event, 'early', '早退', '4', rollCallLeaveEarlyNum)">{{rollCallLeaveEarlyNum}}{{$t("节")}}</van-button>
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
              <span class="detail-block-list-sub_text font-size-12">{{$t("请假率")}}{{leaveRate}}%</span>
              <span class="pull-right color-6bd575">{{leaveSum}}{{$t("天")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("请假")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'leave', '请假', '2', leaveCount)">{{leaveCount}}{{$t("次")}}</van-button>
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
              <span class="detail-block-list-sub_text font-size-12">{{$t("旷寝率")}}{{rollCallBedActualRate}}%</span>
              <span class="pull-right color-6bd575">{{rollCallBedUnSignNum}}{{$t("次")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <div style="margin-bottom: 10px">
                <span>
                  <label>{{$t("归寝")}}</label>
                  <label>
                    <van-button plain size="mini" type="primary" @click="showDetail($event, 'actualDorm', '归寝', '1', rollCallBedActualNum)">{{rollCallLateNum}}{{$t("次")}}</van-button>
                  </label>
                </span>
              </div>
              <span>
                <label>{{$t("晚归")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'lateDorm', '晚归', '3', rollCallBedLateNum)">{{rollCallBedLateNum}}{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("旷寝")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'unsignDorm', '旷寝', '0', rollCallBedUnSignNum)">{{rollCallBedUnSignNum}}{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("超长")}}</label>
                <label>
                  <van-button plain size="mini" type="danger" @click="showDetail($event, 'longDorm', '超长', '4', rollCallBedLateLongNum)">{{rollCallBedLateLongNum}}{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="pull-right font-bold">{{$t("总旷寝")}}</span>
              <span class="clearfix"></span>
            </div>
          </div>
          <van-divider />
          <div>
            <div>
              <span class="detail-block-tag">

              </span>
              <span class="detail-block-list-text">{{$t("奖惩统计")}}</span>
              <span class="detail-block-list-sub_text font-size-12">{{$t("奖惩率")}}{{punishRate}}%</span>
              <span class="pull-right color-6bd575">{{punishSanctionCount}}{{$t("次")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("奖励")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'puYes', '奖励', '奖励', punishRewardCount)">{{punishRewardCount}}{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("处分")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'puNo', '处分', '处分', punishSanctionCount)">{{punishSanctionCount}}{{$t("次")}}</van-button>
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
              <span class="detail-block-list-sub_text font-size-12">{{$t("合格率")}}{{dormRate}}%</span>
              <span class="pull-right color-6bd575">{{dormLowCountTotal}}{{$t("次")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("合格")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'quYes', '合格', 'true', dormPassCountTotal)">{{dormPassCountTotal}}{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("不合格")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'quNo', '不合格', 'false', dormLowCountTotal)">{{dormLowCountTotal}}{{$t("次")}}</van-button>
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
              <span class="pull-right color-6bd575">{{doorSum}}{{$t("次")}}</span>
              <span class="clearfix"></span>
            </div>
            <div class="margin-top-5">
              <span>
                <label>{{$t("进入")}}</label>
                <label>
                  <van-button plain size="mini" type="primary" @click="showDetail($event, 'doorIn', '进入', '1', inDoorSum)">{{inDoorSum}}{{$t("次")}}</van-button>
                </label>
              </span>
              <span class="margin-left-10">
                <label>{{$t("外出")}}</label>
                <label>
                  <van-button plain size="mini" type="warning" @click="showDetail($event, 'doorOut', '外出', '2', outDoorSum)">{{outDoorSum}}{{$t("次")}}</van-button>
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
            {{selCurrenSum}}
            <label v-if="tag=='credit' || tag=='leave' || tag == 'actualDorm' || tag=='lateDorm' || tag=='lateUnsign' || tag=='lateLong' || tag=='puYes' || tag=='quYes' || tag=='puNo' || tag=='quNo' || tag=='doorIn' || tag=='doorOut' || tag == 'unsignDorm' || tag == 'longDorm'">次</label>
            <label v-if="tag == 'late' || tag == 'unsign' || tag == 'early'">节</label>
          </span>

          <span class="margin-left-5 detail-block-list-text color-ff976a" v-if="tag=='credit' || tag=='leave'">|</span>

          <span class="detail-block-list-text color-ff976a color-ff976a" v-if="tag=='credit' || tag=='leave'">
            {{selTotalSum}}
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
          <van-row v-if="tag == 'actual' || tag == 'late' || tag == 'unsign' || tag == 'early'">
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
          <van-row v-if="tag == 'lateDorm' || tag == 'unsignDorm' || tag == 'longDorm' || tag == 'actualDorm'">
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
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
              >

                <van-row v-if="tag == 'quYes' || tag == 'quNo'" v-for="(item, index) in detailList" :key="index">
                  <van-col span="12" class="text-center">
                    <span>{{$moment(item.lastTime).format("YYYY-MM-DD")}}</span>
                  </van-col>
                  <van-col span="12" class="text-center">
                    <van-tag plain type="primary" v-for="(itemChild, index) in item.checkItemMap" :key="index">{{itemChild.checkItem}}</van-tag>
                  </van-col>
                </van-row>

                <van-row  v-if="tag == 'credit' || tag == 'leave' || tag == 'lateDorm' || tag == 'unsignDorm' || tag == 'longDorm' || tag == 'actualDorm' || tag == 'puYes' || tag == 'puNo' || tag == 'doorIn' || tag == 'doorOut' || tag == 'actual' || tag == 'late' || tag == 'unsign' || tag == 'early'" v-for="(item, index) in detailList" :key="index">
                  <van-col span="8" class="text-center">
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, $moment(item.apply_time).format('YYYY-MM-DD HH:mm:ss'))" v-if="tag == 'credit' || tag == 'leave' || tag == 'puYes' || tag == 'puNo'">{{$moment(item.apply_time).format('YYYY-MM-DD HH:mm:ss')}}</span>
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.busiTime)" v-if="tag == 'lateDorm' || tag == 'unsignDorm' || tag == 'longDorm' || tag == 'actualDorm' || tag == 'late' || tag == 'unsign' || tag == 'early' || tag == 'actual'">{{item.busiTime}}</span>
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.add_time)" v-if="tag == 'doorIn' || tag == 'doorOut'">{{$moment(item.add_time).format('YYYY-MM-DD HH:mm:ss')}}</span>
                  </van-col>
                  <van-col span="8" class="text-center">
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.str2+'('+item.str3+')')" v-if="tag == 'credit'">{{item.str2}}({{item.str3}})</span>
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.des)" v-if="tag == 'leave' || tag == 'puYes' || tag == 'puNo'">{{item.des}})</span>
                    <span v-if="tag == 'lateDorm'">{{$t("晚归")}}</span>
                    <span v-if="tag == 'unsignDorm'">{{$t("旷寝")}}</span>
                    <span v-if="tag == 'longDorm'">{{$t("超长")}}</span>
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.build_name)" v-if="tag == 'doorIn' || tag == 'doorOut'">{{item.build_name}}</span>
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.courseName)" v-if="tag == 'late' || tag == 'unsign' || tag == 'early'">{{item.courseName}}</span>
                  </van-col>
                  <van-col span="8" class="text-center">
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.double1+'分')" v-if="tag == 'credit'">{{item.double1}}{{$t("分")}}</span>
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.double1+'天')" v-if="tag == 'leave'">{{item.double1}}{{$t("天")}}</span>
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.str2)" v-if="tag == 'puYes' || tag == 'puNo'">{{item.str2}}</span>
                    <span class="content-td-maxwidth-inlineblock" @click="detailPop($event, item.signLength/60+'小时')" v-if="tag == 'lateDorm' || tag == 'unsignDorm' || tag == 'longDorm' || tag == 'actualDorm'">{{item.signLength/60}}{{$t("小时")}}</span>
                    <span class="content-td-maxwidth-inlineblock" v-if="tag == 'doorIn'">{{$t("进入")}}</span>
                    <span class="content-td-maxwidth-inlineblock" v-if="tag == 'doorOut'">{{$t("外出")}}</span>
                    <span class="content-td-maxwidth-inlineblock" v-if="tag == 'actual' || tag == 'late' || tag == 'unsign' || tag == 'early'">{{item.section}}{{$t("节")}}</span>
                  </van-col>
                </van-row>
              </van-list>
            </van-pull-refresh>
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
import {Notify} from "vant";
import { Toast } from 'vant';
export default {
  mixins: [mixins],
  components: {AppLoading},
  data(){
    return {
      list: [],
      userInfo: {},
      userId: '',
      loading: false,
      finished: false,
      showLoading: false,
      refreshing: false,
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
      yearStr: '',
      yearId: '',
      yearList: [],

      scoreSum: 0,
      scoreAddCount: 0,
      scoreMinusCount: 0,
      rollCallActualNum: 0,
      rollCallLateNum: 0,
      rollCallUnSignNum: 0,
      rollCallLeaveEarlyNum: 0,
      rollCallActualRate: 0,
      leaveSum: 0,
      leaveCount: 0,
      leaveRate: 0,
      rollCallBedActualNum: 0,
      rollCallBedUnSignNum: 0,
      rollCallBedLateNum: 0,
      rollCallBedLateLongNum: 0,
      rollCallBedActualRate: 0,
      punishRate: 0,
      punishRewardCount: 0,
      punishSanctionCount: 0,
      dormRate: 0,
      dormLowCountTotal: 0,
      dormPassCountTotal: 0,
      inDoorSum: 0,
      outDoorSum: 0,
      doorSum: 0,
      qtztRate: 0,

      selType: '',
      selCurrenSum: 0,
      selTotalSum: 0,
      detailUrl : '',
      detailList: [],
      page: 0,
      totalPage: 0
    }
  },
  created() {
    this.hh();
    this.init();
    this.initConfig();
  },
  methods: {
    hh(){
      if (process.browser) {
        this.styleObject.height = window.innerHeight - 245 + 'px';
      }
    },
    init(){
      this.userId = this.$route.query.userId;
    },
    async initConfig() {
      await this.initCampusConfig();
      await this.getCampusInfo();
      this.initStatic();
      this.initYearInfo();
      //this.initTest();
    },
    initStatic(){
      let data = {
        domain: this.campusUrl,
        uri: '/course/quantization/user-stat',
        data: JSON.stringify({
          userId: this.userId,
          termId: this.campusTermId
        })
      };
      //console.log(data);
      this.showLoading = true;
      this.$axios.get("/proxy/", {params: data}).then(res =>{
        if (res.data.code == 200){
          this.userInfo = res.data.data.userInfo;
          this.scoreSum = res.data.data.scoreSum;
          this.scoreAddCount = res.data.data.scoreAddCount;
          this.scoreMinusCount = res.data.data.scoreMinusCount;
          this.rollCallActualNum = res.data.data.rollCallActualNum;
          this.rollCallLateNum = res.data.data.rollCallLateNum;
          this.rollCallUnSignNum = res.data.data.rollCallUnSignNum;
          this.rollCallLeaveEarlyNum = res.data.data.rollCallLeaveEarlyNum;
          this.rollCallActualRate = res.data.data.rollCallActualRate;
          this.leaveSum = res.data.data.leaveSum;
          this.leaveCount = res.data.data.leaveCount;
          this.leaveRate = res.data.data.leaveRate;
          this.rollCallBedUnSignNum = res.data.data.rollCallBedUnSignNum;
          this.rollCallBedLateNum = res.data.data.rollCallBedLateNum;
          this.rollCallBedLateLongNum = res.data.data.rollCallBedLateLongNum;
          this.rollCallBedActualRate = res.data.data.rollCallBedActualRate;
          this.punishRate = res.data.data.punishRate;
          this.punishRewardCount = res.data.data.punishRewardCount;
          this.punishSanctionCount = res.data.data.punishSanctionCount;
          this.dormRate = res.data.data.dormRate;
          this.dormLowCountTotal = res.data.data.dormLowCountTotal;
          this.dormPassCountTotal = res.data.data.dormPassCountTotal;
          this.inDoorSum = res.data.data.inDoorSum;
          this.outDoorSum = res.data.data.outDoorSum;
          this.doorSum = res.data.data.inDoorSum + res.data.data.outDoorSum;
          this.qtztRate = res.data.data.qtztRate;
        }else {
          Notify({ type: 'warning', message: res.data.desc });
        }

        this.showLoading = false;
      });
    },
    initTest(){
      /*let data = {
        userId: this.userId
      };
      var xhr = new XMLHttpRequest();
      xhr.open("GET", this.campusUrl + "/localserver/api/corsTest");
      xhr.withCredentials = true; // 设置跨域 Cookie
      xhr.send()*/
    },
    initYearInfo(){
      let data = {
        domain: this.campusUrl,
        uri: '/course/quantization//query-term-list'
      };
      this.$axios.get("/proxy/", {params: data}).then(res =>{
        this.yearList = res.data.data;
        if (res.data.data){
          for (let i = 0; i < res.data.data.length; i++){
            if (res.data.data[i].id == this.campusTermId){
              this.yearStr = res.data.data[i].name;
            }
          }
        }
      });
    },
    showDetail(event, type, subType, selType, selCurrent){
      let _self = this;
      this.tag = type;
      this.typeText = subType;
      this.selType = selType;
      this.selCurrenSum = selCurrent;
      if (type == "credit"){
        this.type = this.$t("素质学分");
        this.selTotalSum = this.scoreSum;
        this.detailUrl = '/course/quantization/user-score-page';
      }else if (type == "actual"){
        this.type = this.$t("课堂考勤");
        this.detailUrl = '/course/quantization/user-roll-call-page';
      }else if (type == "late"){
        this.type = this.$t("课堂考勤");
        this.detailUrl = '/course/quantization/user-roll-call-page';
      }else if (type == "unsign"){
        this.type = this.$t("课堂考勤");
        this.detailUrl = '/course/quantization/user-roll-call-page';
      }else if (type == "early"){
        this.type = this.$t("课堂考勤");
        this.detailUrl = '/course/quantization/user-roll-call-page';
      }else if (type == "leave"){
        this.type = this.$t("日常请假");
        this.selTotalSum = this.leaveSum;
        this.detailUrl = '/course/quantization/user-leave-page';
      }else if (type == "actualDorm"){
        this.type = this.$t("归寝签到");
        this.detailUrl = '/course/quantization/user-roll-call-bed-page';
      }else if (type == "lateDorm"){
        this.type = this.$t("归寝签到");
        this.detailUrl = '/course/quantization/user-roll-call-bed-page';
      }else if (type == "unsignDorm"){
        this.type = this.$t("归寝签到");
        this.detailUrl = '/course/quantization/user-roll-call-bed-page';
      }else if (type == "longDorm"){
        this.type = this.$t("归寝签到");
        this.detailUrl = '/course/quantization/user-roll-call-bed-page';
      }else if (type == "puYes"){
        this.type = this.$t("奖惩统计");
        this.detailUrl = '/course/quantization/user-punish-page';
      }else if (type == "puNo"){
        this.type = this.$t("奖惩统计");
        this.detailUrl = '/course/quantization/user-punish-page';
      }else if (type == "quYes"){
        this.type = this.$t("内务评比");
        this.detailUrl = '/course/quantization/user-quantization-page';
      }else if (type == "quNo"){
        this.type = this.$t("内务评比");
        this.detailUrl = '/course/quantization/user-quantization-page';
      }else if (type == "doorIn"){
        this.type = this.$t("门禁通行");
        this.detailUrl = '/course/quantization/user-access-control-page';
      }else if (type == "doorOut"){
        this.type = this.$t("门禁通行");
        this.detailUrl = '/course/quantization/user-access-control-page';
      }
      this.loading = true;

      setTimeout(function () {
        _self.onLoad();
      },800);

      this.show = true;
    },
    close(){
      //this.list = [];
      this.detailList = [];
      this.refreshing = false;
      this.loading = false;
      this.page = 0;
      this.timeText = "";
      this.currentDate = new Date();
      this.show = false;
    },
    showPickerOpr(){
      this.showPicker = true;
    },
    clearPickerOpr(){
      this.timeText = "";
      this.page = 1;
      this.detailList = [];
      this.initDetailList();
    },
    savePicker(event){
      let dateTimeYear = this.$moment(this.currentDate).format("yyyy");
      let dateTimeMonth = this.$moment(this.currentDate).format("M");
      this.timeText = this.$moment(this.currentDate).format("YYYY-MM-DD");
      this.page = 1;
      this.detailList = [];
      this.initDetailList();
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
      this.campusTermId = item.id;
      this.initStatic();
      this.showYear = false;
    },
    returnList(){
      this.$router.push({
        path: '/userList',
        query: {
          list: JSON.stringify(this.userList),
          campusName: this.campusName
        }
      });
    },
    noticeList(){
      this.$router.push({
        path: '/noticeList',
        query: {
          list: JSON.stringify(this.userList),
          campusName: this.campusName,
          userId: this.$route.query.userId,
          classId: this.userInfo.clasz
        }
      });
    },
    onRefresh(){
      // 清空列表数据
      this.loading = false;
      this.page = 0;
      this.detailList = [];
      this.onLoad();
    },
    onLoad() {
      // 异步更新数据
      if (this.page != 0 && this.totalPage == this.page) {
        this.finished = true;
      } else {
        this.page = this.page + 1;
        this.initDetailList();
        this.finished = false;
      }
    },
    detailPop(event, str){
      Toast({
        message: str,
        position: 'top',
      });
    },
    initDetailList(){
      let _self = this;
      let data = {
        page: this.page,
        num: 20,
        time: this.timeText,
        userId: this.userId,
        termId: this.campusTermId
      };
      let params = {
        domain: this.campusUrl,
        uri: this.detailUrl
      };
      if (this.tag == "credit"){
        data['str1'] = this.selType;
      }else if (this.tag == "actual"){
        data['signStatus'] = this.selType;
      }else if (this.tag == "late"){
        data['signStatus'] = this.selType;
      }else if (this.tag == "unsign"){
        data['signStatus'] = this.selType;
      }else if (this.tag == "early"){
        data['signStatus'] = this.selType;
      }else if (this.tag == "leave"){

      }else if (this.tag == "actualDorm"){
        data['signStatus'] = this.selType;
      }else if (this.tag == "lateDorm"){
        data['signStatus'] = this.selType;
      }else if (this.tag == "unsignDorm"){
        data['signStatus'] = this.selType;
      }else if (this.tag == "longDorm"){
        data['signStatus'] = this.selType;
      }else if (this.tag == "puYes"){
        data['str1'] = this.selType;
      }else if (this.tag == "puNo"){
        data['str1'] = this.selType;
      }else if (this.tag == "quYes"){
        data['checkStatus'] = true;
      }else if (this.tag == "quNo"){
        data['checkStatus'] = false;
      }else if (this.tag == "doorIn"){
        data['deviceSceneSubType'] = 1;
      }else if (this.tag == "doorOut"){
        data['deviceSceneSubType'] = 2;
      }
      params['data'] = JSON.stringify(data);
      this.$axios.get("/proxy/", {params: params}).then(res => {
        this.refreshing = false;
        this.loading = false;
        _self.detailList = _self.detailList.concat(res.data.data.list);
        console.log(_self.detailList);
        _self.totalPage = res.data.data.pageNum;
        _self.page = res.data.data.currentPage;

        if (this.totalPage == this.page) {
          this.finished = true;
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
