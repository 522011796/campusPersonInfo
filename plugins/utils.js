import Vue from 'vue'
import utils from '../utils/utils'

export default ({ app, store, req }) => {
  Vue.prototype.$utils = utils;
  /*Vue.prototype.$utilsAxios = {
    test:function(val){
      app.$axios.get('/proxy/user/user/getSess').then(res => {
        //console.log(res);
      });
    }
  };*/
}
