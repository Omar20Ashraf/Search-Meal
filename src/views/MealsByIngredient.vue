<template>
    <Meals :meals="meals" />
</template>

<script setup>
    import Meals from '../components/Meals.vue'

    import { onMounted,computed } from "vue";
    import { useRoute } from "vue-router";
    import { useStore } from 'vuex';

    const store = useStore();
    const route = useRoute();
    
    const meals = computed(() => store.getters.mealsByIngredient);

    onMounted(() => {
        store.dispatch('searchMealsByIngredient', route.params.ingredient)
    })

</script>
