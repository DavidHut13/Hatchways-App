import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import * as actions from '../../Store/actions/actions'
import { connect } from 'react-redux'


class Results extends Component {
    componentDidMount() {
        this.props.onFetchWorkOrders()
    }
    render() {
        const Orders = this.props.orders
        let Cards =  Orders.map((order,index) => {
            return (
             <Card 
             key={index}
             deadline={order.deadline}
             description={order.description}
             id={order.id}
             name={order.name}
             workId={order.workId}
             />
            )
        });
        if (Orders.length === 0 && !this.props.loading) {
            Cards = (
            <div className="flex w-full justify-center items-center mt-20">
                <p className="text-gray-500">No Orders Found...</p>
            </div>
            )
        }
        if (this.props.loading){
            Cards = (
                <div className="flex w-full justify-center items-center mt-20">
                    <p className="text-gray-500">loading...</p>
                </div>
                )
        }
        return (
            <div className="flex flex-wrap flex-col sm:flex-row ">
                {Cards}
            </div>
        )
    } 
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchWorkOrders:() => dispatch(actions.fetchWorkOrders())
    }
}

const mapStateToProps = state => {
    return {
        orders: state.filteredOrders,
        loading:state.loading
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Results);