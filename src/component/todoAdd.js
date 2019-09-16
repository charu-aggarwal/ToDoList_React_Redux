import React from 'react';
import { addTodoToList } from '../reducer/todoReducer';
import { addTodo } from '../actions/todoAdd.action';
import { deleteTodo } from '../actions/deleteTodo.action';
//import store from '../store';
import { connect } from 'react-redux';
import './myStyle.css';
import TodoDetails from './todoDetails';
//import displayTodo from './displayTodo';


class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoValue: '',
        };
    }
    // state{
    //     allCountries:[],
    // }

    handleTodo = (e) => {
        //const {todoValue} =this.props;
        this.setState({
            todoValue: e.target.value,
        });
    };
    addTodo = () => {
        const { _addTodo } = this.props;
        const { todoValue } = this.state;
        const payload = [];
        payload.todoValue = todoValue;

        _addTodo(todoValue);

        //this._todo.value ="";
        console.log(todoValue);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setstate({
            todoValue: '',
        });
    }


    render() {
        const { todoValue } = this.props;
        return (
            <div className="container">
                <div >
                    <h2>To Do List!!</h2>
                    <h3> Enter Todo's for Today:</h3>
                    <input name='todo' type='text' placeholder='Enter Todo' onChange={this.handleTodo}></input>
                    <button onClick={this.addTodo} on onSubmit={this.handleSubmit}>OK</button>
                </div>
                <br />
                {todoValue.length !== 0 &&
                    <div className="displayTodo">
                        <h4>ToDo List : </h4>

                        <TodoDetails todoItem={todoValue}>
                        </TodoDetails>

                    </div>
                }
            </div>
        )

    }
}
//export default TodoAdd;

const mapStoreToProps = (store) => ({
    todoValue: store.todoReducer.todoList,

})

const mapDispatchToProps = (dispatch) => ({

    _addTodo: (todoValue) => {
        dispatch(addTodo(todoValue))
    },

});

export default connect(mapStoreToProps, mapDispatchToProps)(TodoAdd);