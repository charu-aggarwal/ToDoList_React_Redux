import React from 'react';
import PropTypes from 'prop-types';
import TodoDetails from './todoDetails';

function displayTodo(props) {

    return (
       
   
        <div className="displayItem">
            <h4>ToDo List : </h4>
            <TodoDetails>
                </TodoDetails>

        </div> 

    )

    
}
displayTodo.propTypes = {
    TodoDetails: PropTypes.array.isRequired,
}
export default displayTodo;