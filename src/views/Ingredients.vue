<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <router-link 
        v-for="ingredient of ingredients"
        :key="ingredient.idIngredient" 
        :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
        class="block bg-white rounded p-3 mb-3 shadow">
          {{ ingredient.strIngredient }}
        </router-link>
    </div>
  </div>
</template>

<script setup>
  import { onMounted,computed } from "vue";
  import { useStore } from 'vuex';
  
  const store = useStore();

  const ingredients = computed(() => store.getters.ingredients);

  onMounted(() => {
    store.dispatch("getIngredients");
  });

</script>
