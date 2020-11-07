<script>
import {Notify} from "vant";

export default {
  data(){
    return {
      campusUrl: '',
      campusTermId: '',
      userList: [],
      campusName: '',
      campusJump: ''
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
          console.log(111333);
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
          console.log(2222);
          console.log(1111, url);
          localStorage.setItem("url", url);
          localStorage.setItem("name", name);
        }
      }
    },
    async getCampusInfo() {
      let params = {};
      await this.$axios.get(this.campusUrl + "/course/rollcall/campus/setting/now", {params: params}).then(res => {
        console.log(res);
        if (res.data.data != null){
          this.campusTermId = res.data.data.currentTermId;
        }
      });
    },
  }
}
</script>
