/*=========================================================================================
  File Name: moduleGoalsMutations.js
  Description: Email Goals Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    setnewTask(state, value) {
        state.newTask = value;
    },
    setTodo(state, value) {
        state.Todo = value;
    },
    setInProgress(state, value) {
        state.InProgress = value;
    },
    setDone(state, value) {
        state.Done = value;
    },
    setGoals(state, payload) {
        state.goals = payload;
    },
    setGoal(state, payload) {
        let x = state.goals.find(goal => {
            return goal.id == payload.goalid;
        });
        x.status = payload.status;
    }
};
