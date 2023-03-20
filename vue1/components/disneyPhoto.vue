<template>
    <div>
        <img :src="디즈니랜드.image" alt="#">
        <!-- 커스텀이벤트 + 해당 제목 컨텐츠 모달창 열기 -->
        <!-- <h4 @click="$emit('openModal',디즈니랜드.id)">{{디즈니랜드.title}}</h4> -->
        <h4 @click="openModal()">{{디즈니랜드.title}}</h4>
        <p>{{디즈니랜드.price}}</p>
    </div>
</template>

<script>
export default {
    props:{
        디즈니랜드:Object
    },
    methods: {
        //vue에서 변수 함수 쓸 때 반드시 this키워드 활용
        openModal(){//is not defined ===> 정의가 안 되어 있음, this 붙이기
            this.$emit('openModal',this.디즈니랜드.id);
        }
    }
}
</script>

<style>

</style>