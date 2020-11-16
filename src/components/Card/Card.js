import React, { Component } from 'react'
import classes from './Card.module.scss'

class Card extends Component {
    componentDidMount() {
    this.formatDate()
}
formatDate(date){
    // month/day/year, 2:30:00 PM
    let rawDate = new Date(date)
    let day = rawDate.getDate();
    let month = (String(rawDate.getMonth()) === '0' ? '01': rawDate.getMonth());
    let year = rawDate.getFullYear();
    let hours = rawDate.getHours()
    let minutes = (rawDate.getMinutes() < 10 ? '0' : '') + rawDate.getMinutes();
    let seconds = (rawDate.getSeconds() < 10 ? '0' : '') + rawDate.getSeconds();;
    let amPm = (rawDate.getHours() > 12 ? 'PM': 'AM')
    let formatedDate = month + "/" + day + '/' + year + ', ' + hours + ':' + minutes + ":" + seconds + " " + amPm
    return formatedDate
};
   render() {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 px-5 my-5 flex justify-center">
            <div className={classes.Body}>
                <div className="mx-2 flex flex-col justify-center items-center">
                    <h3 className="text-liger">{this.props.name}</h3>
                    <p className="md:w-2/3">
                        {this.props.description}
                    </p>
                </div>
                <div className="flex flex-row justify-center mb-2 mt-5">
                    <div className={classes.ProfilePic}></div>
                    <div className={classes.UserDetails}>
                        <h5 className="">John Doe</h5>
                        <h6 className="text-sm">blah bhal bhla</h6>
                        <p className="text-sm">email@email.com</p>
                    </div>
                </div>
                <div className="flex justify-end mt-5 text-xs">
    <p className="text-left">{this.formatDate(this.props.deadline)}</p>
                </div>
            </div>
        </div>
    )
   }
}
 
 export default Card;