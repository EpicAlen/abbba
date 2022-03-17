<template>
  <div class="home-menu">
    <div class="home-menu-items">
      <span class="items-title">房源区域：</span
      ><span class="menu-items-subset"
        ><a class="items" v-for="(item, index) in HousinGarea" :key="index">
          {{ item }}
        </a></span
      >
    </div>
    <div class="home-menu-items">
      <span class="items-title">租金：</span
      ><span class="menu-items-subset"
        ><a class="items" v-for="(item, index) in rent" :key="index">
          {{ item }}
        </a>
        <from class="input-price">
          <input class="from-price" />-<input class="to-price" /><span>元</span>
        </from>
      </span>
    </div>
    <div class="home-menu-items">
      <span class="items-title">出租方式：</span
      ><span class="menu-items-subset"
        ><a class="items" v-for="(item, index) in type" :key="index">
          {{ item }}
        </a></span
      >
    </div>
    <div class="home-menu-items">
      <span class="items-title">面积：</span
      ><span class="menu-items-subset"
        ><a class="items" v-for="(item, index) in type" :key="index">
          {{ item }}
        </a></span
      >
    </div>
    <div class="home-menu-items">
      <span class="items-title">房型：</span
      ><span class="menu-items-subset"
        ><a class="items" v-for="(item, index) in housetype" :key="index">
          {{ item }}
        </a></span
      >
    </div>
    <div class="home-menu-items-sort">
      <span class="items-sort-1">排序：</span>
      <span class="items-sort-2">默认</span>
      <span class="items-sort-2">价格</span>
      <span class="items-sort-2">最新</span>
    </div>
    <div class="home-main">
      <!-- 循环 -->
      <div class="home-main-content" v-for="(item,index) in 10" :key="index" @click="navto">
        <div class="main-content-picture">
          <a href="#">
            <img
              class="picture"
              src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg"
          /></a>
        </div>
        <div class="home-main-content-explain">
          <h3 class="home-main-content-title1">
            <a>中装一室一厅，楼层好，采光足，稀缺房源</a>
          </h3>
          <div class="home-main-content-title2">
            <img
              class="home-main-content-logo"
              src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/weizhi.png"
            /><strong class="main-name">智慧园</strong>
          </div>
          <div class="home-main-content-title3">
            一室一厅 38平 南 楼层中部/6层
          </div>
          <div class="home-main-content-title4">
            发布人：张先生 发布时间：2021-12-31
          </div>
        </div>
        <div class="home-main-content-price">
          <span>￥<strong class="price">2890</strong>元/月</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "rent",
  components: {},
  data() {
    return {
      HousinGarea: [
        "智慧园",
        "智慧园",
        "慧园",
        "智慧",
        "智园",
        "慧园",
        "智慧园",
      ],
      Tenement: ["租金", "出租方式", "面积", "房型"],
      NewHouse: ["价格", "面积", "房型"],
      SecondHandHouse: ["价格", "面积", "房型"],
      navigationbox: [
        "区域找房",
        "地铁找房",
        "地图找房",
        "小区",
        "我要出租",
        "品牌公寓",
        "民宿短租",
      ],
      rent: ["不限", "500-1000", "1000-2000元", "2000-3000元", "3000-4000元"],
      housetype: ["不限", "一室一厅", "二室一厅", "三室一厅", "一室一厅一卫"],
      type: ["不限", "长租", "合租", "个人"],
      housetypes: [
        "全部",
        "普通住宅",
        "公寓",
        "别墅",
        "四合院",
        "商住两用",
        "新里洋房",
        "老公房",
        "平方",
        "其他",
      ],
      inputaddress: "",
    };
  },
   methods:{
    navto(){
        this.$router.push({'path':'/diager'})
      }
  }
};
</script>
<style scoped >

.home-menu {
  width: 1158px;
  /* height: 263px; */
  padding: 7px 10px 0 10px;
  align-items: center;
  margin: 0 auto;
}
.home-menu-items {
  font-size: 13px;
  padding: 4px 10px;
  line-height: 26px;
  border-bottom: 1px dotted #e6e6e6;
  display: flex;
  flex-wrap: nowrap;
}
.home-menu-items .items {
  margin-right: 20px;
  padding: 4px 3px;
}
.home-menu-items .items:first-child {
 
  color: #ff6600;
}
.home-menu-items-sort {
  font-size: 13px;
  padding: 4px 10px;
  line-height: 26px;
  border-bottom: 1px dotted #e6e6e6;
}
.home-menu-items-sort {
  color: #333;
  margin-right: 15px;
  border-bottom: none;
}
.items-sort-1 {
  margin-right: 15px;
  /* padding: 4px 3px; */
}
.items-sort-2 {
  margin-right: 20px;
  padding: 4px 3px;
}
.menu-items-subset {
  width: 1082px;
  display: inline;
}
.items-title {
  color: #333;
  /* margin-right: 15px; */
  width:80px;
  text-align: right;
  display: block;
}
.from-price {
  width: 32px;
  height: 16px;
  margin: -4px 0 0;
  padding: 0 3px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 12px;
  outline: none;
  color: #f60;
  text-align: center;
}
.to-price {
  width: 32px;
  height: 16px;
  margin: -4px 0 0;
  padding: 0 3px;
  border: 1px solid #ccc;
  border-radius: 3px; /* 边框圆角 */
  font-size: 12px;
  outline: none;
  color: #f60;
  text-align: center;
}
.home-main {
  background: #fff;
  margin-bottom: 20px;
}
.home-main-content {
  padding: 15px 0;
  border-bottom: 1px dotted #ccc;
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-between; */
}
.main-content-picture {
  width: 25%;
  height: 188px;
  background: none;
}
.home-main-content-explain {
  width: 50%;
  height: 188px;
  background: none;
  font-size: 14px;
  /* width: 880px;
  margin-left: 10px;
  justify-content: space-between; */
}

.home-main-content-title1 {
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
  padding: 5px 10px;
}
.home-main-content-title2 {
  color: #ff0000;
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  padding: 5px 10px;
}
.home-main-content-title3 {
  line-height: 25px;
  font-weight: 400;
  padding: 5px 10px;
}
.home-main-content-title4 {
  line-height: 25px;
  font-weight: 400;
  padding: 20px 10px;
}

.home-main-content-price {
  width: 25%;
  height: 188px;
  background: none;
  color: #f03435;
  font-size: 18px;
}
.home-main-content-price span {
  margin: 50px 20px;
  float: right;
  font-family: Constantia, "Lucida Bright", "DejaVu Serif", Georgia, serif;
}
.home-main-content-price strong {
  font-family: Constantia, "Lucida Bright", "DejaVu Serif", Georgia, serif;
  font-size: 26px;
}
</style>