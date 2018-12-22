import React, { Component } from 'react';
import moment from 'moment';
import './Calendar.css';
import WeekDays from '../WeekDays/WeekDays'
import Grid from '../Grid/Grid';

class Calendar extends Component {

    state = {
        now: moment(),
        days: ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI','SAT']
    }

    nextMonth = () => {
        let today = this.state.now.clone()
        this.setState({
            now: today.add(1, 'M'),
        })
    }

    prevMonth = () => {
        this.setState({
            now: this.state.now.subtract(1, 'M'),
        })
    }

    calcDays = () => {
        const start = moment(this.state.now.startOf('month')).startOf('week');
        const end = moment(this.state.now.endOf('month')).endOf('week');
        let days = Math.round(moment.duration(end - start).asDays());
        const matrix = [];
        for (let i = 0; i < days; i++) {
        let result = start.format("DD");
        matrix.push(result)
        result = start.add(1, "days").format("DD");
        }
        return matrix;
    }

    render() {
        this.calcDays();
        const {days, now} = this.state;
        return (
            <div className='calendar'>
                <header className="header">
                <div className="month-display row">
                <span className='arrow' onClick= {this.prevMonth}>&#8656;</span>
                <span className="month-label">{`${now.format('MMMM')} ${now.year()}`}</span>
                <span className='arrow' onClick={this.nextMonth}>&#8658;</span>
                </div>
                <WeekDays days={days}/>
                </header>
                <Grid days={this.calcDays()}/>
            </div>
        );
    }
}

Calendar.propTypes = {

};

export default Calendar;