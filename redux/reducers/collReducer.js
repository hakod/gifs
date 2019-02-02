
const uuidv4 = require('uuid/v4');

let collReducer = function(coll=[],action) {
    switch (action.type) { 
        case 'ADD_COLLECTION':
        return [{
            id: uuidv4(),
            url: action.id.url,
            title: action.id.title
        }, ...coll]
        case 'DELETE_COLLECTION':
        return coll.filter((gif)=>{
                if(action.id===0){
                return 'null'
                } else {                
                return gif.id !== action.id 
                }
            })  
        case 'UP':
        if(coll.map(function(x){return x.id}).indexOf(action.id.id)!==0){
            let t = Object.assign([],coll)
            let o = t.map(function(x){return x.id}).indexOf(action.id.id)
            t.splice(o-1,0,t[o])
            t.splice(o+1,1)
            return t
        }
        if(coll.map(function(x){return x.id}).indexOf(action.id.id)===0){
            return t
        }
        case 'DOWN':
        if(coll.map(function(x){return x.id}).indexOf(action.id.id)!==coll.length){
            let t = Object.assign([],coll)
            let o = t.map(function(x){return x.id}).indexOf(action.id.id)
            t.splice(o+2,0,t[o])
            t.splice(o,1)
            return t
        }
        default:
            return coll
    }
}

export default collReducer