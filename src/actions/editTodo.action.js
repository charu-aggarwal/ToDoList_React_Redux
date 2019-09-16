
function requestTodoAdd(data) {
    return {
        type: 'TODO_EDIT',
        payload: data,
    }
}


export const editTodo = (data) => {
    return (dispatch) => {
        dispatch(requestTodoAdd(data));
    }

}