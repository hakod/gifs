let actions = {
    addGif: function(id) {
        return {
            type: 'ADD_GIF',
            id: id
        }
    },
    deleteGif: function(id) {
        return {
            type: 'DELETE_GIF',
            id: id
        }
    },
    deleteAllGif: function(id) {
        return {
            type: 'DELETE_ALL_GIF',
            id: id
        }
    },
    addCollection: function(id) {
        return {
            type: 'ADD_COLLECTION',
            id: id
        }
    },
    deleteCollection: function(id) {
        return {
            type: 'DELETE_COLLECTION',
            id: id
        }
    },
    viewer: function(id) {
        return {
            type: 'VIEWER',
            id: id
        }
    },
    next: function(id) {
        return {
            type: 'NEXT',
            id: id
        }
    },
    up: function(id) {
        return {
            type: 'UP',
            id: id
        }
    },
    down: function(id) {
        return {
            type: 'DOWN',
            id: id
        }
    }
}

export default actions