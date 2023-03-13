<template>
<div class="saleBanner">
    <h4>지금 결제하면 {{amount}}% 할인!!</h4>
    </div>
</template>
<script>
 export default {
    data(){
        return{
            amount:20,
        }
    },
 name :"discountSale",
 mounted() {  //라이프사이클 hooks
    setInterval(() => { //정해진 시간마다 세일 값 감소하는 코드작성!!!
      this.amount=this.amount-1;
      if(this.amount<0){this.amount=0}
    }, 1000);
  }
 }
</script>
<style>
.saleBanner{ background: #ddd; padding: 15px; color: yellowgreen;}
</style>