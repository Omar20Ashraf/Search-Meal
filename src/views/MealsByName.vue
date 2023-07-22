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

    <Meals :meals="meals" />
</template>
<script setup>
    import Meals from '../components/Meals.vue';

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