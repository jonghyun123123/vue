<template>
  <section>
    <div>
        <!-- 페이지이동경로를 프로그래밍스럽게 작성 -->
        <h5 @click="$router.push('./detail/0')">{{블로그글[0].title}}</h5>
        <p>{{블로그글[0].date}}</p>
    </div>
    <div>
        <h5>{{블로그글[1].title}}</h5>
        <p>{{블로그글[1].date}}</p>
    </div>
    <div>
        <h5>{{블로그글[2].title}}</h5>
        <p>{{블로그글[2].date}}</p>
    </div>
  </section>
</template>

<script>
export default {
    name:'blogList',
    props:{
        블로그글:Array
    }
}
</script>

<style>

</style>