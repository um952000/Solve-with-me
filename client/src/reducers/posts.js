// state = posts here in our project

//action.payload are the actual posts

//exporting posts

//initially posts becomes an empty array only

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