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
