<script>
import {Notify} from "vant";

export default {
  data(){
    return {
      campusUrl: ''
    }
  },
  created() {
    this.initCampusConfig();
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
    }
  }
}
</script>
