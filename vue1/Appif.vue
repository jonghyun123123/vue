<template>
  <section>
    <!-- 모달창만들기 -->
    <div class="black-bg" v-if="모달창열렸니==true">
      <div class="white-bg">
        <h4>{{ 디즈니랜드[0].title }}</h4>
        <p>상세 페이지 내용</p>
      </div>
    </div>
    <nav class="menu">
      <!-- <a v-for="메뉴바 in 메뉴들" :key="메뉴바">{{메뉴바}}</a> -->
      <a v-for="(메뉴바,i) in 메뉴들" :key="i">{{메뉴들[i]}}</a>
      <!-- <a href="#">HOME</a>
      <a href="#">SHOP</a>
      <a href="#">GOODS</a> -->
    </nav>
    <div v-for="(내용,i) in 디즈니랜드" :key="i">
      <img :src='디즈니랜드[i].image' alt="#">
      <h4 :style="스타일">{{디즈니랜드[i].title}}</h4>
      <p :style="스타일">{{디즈니랜드[i].price }}</p>
      <!-- <button class="button button1" @click='추천횟수[0]++'>추천버튼</button>
      <span> 추천횟수 :{{추천횟수[0]}}</span> -->
    </div>
  </section>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import disneyland from './assets/product.js';
export default {
  name: 'App',
  data(){
    return{ //data-binding
      디즈니랜드:disneyland, //import한 임시변수 이름(왼쪽)
      추천횟수:[100,50,10],
      price1 :5000,
      스타일: 'color:orange',
      products:['그랜드 엠포리엄','타운 센터 패션','토이 스테이션'],
      메뉴들:['HOME','SHOP','GOODS'],
      모달창열렸니:true   //flag
    }

  },
  components: {
    //HelloWorld
  },
  methods: {
    increase(){
      this.추천횟수 +=1; //데이터를 가져다가 쓰고 싶으면 반드시 this.데이터이름
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
img{width: 160px;height:160px;}
nav.menu{
  padding: 15px;
  background-color: paleturquoise;
  border-radius: 5px;
}
nav.menu a{
  text-decoration: none;
  padding: 10px;
  color: palevioletred;
  font-weight: bold;
}
.button1{background: #fff; color: green; cursor: pointer; width: 130px; height: 50px;}
.button1:hover{background: green; color: #fff;}
/* 모달창 css */
body{margin: 0;}
div{box-sizing: border-box;}
.black-bg{width: 100%;height: 100%;
background-color: rgba(0,0,0,0.3);
position: fixed;padding: 20px;}
.white-bg{width: 100%;background-color: white;
border-radius: 8px;
padding: 20px;}
</style>
