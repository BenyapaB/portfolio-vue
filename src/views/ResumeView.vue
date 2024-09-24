<script setup lang="ts"></script>

<template>
    <v-container id="frame-detail">
        <v-row id="education-head" class="mb-2">
            <!-- icon -->
            <v-col cols="1" id="col-icon">
                <v-img src="src/assets/imgs/graduationicon.png" width="auto" height="auto"></v-img>
            </v-col>
            <!-- title -->
            <v-col cols="1">
                <div id="education-title">EDUCATION</div>
            </v-col>
        </v-row>
        <div id="divider"></div>
        <!-- education-card -->
        <v-card id="education-card" class="mt-8" flat>
            <v-container id="education-detail-container">
                <v-row>
                    <v-col cols="1" id="education-detail" style="max-width: 5%;">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="2" id="education-year-detail">2017 - 2020</v-col>
                    <v-col cols="5" id="education-major-detail">Science and Mathematics Program </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="education-detail" style="max-width: 5%;">
                        <!-- <div class="circle"></div> -->
                    </v-col>
                    <v-col cols="2" id="education-detail"></v-col>
                    <v-col cols="5" id="education-detail">Debsirin Nonthaburi School</v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="education-detail" style="max-width: 5%;">
                        <!-- <div class="circle"></div> -->
                    </v-col>
                    <v-col cols="2" id="education-detail"></v-col>
                    <v-col cols="5" id="education-detail">Nonthaburi, Thailand</v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="education-detail" style="max-width: 5%;">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="2" id="education-year-detail">2020 - 2024</v-col>
                    <v-col cols="5" id="education-major-detail">Bachelor of Science (B.Sc.)| Faculty of Informatics,
                        Major in Computer Science</v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="education-detail" style="max-width: 5%;">
                        <!-- <div class="circle"></div> -->
                    </v-col>
                    <v-col cols="2" id="education-detail"></v-col>
                    <v-col cols="5" id="education-detail">Burapha University</v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="education-detail" style="max-width: 5%;">
                        <!-- <div class="circle"></div> -->
                    </v-col>
                    <v-col cols="2" id="education-detail"></v-col>
                    <v-col cols="5" id="education-detail">Chonburi, Thailand</v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="education-detail" style="max-width: 5%;">
                        <!-- <div class="circle"></div> -->
                    </v-col>
                    <v-col cols="2" id="education-detail"></v-col>
                    <v-col cols="5" id="education-detail">GPA 3.41</v-col>
                </v-row>
            </v-container>
        </v-card>
        <!-- SKILLS -->
        <v-row id="skill-head" class="mb-2 mt-6">
            <v-col cols="1" id="col-icon">
                <v-img src="src/assets/imgs/programming-icon.png" width="auto" height="auto"></v-img>
            </v-col>
            <v-col cols="9">
                <div id="skills-title">SKILLS</div>
            </v-col>
        </v-row>

        <div id="divider"></div>
        <!-- skill-card -->
        <v-card id="education-card" class="mt-8" flat>
            <v-container id="education-detail-container">
                <v-row>
                    <v-col cols="2" id="lan-detail">
                        Language
                    </v-col>
                    <v-col cols="9" id="skill-detail">HTML, CSS, JavaScript, TypeScript and PHP</v-col>
                </v-row>
                <v-row>
                    <v-col cols="2" id="dbms-detail">
                        DBMS
                    </v-col>
                    <v-col cols="9" id="skill-detail">MySQL</v-col>
                </v-row>
                <v-row>
                    <v-col cols="2" id="framework-detail">
                        Framework & Other
                    </v-col>
                    <v-col cols="9" id="skill-detail">Node.js, Vue.js, Vuetify, Bootstrap, Material Design Icons, Gitlab, Github and
                        jQuery</v-col>
                </v-row>

            </v-container>
        </v-card>
        <v-row id="experience-head" class="mb-2 mt-6">
            <v-col cols="1" id="col-icon">
                <v-img src="src/assets/imgs/experience-icon.png" width="auto" height="auto"></v-img>
            </v-col>
            <v-col cols="9">
                <div id="experience-title">EXPERIENCE</div>
            </v-col>
        </v-row>
        <div id="divider"></div>
        <v-card id="exp-card" class="mt-8" flat>
            <v-container id="exp-detail-container">
                <v-row id="exp-duty-title">Trainee Developer - Jeweal Prosoft Co.,LTD</v-row>
                <v-row>
                    <v-col cols="1" id="exp-detail">
                        <div class="exp-circle"></div>
                    </v-col>
                    <v-col cols="10" id="exp-duty-detail">Create landing page website for products presentation using
                        HTML5, CSS and JavaScript.</v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="exp-detail">
                        <div class="exp-circle"></div>
                    </v-col>
                    <v-col cols="10" id="exp-duty-detail">Create responsive website to facilitate users on devices other
                        than computers.</v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="exp-detail">
                        <div class="exp-circle"></div>
                    </v-col>
                    <v-col cols="10" id="exp-duty-detail">Create website template using HTML5, CSS,JavaScript and PHP,
                        using XAMPP for collecting data when user makes changes on the website through
                        phpMyAdmin.</v-col>
                </v-row>

            </v-container>
        </v-card>
        <v-card id="education-card" class="mt-8" flat>
            <v-container id="education-detail-container">
                <v-row id="exp-duty-title">Building Simple games for kids</v-row>
                <v-row>
                    <v-col cols="1" id="exp-detail">
                        <div class="exp-circle"></div>
                    </v-col>
                    <v-col cols="10" id="exp-duty-detail">Design three games suitable for children aged 3-5 years
                        (Matching Game, Calculator Game and Group game).</v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="exp-detail">
                        <div class="exp-circle"></div>
                    </v-col>
                    <v-col cols="10" id="exp-duty-detail">Design games flow by using Miro to understand how the game
                        works. </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1" id="exp-detail">
                        <div class="exp-circle"></div>
                    </v-col>
                    <v-col cols="10" id="exp-duty-detail">Create games for kids website using HTML5,CSS and
                        JavaScript.</v-col>
                </v-row>

            </v-container>
        </v-card>
    </v-container>
