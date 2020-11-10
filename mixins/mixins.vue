<script>
import {Notify} from "vant";

export default {
  data(){
    return {
      campusUrl: '',
      campusTermId: '',
      userList: [],
      campusName: '',
      campusJump: '',
      loginStatus: false
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

        let url = this.$route.query.campusUrl;
        let name = this.$route.query.campusName;
        let status = this.$route.query.campusType;

        this.campusJump = this.$route.query.campusType;

        if ((!this.campusUrl || this.campusUrl == "") && status != "jump"){
          localStorage.removeItem("url");
          localStorage.removeItem("name");

          if (this.$route.name != "login"){
            this.$router.push({
              path: '/login'
            });
            Notify({ type: 'warning', message: this.$t("用户信息失效，请刷新重新获取！") });
            return;
          }
        }else if (status == "jump"){
          localStorage.setItem("url", url);
          localStorage.setItem("name", name);
        }
      }
    },
    async getCampusInfo() {
      let params = {
        domain: this.campusUrl,
        uri: '/course/rollcall/campus/setting/now'
      };
      this.loginStatus = false;
      if (process.browser) {
        this.campusUrl = localStorage.getItem("url");
        await this.$axios.get("/proxy/", {params: params}).then(res => {
          //console.log(res);
          if (res.data.data != null){
            this.campusTermId = res.data.data.currentTermId;
            if (res.data.code == 200){
              this.loginStatus = true;
            }
          }
        });
      }
    },
  }
}
</script>
