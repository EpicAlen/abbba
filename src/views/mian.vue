<template>
  <div>
    <div class="house">
      <!-- 最新推荐 -->
      <h2 class="title">最新推荐 <a href="pro_zu.html">更多&gt;&gt;</a></h2>
      <!-- 活动展示区域 -->
      <div class="housebox">
        <div
          class="house-item"
          v-for="(item, index) in activityFloor"
          :key="index"
          @click="navto"
        >
          <img v-if="item.img" :src="item.img" />
          <!-- 所在小区名字 -->
          <div class="name">{{ item.name }}</div>
          <!-- 内容介绍 -->
          <div class="des">{{ item.id }}</div>
        </div>
      </div>
    </div>
    <div class="hot">
      <h2 class="title">热门推荐 <a href="pro_zu.html">更多&gt;&gt;</a></h2>
      <!-- 大图标 -->
      <div class="hot-box">
        <div
          class="hot-left"
          v-for="(item, index) in trestleBoard"
          :key="index"
        >
          <img v-if="item.img" :src="item.img" alt="" />
          <div class="leftbot">
            <div>
              <span>{{ item.title }}</span>
            </div>
            <div>
              <span class="price">{{ item.id }}</span>
            </div>
          </div>
          <!-- 右小图 -->
        </div>
        <div class="hot-right">
          <div
            class="right-item"
            v-for="(item, index) in rightdes"
            :key="index"
          >
            <div class="right-img">
              <img v-if="item.img" :src="item.img" alt="" />
            </div>
            <div class="right-des">
              <div class="des-t1">
                <span>{{ item.title }}</span>
              </div>
              <div>
                <span>{{ item.name }}</span>
              </div>
              <div class="des-t2">
                {{ item.id }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 脚跟 -->
    <div class="bottom">
      <div class="bottom-item">
        <div>
          <img
            src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/icon1.jpg"
            alt=""
          />
        </div>
        <div class="t1">承诺</div>
        <div class="t2">真实可信100%真房源<br />链家承诺，假一赔百</div>
      </div>
      <div class="bottom-item">
        <div>
          <img
            src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/icon2.jpg"
            alt=""
          />
        </div>
        <div class="t1">权威</div>
        <div class="t2">独家房源 覆盖全城<br />房源信息最权威覆盖最广</div>
      </div>
      <div class="bottom-item">
        <div>
          <img
            src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/icon3.jpg"
            alt=""
          />
        </div>
        <div class="t1">信赖</div>
        <div class="t2">万名置业顾问 专业服务<br />链百万家庭的信赖之选</div>
      </div>
      <div class="bottom-item">
        <div>
          <img
            src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/icon4.jpg"
            alt=""
          />
        </div>
        <div class="t1">安全</div>
        <div class="t2">安心承诺 保驾护航<br />多重风险防范机制 无后顾之忧</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      activityFloor: [
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          name: "虹桥乐亭",
          id: "3室2厅2卫 | 147m² | 精装修",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          name: "虹桥乐亭",
          id: "3室2厅2卫 | 147m² | 精装修",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          name: "虹桥乐亭",
          id: "3室2厅2卫 | 147m² | 精装修",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          name: "虹桥乐亭",
          id: "3室2厅2卫 | 147m² | 精装修",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          name: "虹桥乐亭",
          id: "3室2厅2卫 | 147m² | 精装修",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          name: "虹桥乐亭",
          id: "3室2厅2卫 | 147m² | 精装修",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          name: "虹桥乐亭",
          id: "3室2厅2卫 | 147m² | 精装修",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          name: "虹桥乐亭",
          id: "3室2厅2卫 | 147m² | 精装修",
        },
      ],
      trestleBoard: [
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fangt1.jpg",
          title: "闵行",
          id: "¥2841",
        },
      ],
      rightdes: [
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          title: "浦东新区张江日水安华苑",
          name: "习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。",
          id: "¥2841",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          title: "浦东新区张江日水安华苑",
          name: "习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。",
          id: "¥2841",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          title: "浦东新区张江日水安华苑",
          name: "习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。",
          id: "¥2841",
        },
        {
          img: "http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg",
          title: "浦东新区张江日水安华苑",
          name: "习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。",
          id: "¥2841",
        },
      ],
    };
  },
  methods: {
    navto() {
      this.$router.push({ path: "/diager" });
    },
  },
};
</script>
<style scoped lang="scss">
.house,
.hot {
  width: 1180px;
  margin: 0 auto;
  .title {
    margin: 20px 0 0 0;
    height: 23px;
    line-height: 23px;
    border-bottom: #ddd 1px solid;
    border-left: #f1323b 4px solid;
    padding-left: 5px;
    font-size: 18px;
    font-weight: 400;
    position: relative;
    a {
      position: absolute;
      font-size: 12px;
      right: 0;
      top: 0;
      color: #333;
      border: 0;
      text-decoration: none;
    }
  }
}
.housebox {
  width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .house-item img:hover {
    border: #f93 1px solid;
  }
  .house-item {
    margin-right: 10px;
    margin-bottom: 20px;
    img {
      width: 284px;
      height: 188px;
      border: #fff 1px solid;
    }
    .name {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      font-weight: bold;
    }
    .des {
      font-size: 14px;
      line-height: 25px;
    }
    :hover {
      color: #f93;
      cursor: pointer;
    }
  }
  .house-item:nth-child(4n) {
    margin-right: 0px;
  }
}
.hot {
  width: 1180px;
  margin: 0 auto;
  .hot-box {
    margin-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    .hot-left {
      position: relative;
      .leftbot {
        width: 370px;
        height: 25px;
        line-height: 30px;
        padding: 0 5px;
        background: rgba($color: #000000, $alpha: 0.3);
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        position: absolute;
        bottom: 4px;
        left: 0;
        color: #fff;
        font-size: 12px;
        .price {
          color: #f03435;
          font-size: 22px;
        }
        .price:hover {
          font-size: 26px;
          margin:0 4px 4px 0;
          cursor: pointer;
        }
      }
    }
    .hot-right {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      span:hover {
        color: #f93;
        cursor: pointer;
      }
      .right-item {
        width: 375px;
        height: 115px;
        padding: 13px 0;
        padding-left: 17px;
        border-right: #ccc 1px dashed;
        border-bottom: #ccc 1px dashed;
        display: flex;
        flex-wrap: nowrap;

        .right-des {
          width: 210px;
          margin-left: 8px;
          font-size: 12px;
          line-height: 18px;
        }
        .des-t1 {
          font-size: 14px;
          height: 20px;
          font-weight: bold;
          line-height: 15px;
        }
        .des-t2 {
          text-align: right;
          color: #f03435;
          font-size: 24px;
        }
      }
      .right-item:nth-child(2n) {
        border-right: none;
      }
      .right-img {
        width: 150px;
        height: 115px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.bottom {
  display: flex;
  width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 30px 0;
  flex-wrap: nowrap;
  justify-content: space-between;
  .bottom-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .t1 {
      color: #606062;
      height: 60px;
      line-height: 60px;
      font-size: 30px;
    }
    .t2 {
      width: 160px;
      color: #717171;
      font-size: 12px;
      line-height: 18px;
      margin-left: 10px;
    }
  }
}
</style>
