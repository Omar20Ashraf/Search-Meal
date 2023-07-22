<template>
    <div class="flex flex-col p-8">

    </div>
</template>

<script setup>

    import { onMounted } from 'vue';
    import axiosClient from '../axiosClient.js';

    onMounted(async() => {
        const response = await axiosClient.get('/list.php?i=list');
    });

</script>
