import crypto from 'crypto';
export default {
  getLength: function (str) {
    //获得字符串实际长度，中文2，英文1
    //要获得长度的字符串
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128)
        realLength += 1;
      else
        realLength += 2;
    }
    return realLength;
  },
  clearData: function (data, isSerialize) {
    if (data) {
      if (isSerialize) {
        var newData = {};
        for (var i = 0, length = data.length; i < length; i++) {
          if (trim(data[i].value) != '' && trim(data[i].value) != 'null') {
            newData[data[i].name] = $.trim(data[i].value);
          }
        }
        return newData;
      } else {
        for (var key in data) {
          if (data[key] === '' || data[key] == 'null' || data[key] == null) {
            delete data[key];
          }
        }
        ;
        return data;
      }
    }
  },
  trim: function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  getmd5(str) {
    var a;
    var md5 = crypto.createHash("md5");
    //update("中文", "utf8")
    md5.update(str);
    var a = md5.digest('hex');
    //////console.log(a);
    //47bce5c74f589f4867dbd57e9ca9f808
    return a;
  },
  splitStr(str, tag){
    //判断字符串是否存在，并且是否大于一个字符
    if (str && str.length > 1){
      let strTemp = str.split(tag);
      return strTemp;
    }else {
      return [];
    }
  },
  arrToStr(arr){
    if (arr && arr.length > 0){
      let str = "";
      for (let i = 0; i < arr.length; i++){
        str +=  arr[i];
        if (i != arr.length -1){
          str += ",";
        }
      }
      return str;
    }
  },
  arrToStrTag(arr, tag){
    if (arr && arr.length > 0){
      let str = "";
      for (let i = 0; i < arr.length; i++){
        str +=  arr[i];
        if (i != arr.length -1){
          str += tag;
        }
      }
      return str;
    }
  },
  getUrlParam(key) {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
  },
  inArray(search,array,tag){
    for(var i in array){
      if (tag){
        if(array[i][tag] == search[tag]){
          return true;
        }
      }else {
        if(array[i] == search){
          return true;
        }
      }
    }
    return false;
  },
  gradeText(val){
    let gradeList = ['一年级','二年级','三年级','四年级','五年级'];
    return gradeList[parseInt(val)-1];
  },
  weekNoText(val){
    let gradeList = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
    return gradeList[parseInt(val)-1];
  },
  formatTimeLength(min){
    if(min || min == 0){
      var seconds = min * 60;
      var day = Math.floor( seconds/ (24*3600) ); // Math.floor()向下取整
      var hour = Math.floor( (seconds - day*24*3600) / 3600);
      var minute = Math.floor( (seconds - day*24*3600 - hour*3600) /60 );
      var second = seconds - day*24*3600 - hour*3600 - minute*60;
      if (day <= 0){
        return hour + " " + "小时" + minute + " " + "分钟";
      }
      return day + " " + "天" + hour + " " + "小时" + minute + " " + "分钟";
    }else{
      return '--';
    }
  },
  studentTeachStatus(type, str) {
    let studentTeachStatus = {
      "11":"死亡",
      "99":"其他",
      "01":"在读",
      "12":"保留入学资格",
      "02":"休学",
      "13":"公派出国",
      "03":"退学",
      "14":"开除",
      "04":"停学",
      "15":"下落不明",
      "05":"复学",
      "06":"流失",
      "07":"毕业",
      "08":"结业",
      "09":"肆业",
      "10":"转学"
    };
    if (str && type == 'set') {
      return studentTeachStatus[str];
    }
    if (!str && type == 'get'){
      return studentTeachStatus;
    }
  }
}
