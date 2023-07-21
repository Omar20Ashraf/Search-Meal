<template>
    <div>
        <h1>My Meals</h1>
        <pre>{{ meals }}</pre>
    </div>
</template>

<script setup>

import { computed } from 'vue'
import store from '../store'

const meals = computed(() => store.getters.meals)

</script>
