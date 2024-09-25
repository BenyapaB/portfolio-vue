<script setup lang="ts">
import PortList from '../views/PortList.vue';
import { usePortlinkStore } from "@/store/portlink";

const portLinkStore = usePortlinkStore();


</script>

<template>
    <v-container id="frame-detail">
        <PortList />
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
</style>