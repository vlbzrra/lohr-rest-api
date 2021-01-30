import React, { Component } from 'react'
import RegService from '../services/RegService'

class ViewRegComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            todos: {}
        }
    }

    componentDidMount(){
        RegService.getRegById(this.state.id).then( res => {
            this.setState({todos: res.data});
        })
    }

    backToList(){
        this.props.history.push('/regs');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "row">
                    <button className="btn btn-primary" onClick={() => this.props.history.push('/regs')}> BACK</button>
                </div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> REGISTRATION DATA</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> ID: </label>
                            <div>{ this.state.todos.id }</div>
                        </div>
                        <div className = "row">
                            <label> TITLE: </label>
                            <div>{ this.state.todos.title }</div>
                        </div>
                        <div className = "row">
                            <label> COMPLETED: </label>
                            <div>{ this.state.todos.completed ? <span>YES</span> : <span>NO</span> }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewRegComponent