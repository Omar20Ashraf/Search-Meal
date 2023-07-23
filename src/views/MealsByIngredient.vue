<template>

    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
    import Meals from '../components/Meals.vue'

    import { onMounted,computed } from "vue";
    import { useRoute } from "vue-router";
    import { useStore } from 'vuex';

    const store = useStore();
    const route = useRoute();
    
    const ingredient = computed(() => store.getters.getIngredient);

    const meals = computed(() => store.getters.mealsByIngredient);

    onMounted(() => {
        store.dispatch('searchMealsByIngredient', route.params.ingredient)
    })

</script>
