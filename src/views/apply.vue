<template>
  <div class="map-periphery">
    <div class="map-title">地图</div>
    <div class="map-side">
      <ul>
        <li class="a">
          <img
            class="img-a"
            src="http://sc.adminbuy.cn/uploads/allimg/201213/1-2012131HR40-L.png"
          />中国上海浦东新区某某路
        </li>
        <li class="b">
          <img
            class="img-b"
            src="http://sc.adminbuy.cn/uploads/allimg/210326/1-2103261343070-L.png"
          />客服电话：400-000-000
        </li>
      </ul>
    </div>
    <div class="map-show">map</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.map-side {
  margin: 0 0;
}
.map-side li {
  padding-left: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  color: #666666;
  margin-top: 15px;
}
.map-side li.a .img-a {
  width: 25px;
  height: 25px;
}
.map-side li.b .img-b {
  width: 25px;
  height: 25px;
}
</style>