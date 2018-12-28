<template>
  <HelloWorld />
</template>

<script>

// 대부분의 내용은 Helloworld.vue에 담겨있다. Home.vue는 HelloWorld.vue를 감싸고 있을 뿐
// 왜?
import HelloWorld from '../components/HelloWorld'

export default {
  components: {
    HelloWorld
  }
}
</script>
