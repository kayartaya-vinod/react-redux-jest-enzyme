import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName } from '../actions/names-actions';

export class NameForm extends Component {
    state = { newName: '' };

    submitHandler = (evt) => {
        evt.preventDefault();
        this.props.addName(this.state.newName);
        this.setState({ newName: '' });
    }

    changeHandler = ({ target }) => {
        let { name, value } = target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <h5>Add a new unique name:</h5>
                <form onSubmit={this.submitHandler} className="row">
                    <div className="col-4">
                        <input className="form-control" autoFocus
                            name="newName"
                            value={this.state.newName}
                            onChange={this.changeHandler} />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addName })(NameForm);