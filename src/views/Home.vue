<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
    import Meals from '../components/Meals.vue'

    import { onMounted,computed } from "vue";
    import { useStore } from 'vuex';
    
    const store = useStore();

    const meals = computed(() => store.getters.randomMeals);

    onMounted(() => {
        store.dispatch('getRandomMeals')
    })
</script>
