<script>
import {Notify} from "vant";

export default {
  data(){
    return {
      campusUrl: '',
      campusTermId: '',
      userList: [],
      campusName: ''
    }
  },
  created() {
    this.initCampusConfig();
    if (this.$route.query.list && this.$route.query.list != ''){
      this.userList = JSON.parse(this.$route.query.list);
    }
    if (this.$route.query.campusName){
      this.campusName = this.$route.query.campusName;
    }
  },
  methods: {
    initCampusConfig(){
      if (process.client){
        this.campusUrl = localStorage.getItem("url");
        if (!this.campusUrl || this.campusUrl == ""){
          localStorage.removeItem("url");
          localStorage.removeItem("name");

          if (this.$route.name != "login"){
            this.$router.push({
              path: '/login'
            });
            Notify({ type: 'warning', message: this.$t("用户信息失效，请刷新重新获取！") });
            return;
          }
        }
      }
    },
    async getCampusInfo() {
      let params = {};
      await this.$axios.get(this.campusUrl + "/course/rollcall/campus/setting/now", {params: params}).then(res => {
        //console.log(res);
        this.campusTermId = res.data.data.currentTermId;
      });
    },
  }
}
</script>
