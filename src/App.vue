<template>


  <!-- 
    1. 템플릿 v-로 시작하는 태그는 vuetify에서 제공하는 커스텀컴포넌트 
  -->
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>우리집</span>
        <span class="font-weight-light">냉장고</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <!--
      2. 주소가 변경될 경우 <v-content>의 내용만 변경되므로 모든페이지에서 툴바 사용가능 
      3. router-view에 들어갈 내용은 해당 주소에 매칭될 컴포넌트 (router.js 참조)
    -->

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
