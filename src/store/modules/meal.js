import axiosClient from "../../axiosClient";

const state = {
    searchedMeals: [],
    mealsByLetter: [],
    ingredients: [],
    mealsByIngredient: [],
    randomMeals: [],
    meal: "",
};

const getters = {
    searchedMeals: (state) => state.searchedMeals,
    mealsByLetter: (state) => state.mealsByLetter,
    ingredients: (state) => state.ingredients,
    mealsByIngredient: (state) => state.mealsByIngredient,
    randomMeals: (state) => state.randomMeals,
    meal: (state) => state.meal,
};

const actions = {
    async searchMeals({ commit }, keyword) {
        const response = await axiosClient.get(`search.php?s=${keyword}`);
        commit("setSearchedMeals", response.data.meals);
    },
    async mealById({ commit }, id) {
        const response = await axiosClient.get(`lookup.php?i=${id}`);
        commit("setMealDetails", response.data.meals);
    },
    async searchMealsByLetter({ commit }, letter) {
        const response = await axiosClient.get(`search.php?f=${letter}`);
        commit("setMealsByLetter", response.data.meals);
    },
    async getIngredients({ commit }) {
        const response = await axiosClient.get("list.php?i=list");
        commit("setIngredients", response.data.meals);
    },
    async searchMealsByIngredient({ commit },ing) {
        const response = await axiosClient.get(`filter.php?i=${ing}`);
        commit("setMealsByIngredient", response.data.meals);
    },
    async getRandomMeals({ commit }) {
        const meals = [];

        for (let i = 0; i < 10; i++) {
            const response = await axiosClient.get('random.php');  
            meals.push(response.data.meals[0]);
        }

        commit("setRandomMeals", meals);
    },
};

const mutations = {
    setSearchedMeals(state, meals) {
        if (!meals) meals = [];
        state.searchedMeals = meals;
    },
    setMealDetails(state, meals) {
        state.meal = meals[0] || {};
    },
    setMealsByLetter(state, meals) {
        if (!meals) meals = [];
        state.mealsByLetter = meals;
    },
    setIngredients(state, meals) {
        if (!meals) meals = [];
        state.ingredients = meals;
    },
    setMealsByIngredient(state, meals) {
        if (!meals) meals = [];
        state.mealsByIngredient = meals;
    },
    setRandomMeals(state, meals) {
        if (!meals) meals = [];
        state.randomMeals = meals;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
