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
