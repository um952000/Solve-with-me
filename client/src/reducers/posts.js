//here we will talk about the reducers functionalities
 
//state = posts here

export default ( posts = [], action)=>{
    switch(action.type){

        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}