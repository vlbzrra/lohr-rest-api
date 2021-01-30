import React from 'react';
import PropTypes from 'prop-types';

const TableReg = props => {
    const {
        id='',
        title='',
        completed=false
    } = props.registration || {}
    
    const { editReg, deleteReg, viewReg } = props

    return (
        
        <tbody>
            <tr key = {id}>
                <td> {id} </td>
                <td> {title} </td>   
                <td> {completed ? <span>YES</span> : <span>NO</span>}</td>
                <td>
                    <button onClick={() => editReg(id)} className="btn btn-info">Edit</button>
                    <button style={{marginLeft: "10px"}} onClick={() => deleteReg(id)} className="btn btn-danger">Del</button>
                    <button style={{marginLeft: "10px"}} onClick={() => viewReg(id)} className="btn btn-warning">View</button>
                </td>
            </tr>
        </tbody>     
  )
}

TableReg.propTypes = {
  registration: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  editReg: PropTypes.func.isRequired,
  deleteReg: PropTypes.func.isRequired,
  viewReg: PropTypes.func.isRequired
};

export default TableReg;