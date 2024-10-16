<script setup lang="ts">
import { usePortlinkStore } from "@/store/portlink";
import type Portlink from "@/types/Portlink";
// import type portlink from "@/types/Portlink";

const portLinkStore = usePortlinkStore();
// const showPortcard = (linklocation: Portlink) => {
//     portLinkStore.showPortcard(linklocation);
// }

</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="4" v-for="link of portLinkStore.links" :key="link.id">
                <v-card id="portfolio-card" class="mx-auto" max-width="600" flat>
                    <v-img class="align-end text-white" height="300"
                        v-bind:src="link.image" cover>
                        <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
                    </v-img>

                    <v-card-title id="link-title-text" class="pt-4">
                        {{ link.linktitle }}
                    </v-card-title>

                    <v-card-text id="link-description-text">
                        <div>{{link.description}}</div>

                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn :disabled="link.websiteurl === ''" v-bind:href="link.websiteurl" target="_blank">view website</v-btn>
                        <v-btn v-bind:href="link.githuburl" target="_blank">open github</v-btn>
                    </v-card-actions>
                    <!-- <div>{{ link.url }}</div> -->
                    <!-- <v-card-actions class="justify-center">
                        <v-btn color="orange" text="Share"></v-btn>

                        <v-btn color="orange" text="Explore"></v-btn>
                    </v-card-actions> -->
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>


<style scoped>
#portfolio-card {
    background-color: #ecebfc;
    /* max-width: 100%; */
    height: 100%;
    border-radius: 18px;
    display: grid;
}
#link-title-text {
    font-size: 20px;
    font-weight: 600;
}
#link-description-text {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
}
</style>