import { FETCH_ALL, CREATE} from '../constant/actionTypes'

export default (form = [], action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...form, action.payload];
        default:
            return form
    }
    }