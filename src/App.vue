<script setup lang="ts">
import LoginView from "./views/LoginView.vue";
import { ref, computed, onMounted } from "vue";
import MainView from "./views/MainView.vue";
import { useLoginStore } from "./store/login";
const loginStore = useLoginStore();

onMounted(() => {
  loginStore.loadData();
});
</script>

<template>
  <!-- <LoginView v-if="!loginStore.isLogin" /> -->
  <MainView/>
</template>

<!-- <MainView
    v-if="loginStore.isLogin"
    @logout="loginStore.logout"
    :loginName="loginStore.loginName"
  /> -->

<style scoped></style>
