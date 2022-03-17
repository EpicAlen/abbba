<template>
  <div class="detailbox">
   <div class="detail-top">
     <div class="top-img">
       <img src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fangt1.jpg" alt="">
     </div>
      <div class="top-right">
       <h3 class="proTitle">上海市智慧园  两室一厅 一厨一卫 </h3>
       <div class="top-des">
          编号：312737
          <br>
          售价：225万
          <br>
          户型：2室 1厅 1卫
          <br>
          面积：70.0㎡
          <br>
          朝向：南
          <br>
          楼层：2层/18层
          <br>
          装修：简单装修
          <br>
          小区：甘露园南里一区（朝阳 甘露园）1995年
       </div>
       <button class="top-btn">点击咨询</button>
      </div>
   </div>
   <div class="detail-bottom">
      枝江，是王松华仕途的重要一站。担任枝江市委书记期间，王松华起早贪黑，展现出过人的能力。调查人员告诉记者，枝江市能位居湖北省“十强县”之列，王松华立下汗马功劳。以江汉大道的修建为例，当年修建的时候，规划比较保守，唯有王松华力排众议，决定拓宽车道，引来非议一片。然而，几年过去，枝江经济社会快速发展，再回看这条路，人们都认为王松华有眼光，更有甚者，认为该路应该再修宽一些。
      <br>
      枝江成就了王松华，正是凭着在枝江任职时期的政绩，王松华被提拔为副厅级干部。但某种程度上说，又是枝江“毁了”王松华，也正是在枝江时期，王松华性格中的负面因素被不断放大，长时间的唯我独尊，让他养成了独断专行、骄傲跋扈、自以为是的作风，这为他日后的严重违纪埋下了伏笔。
      <br>
      2006年，王松华迎来了人生中的十字路口。当时，正值市县换届，踌躇满志的他满心以为能“更进一步”，不料却与宜昌市委常委的职务失之交臂。
      <br>
      这样的挫折，本是一个契机。如果泰然处之，反躬自省，人生未尝不能有所精进。然而，王松华无法接受这样的结果，他认为组织不公，怨天尤人。即便是2007年初，组织提拔其为宜昌市经济技术开发区管委会主任（副厅级），他依然精神萎靡，公开宣称“不想来这里”。
      而在这之后，尽管王松华多方“运作”，但又与两次“进步”机会擦肩而过。连续三次受挫，对他打击严重，让他心理彻底失衡，从此一蹶不振。
      <br>
      “我当时像疯了一样。”王松华这样形容自己当时的状态。有一次，宜昌市某市领导到开发区视察工作，本应出面接待的他坚决不去，并愤愤不平地说：“我去陪他干嘛？！他的位子本来应该是我的！！”
      <div>
        <img src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang1.jpg" alt="">
        <img src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang2.jpg" alt="">
        <img src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang3.jpg" alt="">
        <img src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang4.jpg" alt="">
        <img src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang5.jpg" alt="">
        <img src="http://demo.mxyhn.xyz:8020/cssthemes6/12.20ZF27/images/fang6.jpg" alt="">
      </div>
   </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dialogVisible:true,
    }
  },
  methods:{
    navto(){
      this.$router.push({'path':'/diager'})
    }
  }

}
</script>
<style lang="scss" scoped>
  .detailbox{
    width:1000px;
    margin: 0 auto;
    .detail-top{
      display: flex;
      flex-wrap: nowrap;
      
      .top-img{ 
        width: 420px;
        height: 320px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        margin: 30px 0;
        margin-right: 40px;
        img{
          width: 420px;
          height: 320px;
        }
      }
      .top-des{
        line-height: 25px;
        padding: 8px 0;
        font-size: 14px;
      }
      .proTitle{
        font-size: 24px;
        line-height: 40px;
        font-weight: 400;
        padding: 4px 0;
        border-bottom: #ccc 1px dotted;
      }
      .top-right{
        width:535px;
        margin: 30px 0;
      }
      .top-btn{
        width: 185px;
        height: 50px;
        background: chocolate;
        color: #fff;
        line-height: 50px;
        border-radius: 4px;
        font-size: 18px;
        border:none;
      }

    }
    .detail-bottom{
      padding: 19px;
      border:#F1F1F1  1px solid;
      line-height: 25px;
      font-size: 14px;
    }
  }
</style>
