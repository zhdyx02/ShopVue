<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <a :href="item.url">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.date}}</span>
              <span>点击：555次</span>
            </p>

            <!-- 评论子组件 -->
            <comment-box></comment-box>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      newslist: [
        // {
        //   url: "",
        //   title: "aaa",
        //   time: "2017.1.1",
        //   user: ""
        // },
        // {
        //   url: "",
        //   title: "aaa",
        //   time: "2017.1.1"
        // },
        // {
        //   url: "",
        //   title: "aaa",
        //   time: "2017.1.1"
        // }
      ] // 新闻列表
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    add() {
      this.newslist.push({
        url: "",
        title: "aaa",
        time: "2017.1.1"
      });
    },
    getNewsList() {
      // 获取新闻列表
      this.$http
        .get("/api/toutiao/index?type=top&key=192cca1a400a579a175ff72b35d79b9a")
        .then(result => {
          if (result.status === 200) {
            console.log(result.bodyText);
            // 如果没有失败，应该把数据保存到 data 上
               this.newslist = JSON.parse(result.bodyText).result.data;
            console.log(this.newslist);
          } else {
            Toast("获取新闻列表失败！");
          }
        })
        .catch(error => {
          console.log(1, error);
        });
    }
  },
  components: {
    //用来注册子组件的节点
    "comment-box": comment
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  h1 {
    font-size: 14px;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>