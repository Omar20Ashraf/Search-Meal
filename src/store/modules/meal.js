import axiosClient from "../../axiosClient";

const state = {
    searchedMeals: [],
};

const getters = {
    searchedMeals: (state) => state.searchedMeals,
};

const actions = {
    async searchMeals({ commit }, keyword) {
        const response =  await axiosClient.get(`search.php?s=${keyword}`);
        commit("setSearchedMeals", response.data.meals);
    },
};

const mutations = {
    setSearchedMeals(state,meals){
        if(!meals)
            meals = [];

        state.searchedMeals = meals;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
