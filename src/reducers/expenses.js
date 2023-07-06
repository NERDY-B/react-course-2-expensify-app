
const expenseReducerDefaultState = [];

//expense reducer
export default (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
           return [
            ...state , action.expense
           ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => (id !== action.id ))
        case 'EDIT_EXPENSE':
            console.log(action)
            return state.map((expense) => {
                if(expense.id === action.id){
                    console.log(expense.id);
                    console.log(action.id);
                    return{
                        ...expense,
                        ...action.updates
                    }
                }
            })
        default:
            return state
    }
}
