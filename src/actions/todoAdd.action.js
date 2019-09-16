
//Action with type and payload
function requestTodoAdd(todo) {
    return {
        type: 'TODO_ADDED',
        payload: todo,
    }
}

//Action-Creator
export const addTodo = (todo) => {
    return (dispatch) => {
        dispatch(requestTodoAdd(todo));
    }

}