<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请开始你的表演(最多50字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in pinglun" :key="index">
        <div class="cmt-title">第{{index+1}}楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2020-03-08 20:18:54</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click.prevent="aaa">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pinglun: [],
      page: "1"
    };
  },
  methods: {
    aaa() {
      this.$axios({
        url: "/bpi/comment/playlist",
        method: "get",
        params: {
          id: "705123491",
          limit: "5",
          offset: 5 * this.page
        }
      })
        .then(res => {
          console.log(res);
          this.page++;
          this.pinglun = this.pinglun.concat(res.data.comments);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$axios({
      url: "/bpi/comment/playlist",
      method: "get",
      params: {
        id: "705123491",
        limit: "5"
      }
    })
      .then(res => {
        this.pinglun = res.data.comments;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h1 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-image: #ccc;
      }
      .cmt-body {
        line-height: 30px;
        text-indent: 2em;
      }
    }
  }
}
</style>
