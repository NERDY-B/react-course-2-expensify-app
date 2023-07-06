import moment from 'moment';
import filtersReducer from '../../reducers/filter'

test('should set up default filters value', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', ()=>{
   
    const state = filtersReducer(undefined, {type: 'SORT_AMOUNT', sortBy:'amount'});
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action = {
        type: 'SORT_DATE',
        sortBy: 'date'
    };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

//should set text filter
test('should set text filter', ()=> {
    const text = 'this is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }

    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
})

test('should set star tdate filter',()=>{
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };

    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
});

test('should set end date filter',()=>{
    const endDate = moment().endOf('month');
    const action = {
        type: 'SET_END_DATE',
        endDate
    };

    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
});