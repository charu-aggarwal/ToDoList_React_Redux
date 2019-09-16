import { editTodo } from "../actions/editTodo.action";

const initialState = {
    todoList: [],
    todo: {}
};

const addTodoToList = (state, action) => {
    const { payload } = action;
    console.log('state', state, action);
    //console.log('TodoList',todoList);
    return {
        ...state,
        todoList: [...state.todoList, payload],
    }
}

const deleteToDoFromList = (state, action) => {
    const { payload } = action;
    console.log("Payload delete", payload);

    return {
        ...state,
        ...state.todoList.splice(payload, 1),
        todoList: [...state.todoList],
    }
}

const editTodoItem = (state, action) => {

    const { payload } = action;
    const arr = [...state.todoList];
    arr.splice(payload.id, 1, payload.name);
    console.log('updted arr =', arr);
    return {
        ...state,
        todoList: arr,

    }

}
//reducer
export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'TODO_ADDED': return addTodoToList(state, action);
        case 'TODO_DELETED': return deleteToDoFromList(state, action);
        case 'TODO_EDIT': return editTodoItem(state, action);
        default: return state;
    }
}