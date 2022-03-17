<template>
  <div class="detailbox">
    <div class="detail-top">
      <div class="top-left">
        <div class="left-item">
          <span class="item-title">用户名：</span>
          <input
            type="text"
            placeholder="请输入您的用户名"
            class="left-input"
          />
        </div>
        <div class="left-item">
          <span class="item-title">登录密码：</span>
          <input type="text" placeholder="请输入您的密码" class="left-input" />
        </div>
        <div class="left-item" v-if="type == 2">
          <span class="item-title">确认密码：</span>
          <input
            type="text"
            placeholder="请再次确认您的密码"
            class="left-input"
          />
        </div>
        <div class="left-item">
          <span class="item-title">验证码：</span>
          <input type="text" placeholder="请输入验证码" class="left-input" />
        </div>
        <div v-if="type == 1">
          <button class="loginbtn">立即登录</button>
        </div>
        <div v-if="type == 2">
          <button class="loginbtn">立即注册</button>
        </div>
      </div>
      <div class="top-right">
        <div class="right-title" v-if="type == 1">如果您没有账号，请</div>
        <div class="right-title" v-if="type == 2">已有账号？请</div>
        <div>
          <button class="register" v-if="type == 2" @click="navtoLogin(1)">
            立即登录
          </button>
          <button class="register" v-if="type == 1" @click="navtoLogin(2)">
            立即注册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: true,
      type: 2,
    };
  },
  // created() {
  //   this.type = this.$route.query.type;
  //   console.log(this.type)
  // },
  mounted() {
    this.type = this.$route.query.type;
    console.log(this.$route.query.type)
  },
  methods: {
    navto(type) {
      this.$router.push({ path: "/login", query: { type: type } });
    },

    navtoLogin(type) {
      this.$router.push({ path: "/login", query: { type: type } });
    },

    // 点击跳转
    navtoregister(type) {
      this.$router.push({ path: "/register", query: { type: type } });
    },
  },
};
</script>
<style lang="scss" scoped>
.detailbox {
  width: 1000px;
  margin: 40px auto;

  .detail-top {
    display: flex;
    flex-wrap: nowrap;
    min-height: 400px;
    .top-left {
      padding: 40px;
      border-right: #f1f1f1 1px solid;
      .loginbtn {
        background: #f93;
        width: 300px;
        height: 46px;
        font-size: 20px;
        border: none;
        color: #fff;
        margin-left: 80px;
      }
    }
    .left-item {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin-bottom: 20px;
      font-size: 14px;
      .item-title {
        width: 80px;
        text-align: right;
      }
      .left-input {
        border: 1px solid #ccc;
        width: 300px;
        height: 46px;
        text-indent: 10px;
        font-size: 18px;
      }
    }
    .top-right {
      padding: 30px;
      .right-title {
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
      }
      .register {
        width: 120px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-size: 16px;
        background: #f1f1f1;
        border: #ddd 1px solid;
        margin-top: 15px;
      }
    }
  }
}
</style>
