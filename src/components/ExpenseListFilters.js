import React from "react";
import { connect } from 'react-redux';
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filter";

export class ExpenseListFilters extends React.Component{
    constructor(props){
        super(props);
        // this.state ={
        //     calendarFocused: null
        // }
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }
   state={
    calendarFocused: null
   }
    onDatesChange = ({ startDate, endDate }) =>{
        this.props.setStartDate(startDate);
        this.props.setStartDate(endDate);
    }
    onFocusChange = (calendarFocused) => {
        this.setState(()=>({calendarFocused}))
    }

    onTextChange = (e) =>{
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e)=> {
        if(e.target.value === 'date'){ 
            this.props.sortByDate()
        }
        else if(e.target.value === 'amount') 
        {
            this.props.sortByAmount()
        }
    }
    render(){
        return(
            <div>
            <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
    
            <select 
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount" >Amount</option>
            </select>
            <DateRangePicker 
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=> false}
            />
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filter
    }
}

const mapDispatchToProps = (dispatch)=>({
    setTextFilter: () => dispatch(setTextFilter(text)),
    sortByDate: ()=> dispatch(sortByDate()),
    sortByAmount: ()=> dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);