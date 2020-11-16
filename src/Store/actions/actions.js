import * as actionTypes from '../actionTypes'
import axios from 'axios'


export const fetchWorkOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        let url="https://api.hatchways.io/assessment/work_orders"
       axios.get(url)
       .then(response => {
            let orders = response.data.orders
            dispatch(fetchOrdersSuccess(orders))
            dispatch(sortData())
       })
       .catch (error => {
            console.log(error)
            dispatch(fetchOrdersFailed(error))
       })
    }
}
export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders,
    }
}
export const fetchOrdersFailed  = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error:error
    }
}
export const fetchOrdersStart  = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,   
    }
}
export const changeSearchParam = (param) => {
    console.log(param)
    return {
        type: actionTypes.CHANGE_SEARCH_PARAM,
        searchParam:param
    }
}
export const filterBySearchParam = () => {
    return {
        type: actionTypes.FILTER_BY_SEARCH_PARAM,
    }
}

export const changeSortOrder = (date) => {
    return {
        type: actionTypes.CHANGE_SORT_ORDER,
        date:date
    }
}
export const sortData = () => {
    return {
        type: actionTypes.SORT_DATA,
    }
}

