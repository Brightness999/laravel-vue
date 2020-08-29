/*=========================================================================================
  File Name: moduleGoalsGetters.js
  Description: Goals Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  todoGoals (state) {
    return state.goals.filter(goal => {
      return goal.status == 'Todo'
    })
  },
  inProgressGoals (state) {
    return state.goals.filter(goal => {
      return goal.status == 'In Progress'
    })
  },
  doneGoals (state) {
    return state.goals.filter(goal => {
      return goal.status == 'Done'
    })
  }
}
