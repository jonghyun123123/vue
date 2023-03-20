<template>
    <div class="black-bg" v-if="모달창열렸니==true">
      <div class="white-bg">
        <h4>{{디즈니랜드[제목누른거].title}}</h4>
        <img :src='디즈니랜드[제목누른거].image' alt="#">
        <p>{{디즈니랜드[제목누른거].content}}</p>
        <p :style="스타일">{{디즈니랜드[제목누른거].price.toLocaleString()}}원</p>
        <!-- @input @click이랑 같은 거 -->
        <!-- <input @input='nnumber=$event.target.value'> -->
        <input v-model.number='nnumber'>
        <p>{{ nnumber }}개를 선택함 : {{(디즈니랜드[제목누른거].price * nnumber).toLocaleString()}}원</p>
        <!-- read only기능 -->
        <button @click="closeModal()">닫기</button>
      </div>
    </div>
</template>
<script>
export default {
 name:"Modal",
 data(){
  return{
    nnumber:0
  }
 },
 watch:{
  nnumber(a){ //프라이스넘버데이터가 바뀔 때 마다
    //if()만약에 10개 이상 구매하면 11개 이상 예약 못합니다라는 문구를 출력
    if(a>=10){alert('11개 이상 구매 못합니다.')}
    //문자방지코드 문자입력시==> 문자입력하지마세요
    //이후에 값을 1로 되돌림
    if(isNaN(a)){alert('문자입력하지마세요!'); this.nnumber=1;}
  }
},
 props: {
  디즈니랜드:Array, //부모님이 가지고 있는 데이터의 타입 (데이터이름:데이터자료형) 표기
  제목누른거:Number,
  모달창열렸니:Boolean,
 },
 beforeUpdate() {  //beforeUpdate는 입력되기전에 액션, updated는 입력후 액션
      if(this.nnumber==1){alert('3개 이상 사세요')}
      if(this.nnumber==2){alert('3개 이상 사세요')}
    },
 methods: {
  closeModal(){
    this.$emit('closeModal');
  }
 }
}
</script>
<style>
</style>