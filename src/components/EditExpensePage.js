import React from 'react';
import { connect }from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import expenses from '../test/fixtures/expenses';

export class EditExpensePage extends React.Component{
   constructor(props){
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.onClick = this.onClick.bind(this);
   }
   onSubmit(expense){
      this.props.editExpense(this.props.expense.id, expense);
      this.props.history.push('/');
   }

   onClick(){
      this.props.removeExpense({id: this.props.expense.id})
      this.props.history.push('/');
   }

   render(){
      
      return(
         <div>
           <ExpenseForm 
           expense={this.props.expense}
           onSubmit={this.onSubmit}
           />
            <button onClick={this.onClick}>Remove</button>
         </div>
        )
   }
}



const mapDispatchToProps = (dispatch)=> {
 return{
   editExpense: (expenses) => dispatch(editExpense(id, expenses)),
   removeExpense: (data) => dispatch(removeExpense(data))
   }
}

const mapStateToProps = (state, props) => {
   console.log(state.expenses)
   console.log(props.match)
   return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id)
}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);

// const EditExpensePage = (props) =>{
//    return(
//     <div>
//       <ExpenseForm 
//       expense={props.expense}
//       onSubmit={(expense)=>{
//          console.log(props.expense);
//          console.log('updated', expense) 
//          props.dispatch(editExpense(props.match.params.id, expense))         
//          props.history.push('/')

//          }}
//       />
//        <button onClick={()=> {
//                 props.dispatch(removeExpense({id: props.match.params.id}))
//                 props.history.push('/');
//         }}>Remove</button>
//     </div>
//    )
// }