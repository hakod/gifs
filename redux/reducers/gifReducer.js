
const uuidv4 = require('uuid/v4');

let gifReducer = function(gif=[],action) {
    switch (action.type) {
        case 'ADD_GIF': 
            return [{
                id: uuidv4(),
                url: action.id.url,
                title: action.id.title
            }, ...gif]
        case 'DELETE_GIF':
            return gif.filter((gif)=>{
                if(action.id===0){
                return 'null'
                } else {                
                return gif.id !== action.id 
                }
            })
        case 'DELETE_ALL_GIF':
            return [
            ]
    
            
        default:
            return gif
    }
}

export default gifReducer