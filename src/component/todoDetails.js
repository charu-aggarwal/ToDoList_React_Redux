import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/deleteTodo.action';
import { editTodo } from '../actions/editTodo.action';

class TodoDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayEdit: null,
            newValue: '',
            //flag:false,
        };
    }
    deleteItem = (e, index) => {
        const { _deleteTodo } = this.props;
        _deleteTodo(index);
    }

    handleUpdateForm = (e, index) => {
        this.setState({
            displayEdit: index,
        });

    }

    editTodo = (e, index) => {
        const { newValue } = this.state;
        const { _editTodo } = this.props;
        this.setState({
            displayEdit: null,

        });
        const data = {};
        console.log('newValue', newValue);
        data.name = newValue;
        data.id = index;

        _editTodo(data);
    }

    handleChange = (e) => {
        this.setState({
            newValue: e.target.value,
        })
    }

    render() {
        // const {deleteTodo} =this.props;
        const { displayEdit, newValue } = this.state;
        return (

            <div>
                {this.props.todoItem.map((item, index) => (
                    <div className="displayItem" key={index}>
                        {/* {displayEdit !== index &&  (
                            <div key={item.id} className="displayItem">
                                {item}
                            </div>
                        )} */}

                        <div>
                            {displayEdit === index ?
                                <input key={item.id} onChange={(e) => this.handleChange(e)} type="text"
                                    value={newValue} /> : item}
                        </div>

                        <div>
                            <button className='btn-delete' onClick={(e) => this.deleteItem(e, index)}>Delete</button>
                            <button className='btn-delete' onClick={displayEdit === index ? (e) => this.editTodo(e, index) : (e) => this.handleUpdateForm(e, index)}>
                                {displayEdit === index ? 'Save' : 'Edit'}
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}
TodoDetails.propTypes = {
    todoItem: PropTypes.array.isRequired,
}
const mapDispatchToProps = (dispatch) => ({

    _deleteTodo: (index) => {
        dispatch(deleteTodo(index))
    },

    _editTodo: (data) => {
        dispatch(editTodo(data))
    },


});
const mapStoreToProps = (store) => ({

})

export default connect(mapStoreToProps, mapDispatchToProps)(TodoDetails);