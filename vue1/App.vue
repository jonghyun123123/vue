<template>
  <section>
    <!-- <div v-if="1==2">
      안녕하세요!!
    </div>
    <div v-else-if="1==3">
      정말로 ?!
    </div>
    <div v-else>
      say Hello!!
    </div> -->
    <!-- 모달창만들기 -->
    <!-- 1. 데이터바인딩====> modal.vue 2.props를 전송 -->
    <!-- <div class="start" :class="{end :모달창열렸니}">
      <Modal :디즈니랜드="디즈니랜드" :제목누른거="제목누른거" :모달창열렸니="모달창열렸니" @closeModal='모달창열렸니=false;'></Modal>
    </div> -->

    <transition name="fade">
      <Modal :디즈니랜드="디즈니랜드" :제목누른거="제목누른거" :모달창열렸니="모달창열렸니" @closeModal='모달창열렸니=false;'></Modal>
    </transition>

    <nav class="menu">
      <!-- <a v-for="메뉴바 in 메뉴들" :key="메뉴바">{{메뉴바}}</a> -->
      <a v-for="(메뉴바,i) in 메뉴들" :key="i">{{메뉴들[i]}}</a>
      <!-- <a href="#">HOME</a>
      <a href="#">SHOP</a>
      <a href="#">GOODS</a> -->
    </nav>
    <!-- 할인배너만들기 -->
    <Discount v-if="showDiscount==true"></Discount>
    <!-- <Discount :데이터이름="[1,2,3]"/>
    <Discount :데이터이름="{age:100}"/>
    <Discount :데이터이름="100"/>
    <Discount :데이터이름="안녕부모님"/> -->
    <!-- 오브젝트:{name:'KIM', age:20}
    <Discount :데이터이름="오브젝트.name":데이터이름="오브젝트.age/> -->
    <!-- <button class="button button1" @click='추천횟수[0]++'>추천버튼</button>
      <span> 추천횟수 :{{추천횟수[0]}}</span> -->
    <!-- <div v-for="(내용,i) in 디즈니랜드" :key="i">
      <img :src='디즈니랜드[i].image' alt="#">
      <h4 @click='모달창열렸니=true; 제목누른거=i' :style="스타일">{{디즈니랜드[i].title}}</h4>
      <p :style="스타일">{{디즈니랜드[i].price }}</p>
    </div> -->
    <button @click="priceSort()">가격순정렬</button>
    <button @click="sortBack()">되돌리기</button>
      <DisneyPhoto @openModal="모달창열렸니=true; 제목누른거= $event" :디즈니랜드="디즈니랜드[i]" v-for="(a,i) in 디즈니랜드" :key="i"></DisneyPhoto>
  </section>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import disneyland from './assets/product.js';
import Discount from './components/discount.vue';
import Modal from './components/modal.vue';
import DisneyPhoto from './components/disneyPhoto.vue';
export default {
  name: 'App',
  data(){
    return{ //data-binding
      amount: 20,
      제목누른거 :0,
      디즈니랜드:disneyland, //import한 임시변수 이름(왼쪽)
      추천횟수:[100,50,10],
      price1 :5000,
      스타일: 'color:orange',
      products:['그랜드 엠포리엄','타운 센터 패션','토이 스테이션'],
      메뉴들:['HOME','SHOP','GOODS'],
      모달창열렸니:false,   //flag
      디즈니오리지널:[...disneyland], //개별 사본들 저장
      showDiscount:true //디스카운트플래그
    }
  },
  mounted() {
    setTimeout(() => {
      this.showDiscount=false
    }, 20000);
  },
  components: {
    //HelloWorld
    Discount:Discount,
    Modal:Modal,
    DisneyPhoto:DisneyPhoto,
  },
  methods: {
    increase(){
      this.추천횟수 +=1; //데이터를 가져다가 쓰고 싶으면 반드시 this.데이터이름
    },
    priceSort(){ //가격순으로 정렬
      this.디즈니랜드.sort(function(a,b){
        return a.price-b.price;
      })
    },
    sortBack(){//스프레드오퍼레이터 사용
      this.디즈니랜드=[...this.디즈니오리지널]; //독립적인 사본 만들기
      }
    }
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
/* 모달창트랜지션 */
.fade-enter-from{transform: translateY(-1000px);} /*애니메이션 동작 전 단계 */
.fade-enter-active{transition: all 1s;} /*애니메이션 동작 중 */
.fade-enter-to{transform: translateY(0px);} /*애니메이션 동작 후 */

/* 퇴장애니메이션 */
.fade-leave-from{opacity: 1;}
.fade-leave-active{transition: all 1s;}
.fade-leave-to{opacity: 0;}

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
h4{cursor: pointer;}
.start{opacity: 0; transition: all 1s;}
.end{opacity: 1;}
</style>