</template>

<style scoped>
#frame-detail {
    margin: 0;
    max-width: 100%;
    height: auto;
    background-color: #c1bcf6;
    border-radius: 24px;
    box-shadow: 0 4px 15px rgb(51, 51, 51, 0.25);
}

#education-card,
#exp-card {
    font-size: 20px;
    font-weight: 600;
    background-color: #ecebfc;
    max-width: 100%;
    height: auto;
    border-radius: 18px;
    letter-spacing: 1px;
}

#col-icon {
    max-width: 5%;
}

#education-title,
#skills-title,
#experience-title {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 0.3px;
}

#divider {
    border-top: 3px solid #333333;
    width: 340.71px;
}

#education-detail-container,
#exp-detail-container {
    line-height: 38px;
    margin-left: 14px;
    margin-top: 10px;
}

#education-detail,
#education-year-detail,
#exp-detail,
#skill-detail {
    padding: 0;
}

#education-year-detail,
#education-major-detail,
#exp-duty-title {
    font-weight: 800;
    letter-spacing: 1px;
    padding: 0;
}

#lan-detail,
#dbms-detail,
#framework-detail {
    font-weight: 800;
    letter-spacing: 1px;
    padding: 0;
    margin-right: 70px;
}

.circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #c1bcf6;

}

#exp-detail {
    display: flex;
    align-items: center;
    max-width: 4%;
    ;
}

.exp-circle {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #c1bcf6;
}

/* #doing-card-detail {
  background-color: #ecebfc;
  max-width: 100%;
  height: 380px;
  border-radius: 18px;
} */
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
