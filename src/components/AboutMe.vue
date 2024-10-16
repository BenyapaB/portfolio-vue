<script setup lang="ts">
// defineProps<{
//     msg: string
// }>()
</script>

<template>
  <v-container id="frame-detail">
    <v-card id="about-card-detail" flat>
      <v-container class="mt-4">
        <p id="aboutme-text-detail">
          My name is Namfon. I graduated from the Faculty of Informatics, majoring in Computer
          Science, Burapha University. I have a strong passion for programming whenever I have free
          time, I am eager to study and learn new things for self-improvement. During my university
          years, I gained experience and knowledge from various coursework, such as Object-Oriented
          Programming (OOP), Object-Oriented Analysis and Design (OOAD), Data Structures and
          Algorithms and more. You can see more when you download my resume.
        </p>
      </v-container>
    </v-card>
    <div id="what-im-doing" class="mt-4">What I’m doing</div>
    <div id="divider"></div>
    <v-card id="doing-card-detail" flat class="mt-5">
      <v-container class="mt-4">
        <v-row id="what-im-doing-row">
          <v-col cols="5" id="developer-card">
            <v-container id="what-im-doing-container">
              <v-img
                src="src/assets/imgs/developer-icon.png"
                alt="developer icon"
                width="auto"
              ></v-img>
              <p id="developer-title">Developer</p>
              <p id="developer-text">
                This website was developed using Vue.js through learning from classroom and
                self-study, to meet the required specifications. I am enthusiastic about learning
                new things and always eager to expand my knowledge.
              </p>
            </v-container>
          </v-col>
          <v-col cols="5" id="design-card">
            <v-container id="what-im-doing-container">
              <v-img src="src/assets/imgs/design-icon.png" alt="design icon" width="auto"></v-img>
              <p id="design-title">Design</p>
              <p id="design-text">
                For this website, the design was created using Figma to provide a clear overview of
                programming.
              </p>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #ecebfc;
  max-width: 100%;
  height: 280px;
  border-radius: 18px;
  line-height: 42px;
}
#aboutme-text-detail {
  text-indent: 75px;
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
  background-color: transparent;
  max-width: 100%;
  height: 380px;
  border-radius: 18px;
}
#what-im-doing-row {
  justify-content: space-between;
}

#developer-card,
#design-card {
  background-color: #ecebfc;
  width: 562.56px;
  height: 357px;
  border-radius: 18px;
}
#what-im-doing-container {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 7px;
}

#developer-title,
#design-title {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
}
#developer-text,
#design-text{
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
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
