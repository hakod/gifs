

let viewReducer = function(view={view:false},action) {
    switch (action.type) {
        case 'VIEWER': 
            if(view.view===false) return {view: true, url: action.id.url}
            if(view.view===true) return {view: false, url: ''}
        case 'NEXT':
            return {view: true, url: action.id.url}
        default:
            return view
    }
}

export default viewReducer