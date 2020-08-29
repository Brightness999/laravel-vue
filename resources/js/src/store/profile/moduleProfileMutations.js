/*=========================================================================================
  File Name: moduleProfileMutations.js
  Description: Email Profile Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  setnewTask(state, value) {
    state.newTask = value;
  },
  setTodo (state, value) {
    state.Todo = value
  },
  setInProgress (state, value) {
    state.InProgress = value
  },
  setDone (state, value) {
    state.Done = value
  }
}
