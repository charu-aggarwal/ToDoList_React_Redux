function requestTodoDelete(todoItem) {
    return {
        type: 'TODO_DELETED',
        payload: todoItem,
    }
}


export const deleteTodo = (todo) => {
    return (dispatch) => {
        dispatch(requestTodoDelete(todo));
    }

}