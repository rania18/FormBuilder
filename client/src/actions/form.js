import * as api from '../api/form'
import { FETCH_ALL, CREATE} from '../constant/actionTypes'
export const getForm = () => async (dispatch) => {
    try {
        const { data } = await api.fetchList()
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const createForm = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createForm(post)
        dispatch({type:CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}
