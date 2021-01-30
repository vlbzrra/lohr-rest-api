import React, { Component } from 'react';
import RegService from '../services/RegService';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

class FormRegComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            isId: this.props.match.params.id ? this.props.match.params.id : null,
            id: '',
            title: '',
            completed: false
        }
    
        this.changeInputHandler = this.changeInputHandler.bind(this);
    }

    componentDidMount(){
        if(this.state.isId === '_add' || this.state.isId === undefined || this.state.isId === null || this.state.isId === ""){
            return
        }else{
            RegService.getRegById(this.state.isId).then( (res) =>{
                this.setState({id: res.data.id,
                    title: res.data.title,
                    completed: res.data.completed
                });
            });
        }        
    }

    saveOrUpdateReg = (e) => {
        e.preventDefault();
        
        let reg = {id: this.state.id, title: this.state.title, completed: this.state.completed};
        if(this.state.isId === '_add' || this.state.isId === undefined || this.state.isId === null || this.state.isId === ""){
            RegService.createReg(reg).then(res =>{
                toast.success('Registro inserido com sucesso!')
                console.log('>>> Data: ', res.data)
                this.props.history.push('/regs');
            }).catch(error => {
                console.log('>>> Error: ', error)
                toast.error('Ocorreu um erro ao inserir o registro!')
            });
        }else{
            RegService.updateReg(reg, this.state.id).then( res => {
                toast.success('Registro atualizado com sucesso!')
                console.log('>>> Data: ', res.data)
                this.props.history.push('/regs');
            }).catch(error => {
                console.log('>>> Error: ', error)
                toast.error('Ocorreu um erro ao atualizar o registro!')
            });
        }
    }

    changeInputHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    cancel(){
        this.props.history.push('/regs');
    }

    getTitle(){
        if(this.state.isId === '_add' || this.state.isId === undefined || this.state.isId === null || this.state.isId === ""){
            return (
                <div className="d-flex flex-row align-items-center">
                    <h3 className="text-dark py-2 pr-4 m-0">
                        <strong className="text-secondary">Add Registration</strong>
                    </h3>
                </div>
                )
        }else{
            return (
                <div className="d-flex flex-row align-items-center">
                    <h3 className="text-dark py-2 pr-4 m-0">
                        <strong className="text-secondary">Edit Registration</strong>
                    </h3>
                </div>
            )
        }
    }

    render() {    
        return (
            <div>
                <br></br>
                <div className = "row">
                    <button className="btn btn-primary" onClick={() => this.props.history.push('/regs')}> BACK</button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">{this.getTitle()}</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>ID:</label>
                                        <input placeholder="REGISTRATION ID" name="id" className="form-control"
                                            value={this.state.id} onChange={this.changeInputHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>TITLE:</label>
                                        <input placeholder="REGISTRATION TITLE" name="title" className="form-control"
                                            value={this.state.title} onChange={this.changeInputHandler}></input>
                                    </div>
                                    <div className = "form-group">
                                        <label>COMPLETED:</label>
                                        <input name="completed" className="form-control" type="checkbox"
                                             checked={this.state.completed} onChange={this.changeInputHandler}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateReg}>SAVE</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>CANCEL</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormRegComponent;