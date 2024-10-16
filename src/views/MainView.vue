<script setup lang="ts">
import { mdiDownload } from '@mdi/js'
import { ref } from 'vue'
import AboutMe from '@/components/AboutMe.vue';
import ResumeView from './ResumeView.vue';

// const cards = ['Today', 'Yesterday']
// const links = [
//   ['mdi-inbox-arrow-down', 'Inbox'],
//   ['mdi-send', 'Send'],
//   ['mdi-delete', 'Trash'],
//   ['mdi-alert-octagon', 'Spam']
// ]

// const drawer = ref(null)
function downloadPdfResume() {
  const pdfresume ='src/assets/Benyapa-resume-transcript.pdf'
  const dlresume = document.createElement('a')
  dlresume.href = pdfresume;
  dlresume.setAttribute('download', 'Benyapa-resume-transcript.pdf');
  dlresume.download = 'Benyapa-resume-transcript.pdf'
  document.body.appendChild(dlresume);
  dlresume.click()
  document.body.removeChild(dlresume);
}
</script>
<template>
  <v-app>
    <v-main class="maincontent">
      <v-container fluid>
        <v-row>
          <v-col id="side-profile" class="flex-grow-0">
            <v-card class="mx-auto mt-2" flat height="100%" max-width="934px" id="profile-card">
              <v-container>
                <v-row>
                  <v-col cols="12" id="imgprofile" class="mt-10">
                    <v-img
                      src="src/assets/imgs/img-profile.png"
                      width="170px"
                      height="170px"
                    ></v-img>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" id="profile-name" class="mt-0">
                    <p id="text-name">Benyapa Bunwisoot</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" id="profile-position">
                    <p id="text-position">Web Developer</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" id="profile-divider">
                    <div id="divider"></div>
                  </v-col>
                </v-row>
                <v-container id="profile-describe">
                  <v-row>
                    <v-col cols="3" id="phone-icon">
                      <v-img
                        src="src/assets/imgs/phone-icon.png"
                        width="auto"
                        height="auto"
                      ></v-img>
                    </v-col>
                    <v-col cols="9" id="phone-detail">
                      <p id="text-phone">0886449076</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3" id="email-icon">
                      <v-img
                        src="src/assets/imgs/email-icon.png"
                        width="auto"
                        height="auto"
                      ></v-img>
                    </v-col>
                    <v-col cols="9" id="email-detail">
                      <p id="text-email">fon.benyapa@gmail.com</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3" id="dob-icon">
                      <v-img src="src/assets/imgs/dob-icon.png" width="auto" height="auto"></v-img>
                    </v-col>
                    <v-col cols="9" id="dob-detail">
                      <p id="text-dob">21 August 2001</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3" id="location-icon">
                      <v-img
                        src="src/assets/imgs/location-icon.png"
                        width="auto"
                        height="auto"
                      ></v-img>
                    </v-col>
                    <v-col cols="9" id="location-detail">
                      <p id="text-location">Nonthaburi, Thailand 11110</p>
                    </v-col>
                  </v-row>
                </v-container>
                <v-row>
                  <v-col cols="12" class="mt-3" id="profile-divider">
                    <v-btn id="btn-resume" :append-icon="mdiDownload" @click="downloadPdfResume"> Resume </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="mt-3" id="profile-divider">
                    <div id="divider"></div>
                  </v-col>
                </v-row>
                <v-row id="connection-icon">
                  <!-- <v-col cols="3" class="mt-0" id="fb-icon">
                    <v-img
                      src="src/assets/imgs/fb-icon.png"
                      width="auto"
                      height="auto"
                      class="cursor-pointer"
                    ></v-img>
                  </v-col> -->
                  <v-col cols="3" class="mt-0" id="github-icon">
                    <v-img
                      src="src/assets/imgs/github-icon.png"
                      href="https://github.com/BenyapaB"
                      title="Github link"
                      width="auto"
                      height="auto"
                      class="cursor-pointer"
                    ></v-img>
                  </v-col>
                  <!-- <v-col cols="3" class="mt-0" id="ig-icon">
                    <v-img
                      src="src/assets/imgs/ig-icon.png"
                      width="auto"
                      height="auto"
                      class="cursor-pointer"
                    ></v-img>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col>
            <v-container>
              <v-row>
                <v-col cols="4" id="rightside-port-detail" class="flex-grow-1">
                  <!-- <div id="head-title">ABOUT</div> -->
                </v-col>
                <v-col cols="8">
                  <v-tabs align-tabs="end" id="tab-menu">
                    <v-tab :value="1" id="about-menu"
                    title="About Me"
                    to="/about-me">ABOUT</v-tab>
                    <v-tab :value="2" id="about-resume"
                    title="Resume"
                    to="/my-resume">RESUME</v-tab>
                    <v-tab :value="3" id="about-portfolio"
                    title="Portfolio"
                    to="/my-portfolio">PORTFOLIO</v-tab>
                    <!-- <v-tab :value="4" id="about-contact"
                    title="Contact"
                    to="/contact-me">CONTACT</v-tab> -->
                  </v-tabs>
                </v-col>
              </v-row>
                <router-view class="mt-4"></router-view>
              <!-- <v-row> -->
                <!-- <AboutMe/> -->
                 <!-- <v-main> -->
                 <!-- </v-main> -->
              <!-- </v-row> -->
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="drawer" id="side-profile">
      <v-sheet class="pa-4" color="grey-lighten-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </v-app>
</template>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* overflow-y: hidden; */
}
.maincontent {
  background-image: linear-gradient(to right, #ecebfc, #6038c9);
  position: sticky;
}

#profile-card {
  display: grid;
  align-content: space-around;
  border-radius: 50px;
  background-color: #c1bcf6;
}

#imgprofile,
#profile-name,
#profile-position,
#profile-divider {
  display: grid;
  justify-content: center;
  padding-top: 8px;
}
#text-name {
  font-weight: 800;
  font-size: 24px;
  letter-spacing: 1px;
  height: 20px;
}
#phone-detail,
#email-detail,
#dob-detail,
#location-detail {
  padding: 0px;
}
#text-position,
#text-phone,
#text-email,
#text-dob,
#text-location,
#btn-resume {
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.5px;
}
#divider {
  border-top: 3px solid #333333;
  width: 340.71px;
}

#profile-describe {
  /* margin-left: 10px;
  padding-right: 20px; */
  /* margin-left: 10px;
  padding: 0px; */
}
#profile-describe > .v-row {
  display: flex;
  align-items: center;
}

#btn-resume {
  background-color: #ecebfc;
  border-radius: 14px;
  display: flex;
  height: 42.98px;
}

#connection-icon {
  display: flex;
  justify-content: center;
}
#fb-icon:hover,
#github-icon:hover,
#ig-icon:hover {
  scale: 1.1;
  transition: 0.3s;
}

/* rightside-detail */
#head-title {
  font-size: 36px;
  color: #2f1c6d;
  font-weight: 800;
  letter-spacing: 1px;
}

#about-menu,
#about-resume,
#about-portfolio,
#about-contact {
  font-size: 22px;
  color: #2f1c6d;
  font-weight: 700;
}


/* #frame-detail {
  margin: 0;
  max-width: 100%;
  height: 780px;
  background-color: #c1bcf6;
  border-radius: 24px;
  box-shadow: 0 4px 15px rgb(51, 51, 51, 0.25);
} */

/*component-about */
/* #about-card-detail {
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

#doing-card-detail{
  background-color: #ecebfc;
  max-width: 100%;
  height: 280px;
  border-radius: 18px;
} */
</style>
