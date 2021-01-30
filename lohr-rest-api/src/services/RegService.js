import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/reg-list"

class RegService{
    getRegs(){
        return axios.get(USER_API_BASE_URL);
    }

    createReg(reg){
        return axios.post(USER_API_BASE_URL, reg);
    }

    getRegById(regId){
        return axios.get(USER_API_BASE_URL + '/' + regId);
    }

    updateReg(reg, regId){
        return axios.put(USER_API_BASE_URL + '/' + regId, reg);
    }

    deleteReg(regId){
        return axios.delete(USER_API_BASE_URL + '/' + regId);
    }
}

export default new RegService()
