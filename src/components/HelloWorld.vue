<template>
  <div>
    <!-- 5번의 데이터가 여기로 -->
    {{ message }}
    <!-- 6번의 메서드가 여기로 -->
    <!-- 바닐라 자바스크립트는 id || class로 DOM el을 찾고 addEventListener를 사용했지만 여기서는 간단함 -->
    <v-btn @click="setMessage()">button</v-btn>

    <!-- 14. routebutton -->
    <v-btn to="list">gotoList</v-btn>
  </div>
</template>

<script>
// 5. {{}} 대괄호 2개 사이에, data함수가 return하는 객체의 키 중 하나를 쓰면 그 값을 template에 바인딩한다.
export default {
  data () {
    return {
      message: 'Hello world !'
    }
  },
  //6. methods를 통해 데이터를 제어한다.
  methods: {
    setMessage () {
      this.message = 'Reactive Vue !'
    }
  }
}
</script>
