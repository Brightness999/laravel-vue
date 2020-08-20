import { distinct } from "../../helpers/functions"

/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  SET_USERS (state, users) {
    state.users = users
  },
  REMOVE_RECORD (state, itemId) {
    const userIndex = state.users.findIndex((u) => u.id === itemId)
    state.users.splice(userIndex, 1)
  },
  SET_HRS_AND_MENTORS (state, users) {
    let hrs = users.filter(user => user.roles.find(role => role.name === 'hr'))
    let mentors = users.filter(user => user.roles.find(role => role.name === 'mentor'))
    state.hrs = distinct(hrs, 'id')
    state.mentors = distinct(mentors, 'id')
  }
}
