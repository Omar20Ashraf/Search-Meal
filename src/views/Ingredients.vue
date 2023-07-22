<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="px-8">

    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for Ingredients"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <router-link 
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient" 
        :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
        class="block bg-white rounded p-3 mb-3 shadow">
          {{ ingredient.strIngredient }}
        </router-link>
    </div>
  </div>
</template>

<script setup>
  import { onMounted,computed,ref } from "vue";
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const keyword = ref("");

  const ingredients = computed(() => store.getters.ingredients);

  const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i) =>
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
  });

  onMounted(() => {
    store.dispatch("getIngredients");
  });

</script>
