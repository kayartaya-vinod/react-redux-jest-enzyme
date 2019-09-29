import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteName } from '../actions/names-actions';

export class NameList extends Component {

    deleteNameHandler = (name) => {
        this.props.deleteName(name);
    }
    
    render() {
        let { names } = this.props;
        let namesLi = null;
        if (names && names instanceof Array) {
            namesLi = names.map(n => <li key={n}>
                {n}
                <button className="btn btn-link" 
                    onClick={()=>this.deleteNameHandler(n)}>&times;</button>
                </li>)
        }
        return (
            <div>
                <h5 className="header">Here are the names: </h5>
                <ul>
                    {namesLi}
                </ul>
            </div>
        );
    }
}

const stateAsProps = (reducers) => ({
    names: reducers.namesReducer.names
});

const actionsAsProps = {
    deleteName
};

export default connect(stateAsProps, actionsAsProps)(NameList);