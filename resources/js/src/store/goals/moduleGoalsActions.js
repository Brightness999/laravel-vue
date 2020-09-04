import axios from "@/axios.js";

export default {
    fetchGoals({ commit, dispatch }, { userid }) {
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
                    dispatch("fetchGoals", { userid });
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    editGoals({ commit, dispatch }, { formData, userid, itemId }) {
        return new Promise((resolve, reject) => {
            axios
                .put(`/api/users/${userid}/goals/${itemId}`, formData)
                .then(response => {
                    dispatch("fetchGoals", { userid }, { itemId });
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    deleteGoals({ commit, dispatch }, { userid, itemId }) {
        return new Promise((resolve, reject) => {
            axios
                .delete(`/api/users/${userid}/goals/${itemId}`)
                .then(response => {
                    dispatch("fetchGoals", { userid });
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};
