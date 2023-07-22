<template>
  <div cLass="bg-white shadow rounded-xl">

    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" />
    </router-link>

    <div class="p-3">
      <h3 cLass="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora perspiciatis necessitatibus sint tempore
        accusamus in saepe fugit hic aperiam!
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>

  import YouTubeButton from '../components/YouTubeButton.vue';

  const props = defineProps({
    meal: {
      required:true,
      type:Object
    }
  })
</script>
