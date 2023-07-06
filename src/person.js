console.log('person is running')


const isAdult = (x) => (x >= 18)? true : false;

const canDrink = (x) => (isAdult)? 'can sure yes drink': `age ${x} cant drink`;

 const isSenior = (x) => (x >= 65)? 'iwu snior man' : ' taaa gerrout';

 export default isSenior

export { isAdult,canDrink };