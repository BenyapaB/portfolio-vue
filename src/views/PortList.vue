<script setup lang="ts">
import { usePortlinkStore } from "@/store/portlink";
import type Portlink from "@/types/Portlink";
// import type portlink from "@/types/Portlink";

const portLinkStore = usePortlinkStore();
const showPortcard = (linklocation: Portlink) => {
    portLinkStore.showPortcard(linklocation);
}

</script>

<template>
    <v-container>
        <v-card id="portfolio-card" class="mx-auto" max-width="400">

            <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
                Number 10
            </v-card-subtitle>

            <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange" text="Share"></v-btn>

                <v-btn color="orange" text="Explore"></v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>


<style scoped>
#portfolio-card {
    background-color: #ecebfc;
    max-width: 100%;
    height: 280px;
    border-radius: 18px;
}
</style>