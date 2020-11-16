import React, { Component } from 'react'
import classes from './Navigation.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../Store/actions/actions'

class Navigation extends Component {
    state = {
        searchInput: '',
        filterDate:'latest'
    }
    inputTextHandler = (event) => {
        this.setState({searchInput: event.target.value}, () => {
            this.props.onChangeSearchParam(this.state.searchInput)
            this.props.onFilterBySearchParam();
        })
    }
    inputCheckedHandler = (event) => {
        if(event.target.checked){
            this.setState({filterDate: 'earliest'}, () => {
                this.props.onChangeSortOrder(this.state.filterDate)
                this.props.onSortData()
            })     
        }
        else{
            this.setState({filterDate: 'latest'}, () => {
                this.props.onChangeSortOrder(this.state.filterDate)
                this.props.onSortData()
            })
        }
    }
 render() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center mt-20 mb-10">
            <div className="w-full md:w-2/3 flex my-3  justify-center items-center">
                <input 
                    id="name-input" 
                    value={this.state.searchInput} 
                    onChange={(event) => this.inputTextHandler(event)} 
                    className="search-input w-2/3 p-2 border-1 border-gray-600 rounded-lg" 
                    type="text" 
                    placeholder="Filter by work name..." >
                </input>
            </div>
            <div className="flex flex-row my-3">
                <p className="mx-2 text-gray-600">Lastest</p>
                <label className={classes.switch}>
                    <input 
                    id="deadline-input" 
                    type="checkbox"
                    value='latest'
                    onChange={(event) => this.inputCheckedHandler(event)} 
                    ></input>
                    <span className={[classes.slider,classes.round].join(' ')}></span>
                </label>
                <p className="mx-2  text-gray-600">Earliest</p>
            </div>
        </div>
    )
 }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeSearchParam :(searchInput) => dispatch(actions.changeSearchParam(searchInput)),
        onFilterBySearchParam:() => dispatch(actions.filterBySearchParam()),
        onChangeSortOrder:(date) => dispatch(actions.changeSortOrder(date)),
        onSortData:() => dispatch(actions.sortData())
    }
}
export default connect(null,mapDispatchToProps)(Navigation);