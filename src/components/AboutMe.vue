<script setup lang="ts">
// defineProps<{
//     msg: string
// }>()
</script>

<template>
    <v-container id="frame-detail">
    <v-card id="about-card-detail" flat></v-card>
    <div id="what-im-doing" class="mt-4">What I’m doing</div>
    <div id="divider"></div>
    <v-card id="doing-card-detail" flat class="mt-5"></v-card>
    </v-container>
</template>

<style scoped>
#frame-detail {
  margin: 0;
  max-width: 100%;
  height: 780px;
  background-color: #c1bcf6;
  border-radius: 24px;
  box-shadow: 0 4px 15px rgb(51, 51, 51, 0.25);
}
#about-card-detail {
    background-color: #ecebfc;
    max-width: 100%;
    height: 280px;
    border-radius: 18px;
}

#what-im-doing {
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 0.3px;
}
#divider {
  border-top: 3px solid #333333;
  width: 340.71px;
}

#doing-card-detail {
    background-color: #ecebfc;
    max-width: 100%;
    height: 380px;
    border-radius: 18px;
}
</style>

<!-- <style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} -->
<!-- </style> -->
