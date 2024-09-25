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
            <v-col cols="3" v-for="link of portLinkStore.links" :key="link.id">
                <v-card id="portfolio-card" class="mx-auto" max-width="400" flat>
                    <v-img class="align-end text-white" height="300"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                        <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
                    </v-img>

                    <v-card-title class="pt-4">
                        {{ link.linktitle }}
                    </v-card-title>

                    <v-card-text>
                        <div>{{link.description}}</div>

                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn v-bind:href="link.websiteurl" target="_blank">view website</v-btn>
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
    height: auto;
    border-radius: 18px;
}
</style>