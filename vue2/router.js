import { createWebHistory, createRouter } from "vue-router";
import listKjh from './components/list.vue';
import homeKjh from './components/homeKjh.vue';
import detail from './components/detailKjh.vue';
import commentKjh from './components/commentKjh.vue'

const routes = [
  {
    path: "/list", //접속경로. 작명
    component: listKjh,
  },
  {
    path: "/home",
    component: homeKjh,
  },
  {
    // path: "/detail/:id(\\d+)", url주소에 숫자만 입력받아야 하는경우
    path: "/detail/:id",
    component: detail,
    children:[
        // {path:'disneyLand', component : DISNEYLAND},
        {path:'comment', component : commentKjh}
    ]
  },
  { 
    // 아무문자나 입력한경우 홈으로 전송하거나 404페이지 출력
    path:'/:anything(.*)',component : homeKjh,
    /* 로그인해야 페이지 넘어가는 코드
    beforeEnter: () => {
        if(로그인했어요==false){
            return '/login'
        }
      } */
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,  //라우터변수로 만들어서 생성하고 쓰세요!!
});

export default router;  