/*=========================================================================================
  File Name: moduleGoalsActions.js
  Description: Goals Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/axios.js";

export default {
    fetchGoals({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            axios
                .get("/api/users/10/goals")
                .then(response => {
                    commit("setGoals", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    addGoals({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/users/10/goals", payload)
                .then(response => {
                    dispatch("fetchGoals");
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    editGoals({ commit, dispatch }, payload) {
        commit("setGoal", payload);
        /*return new Promise((resolve, reject) => {
            axios
                .patch("/api/users/10/goals", payload)
                .then(response => {
                    dispatch("fetchGoals");
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
        */
    }
};
