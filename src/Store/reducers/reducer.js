import * as actionTypes from '../actionTypes'

const initialState = {
    orders:[],
    filteredOrders:[],
    error:'',
    searchParam: '',
    filterDate: 'latest',
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type ){
        case actionTypes.GET_WORK_ORDERS:
            return {
                ...state,
                loading:true
            }
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading:true
            }
        case actionTypes.FETCH_ORDERS_FAILED:
            return {
                ...state,
                error: action.error,
                loading:false
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                error: '',
                filteredOrders:action.orders,
                loading:false
            }
        case actionTypes.CHANGE_SEARCH_PARAM:
            return {
                ...state,
                searchParam: action.searchParam,
                loading:true
            }
        case actionTypes.FILTER_BY_SEARCH_PARAM:
            let filteredData = state.orders.filter(order => {
                return order['name'].toLowerCase().includes(state.searchParam)        
            })  
            return {
                ...state,
                filteredOrders: filteredData,
                loading:false
            }
        case actionTypes.CHANGE_SORT_ORDER:
            return {
                ...state,
                filterDate: action.date,
                loading:false
            }
        case actionTypes.SORT_DATA:
            let sortedOrders = []
                if(state.filterDate === 'earliest'){
                sortedOrders  = state.filteredOrders.sort((a,b) => {
                        return a.deadline - b.deadline
                    })
                }
                if(state.filterDate === 'latest'){
                    sortedOrders  = state.filteredOrders.sort((a,b) => {
                        return b.deadline - a.deadline 
                    })
                }
                else{
                    sortedOrders = state.filteredOrders
                }

            return {
                ...state,
                filterDate: action.date,
                filteredOrders: [...sortedOrders] ,
                loading:false
            }

        default: return state;
    }
}

export default reducer;