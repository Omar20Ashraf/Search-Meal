<template>
    <div class="p-8 pb-0">
        <input 
            type="text"
            v-model="keyword"
            cLass="rounded border-2 border-gray-200 w-full" 
            placeholder="Search for Meals"
            @change="searchMeals"
        />
    </div>

    <div v-if="meals.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" cLass="bg-white shadow rounded-xl">

            <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
                <img
                    :src="meal.strMealThumb"
                    :alt="meal.strMeal"
                    class="rounded-t-xl w-full h-48 object-cover"
                />
            </router-link>

            <div class="p-3">
                <h3 cLass="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora perspiciatis necessitatibus sint tempore accusamus in saepe fugit hic aperiam!
                </p>
                <div class="flex items-center justify-between">
                    <YouTubeButton :href="meal.strYoutube" />
                </div>
            </div>
        </div>
    </div>

    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>    
</template>
<script setup>
    import YouTubeButton from '../components/YouTubeButton.vue';

    import { useStore } from 'vuex';
    import { ref, computed, onMounted } from "vue";
    import { useRoute } from 'vue-router';

    const store = useStore();
    const route = useRoute();

    const keyword = ref('');
    const meals = computed(() => store.getters.searchedMeals);
    
    function searchMeals() {
        store.dispatch('searchMeals', keyword.value)
    }

    onMounted(() => {
        //this incase the user access the url like website/by-name/mealName
        keyword.value = route.params.name;
        if(keyword.value){
            searchMeals()
        }
    })
</script>