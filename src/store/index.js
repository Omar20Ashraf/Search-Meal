import { createStore } from "vuex";

import meal from "./modules/meal";

// Create store
export default createStore({
    modules: {
        meal
    }
});
