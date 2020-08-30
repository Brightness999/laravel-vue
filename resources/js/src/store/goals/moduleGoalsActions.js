import axios from "@/axios.js";

export default {
    fetchGoals({ commit, dispatch }, {userid}) {
        return new Promise((resolve, reject) => {
            axios
                .get(`/api/users/${userid}/goals`)
                .then(response => {
                    commit("setGoals", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    addGoals({ commit, dispatch }, { formData, userid }) {
        return new Promise((resolve, reject) => {
            axios
                .post(`/api/users/${userid}/goals`, formData)
                .then(response => {
                    dispatch("fetchGoals",{userid});
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    editGoals({ commit, dispatch }, payload) {
        commit("setGoal", payload);
    }
};
