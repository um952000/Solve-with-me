// state = posts here in our project

//action.payload are the actual posts

//exporting reducer directly here

//initially posts becomes an empty array only

// A reducer is a function that accept the state and action

//Initial state ==> posts=[]

export default (posts=[],action)=>{

     switch(action.type){

        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;        
     }
}