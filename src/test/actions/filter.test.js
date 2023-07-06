import moment from 'moment';
import { setTextFilter, 
    sortByAmount,
    setEndDate,
    setStartDate,
    sortByDate 
} from "../../actions/filter";

test('should set up for textfilter with no value', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should set up for textfilter with any string val', ()=>{
    const text = 'something in '
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should set up for sort amount', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_AMOUNT',
        sortBy: expect.any(String)
    })
})

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)
    })
})

test('should generate set end date actino object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate sort by date action object', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_DATE',
        sortBy: 'date'
    })
})