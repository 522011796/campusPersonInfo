<script>
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
      }
    }
  }
}
</script>
