<template>
  <div class="home">
    <div class="home-top-top">
      <div class="home-top">
        <div class="top-left">
          <div class="leftitem">您好，欢迎来到XXX！</div>
        </div>
        <div class="top-right">
          <a href="#" class="login" @click="navtoLogin(1)">登录</a>
          <a href="#" class="register" @click="navtoLogin(2)">注册</a>
          <a href="#" class="top-right-1" @click="management()"><strong>VIP</strong></a>
        </div>
      </div>
    </div>
    <div class="home-center">
      <div class="home-center-left">
        <div class="logo0">
          <img
            class="logo1"
            src="http://sc.adminbuy.cn/uploads/allimg/200412/1-2004121Z600.png"
            alt=""
          />
        </div>
        <div class="logo2">上海</div>
      </div>
      <div class="home-center-right">
        <div class="home-center-inputsearch">
          <img
            class="home-center-tel-logo"
            src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/phone.jpg"
            alt=""
          />
          <div class="home-center-tel">400-000-000</div>
        </div>
      </div>
    </div>
    <div class="home-navigation">
      <div class="home-navigation-box">
        <div class="home-navigation-son1">房源分类</div>
        <div
          v-for="(item, index) in listbox"
          :key="index"
          class="home-navigation-son"
          :class="{ active: listindex == index }"
          @click="clickbtn(index, item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="home-collar-list">
      <div class="home-collar-list0">
        <div class="home-collar-list1">
          <div class="home-collar-list2">
            <div class="home-collar-list3">最新推荐</div>
            <div
              class="home-collar-list4"
              v-for="(item, index) in HousinGarea"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="home-collar-list2" style="border: none">
            <div class="home-collar-list3">热门推荐</div>
            <div
              class="home-collar-list4"
              v-for="(item, index) in Tenement"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <router-view  :key="$route.fullPath"/>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <div class="left-item">关于我们</div>
        <div class="left-item">联系我们</div>
        <div class="left-item">个人中心</div>
      </div>
      <div class="bottom-right">
        <div class="right-item">
          <div class="itemimg">
            <img
              src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/erweima.png"
              alt=""
            />
          </div>
          <div>
            微信扫一扫
            <br />
            房价点评，精彩发布
          </div>
        </div>
        <div class="right-item">
          <div class="itemimg">
            <img
              src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/erweima.png"
              alt=""
            />
          </div>
          <div>
            微信扫一扫
            <br />
            房价点评，精彩发布
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      listindex: 0,
      topbox: [
        "首页",
        "二手房",
        "新房",
        "商铺写字楼",
        "租房",
        "海外地产",
        "装修",
      ],
      HousinGarea: [
        "智慧园",
        "智慧园",
        "慧园",
        "智慧",
        "智园",
        "慧园",
        "智慧园",
      ],
      Tenement: [
        "利民村",
        "智慧园",
        "智慧园",
        "智慧园",
        "利民村",
        "智慧园",
        "利民村",
        "智慧园",
      ],
      listbox: [
        {
          name: "首页",
          path: "/mian",
        },
        {
          name: "租房",
          path: "/rent",
        },
        {
          name: "申请自由经纪人",
          path: "/apply",
        },
        {
          name: "关于我们",
          path: "/about",
        },
      ],
    };
  },
  methods: {
    clickbtn(index, item) {
      this.listindex = index;
      this.$router.push({ path: item.path });
    },

    // 点击跳转登录页面
    navtoLogin(type) {
      this.$router.push({ 'path': "/login", query: { type: type }});
      // console.log(this.$route.query.type)
    },

    // 点击跳转后台
    management() {
      this.$router.push({ path: "/management"});
    },
  },
};
</script>
<style scoped lang="scss">
.home-top-top {
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
}
.home-top {
  width: 1180px;
  font-size: 12px;
  display: flex;
  justify-content: space-between; 
  margin: 0 auto;
}
.top-left {
  height: 30px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center; 
}
.leftitem {
  font-family: "微软雅黑";
  color: #666666;
  padding: 0 5px;
}
.top-right {
  /* padding: 0 10px; */
  display: flex;
  align-items: center;
}
.top-right a {
  color: #333;
  width: 60px;
}
.top-right strong {
  color: #ffd700;
  font-size: 18px;
}
.home-center {
  width: 1190px;
  height: 59px;
  display: flex;
  justify-content: space-between; /* 两端对齐 */
  margin: 0 auto;
  padding: 10px 0;
}
.home-center-left {
  display: flex;
  font-size: 24px;
  align-items: center;
}
.home-center-inputsearch {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-center-search {
  width: 120px;
  height: 33px;
  background: tomato;
  color: white;
  text-align: center;
  line-height: 33px;
  cursor: pointer; /* 变手手 */
  /* display: flex;
  justify-content:center;
  align-items: center; */
}
.home-center-tel-logo {
  margin: 0;
}
.home-center-tel {
  font-size: 25px;
  margin: 0 10px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}
.home-center-right {
  display: flex;
  align-items: center;
}

.logo0 {
  height: 25px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.logo1 {
  width: 85px;
  height: 25px;
}
.logo2 {
  border-left: 1px solid #ddd;
  padding: 0 10px 0;
  color: #62ab00;
}
.home-navigation {
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
}
.home-navigation-box {
  padding: 0 25px;
  width: 1180px;
  font-size: 16px;
  display: flex;
  /* justify-content: space-between; 两端对齐 */
  margin: 0 auto;
}
.home-navigation-son {
  font-family: "微软雅黑";
  color: #fff;
  padding: 0 25px;
  /* width: 126px; */
  height: 50px;
  display: flex;
  flex-wrap: nowrap; /* 文字不换行 */
  align-items: center; /* 垂直居中 */
  text-align: center;
  margin: 0 auto;
}
.home-navigation-son:hover {
  background-color: #666666;
}
.home-navigation-son1 {
  width: 304px;
  height: 50px;
  background: #acce22;
  text-align: center;
  font-weight: 400;
  color: #fff;
  font-size: 18px;
  line-height: 50px;
}
.home-collar-1 {
  width: 100%;
  height: 373px;
}
.home-collar-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background: url(http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/ban.jpg);
  background-size: 100% 100%;
}
.home-collar-list0 {
  width: 1180px;
  height: 373px;
  display: flex;
  margin: 0 auto;
  padding: 0 25px;
}
.home-collar-list1 {
  width: 304px;
  height: 320px;
  background: #fff;
  position: absolute;
  font-family: "微软雅黑";
}
.home-collar-list2 {
  padding: 8px 10px;
  border-bottom: 1px solid #ddd;
}
.home-collar-list3 {
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
.home-collar-list4 {
  font-size: 12px;
  display: inline-table;
  margin: 7px 20px 0 0;
}
.areabox {
  background: #2d2d2d;
  color: #fff;
  height: 50px;
  width: 1180px;
  justify-content: flex-start;
  .area-item {
    padding: 0 25px;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
  }
  .area-item:hover {
    background: #000;
  }
  .active {
    background: #000;
  }
}
.content {
  width: 1180px;
  margin: 0 auto;
}
.bottom {
  width: 1180px;
  margin: 0 auto;
  height: 101px;
  border-top: #ccc 1px solid;
  font-size: 14px;
  display: flex;
  flex-wrap: nowrap;
  .bottom-left {
    width: 40%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .left-item {
      margin-right: 30px;
    }
  }
  .bottom-right {
    margin-left: 50px;
    display: flex;
    flex-wrap: nowrap;
    border-left: #ccc 1px solid;
    .right-item {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin-left: 40px;
      .itemimg {
        width: 76px;
        height: 76px;
        border: #ccc 1px solid;
        margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>