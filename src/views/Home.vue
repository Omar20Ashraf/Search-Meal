<template>
    <div class="flex flex-col p-8">

        <div class="flex justify-center gap-2 mt-2">
            <router-Link 
                :to="{name:'byLetter',params:{letter}}" 
                v-for="letter in letters" 
                :key="letter">
                    {{ letter }}
            </router-Link>
        </div>
    </div>
</template>

<script setup>

    import { onMounted } from 'vue';
    import axiosClient from '../axiosClient.js';

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    onMounted(async() => {
        const response = await axiosClient.get('/list.php?i=list');
    });

</script>
