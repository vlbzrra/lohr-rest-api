import React, { Component } from 'react'
import RegService from '../services/RegService'
import Pagination from './Pagination';
import TableReg from './TableReg';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import "bootstrap/dist/css/bootstrap.min.css";

class ListRegComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                todos: [],
                currentRegs: [],
                currentPage: null,
                totalPages: null,
                setRegs: []
        }
        this.addReg = this.addReg.bind(this)
        this.editReg = this.editReg.bind(this)
        this.viewReg = this.viewReg.bind(this)
        this.deleteReg = this.deleteReg.bind(this)
    }

    deleteReg(id){
        RegService.deleteReg(id).then( res => {
            toast.success('Registro apagado com sucesso!')
            const registro = [...this.state.todos]
            registro.splice(id, 1)
            console.log('>>> Data: ', res.data)
            this.setState({todos: registro})
        }).catch(error => {
            console.log('>>> Error: ', error)
            toast.error('Ocorreu um erro ao apagar o registro!')
        });
    }
    viewReg(id){
        this.props.history.push(`/view-reg/${id}`)
    }
    editReg(id){
        this.props.history.push(`/form-reg/${id}`)
    }

    componentDidMount(){
        RegService.getRegs().then((res) => {
            console.log('>>> Data: ', res.data)
            this.setState({ todos: res.data })
        }).catch(error => {
            console.log('>>> Error: ', error)
            toast.error('Ocorreu um erro ao listar os registros!')
        });
    }

    onPageChanged = data => {
        const { todos } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentRegs = todos.slice(offset, offset + pageLimit);
    
        this.setState({ currentPage, currentRegs, totalPages });
    }

    addReg(){
        this.props.history.push('/form-reg/_add');
    }

    render() {
        const { todos, currentRegs, currentPage, totalPages } = this.state;
        const totalRegs = todos.length;

        if (totalRegs === 0) return null;

        const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();
        return (
            <div className="container mb-5">
                <div className="d-flex flex-row align-items-center">
                    <h2 className={headerClass}>
                        <strong className="text-secondary">{totalRegs}</strong> REGISTRATIONS
                    </h2>
                </div>
                { currentPage && (
                    <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                    Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                    </span>
                ) }
                <div className="d-flex flex-row py-4 align-items-center">
                    <Pagination totalRecords={totalRegs} pageLimit={10} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                </div>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addReg}> Add Registration </button>
                </div>
                <br></br>
                <div>
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> TITLE </th>
                                <th> COMPLETED </th>
                                <th> ACTIONS </th>
                            </tr>
                        </thead>
                        { currentRegs.map((reg) => 
                        <TableReg 
                            registration={reg}
                            editReg={this.editReg}
                            viewReg={this.viewReg}
                            deleteReg={this.deleteReg}
                         />
                         ) }
                    </table>
                </div>
            </div>
        )
    }
}

export default ListRegComponent