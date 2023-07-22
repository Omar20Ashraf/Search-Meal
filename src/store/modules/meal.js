import axiosClient from "../../axiosClient";

const state = {
    searchedMeals: [],
    mealsByLetter: [],
    meal: "",
};

const getters = {
    searchedMeals: (state) => state.searchedMeals,
    mealsByLetter: (state) => state.mealsByLetter,
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
};

export default {
    state,
    getters,
    actions,
    mutations,
};
