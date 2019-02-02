

import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
    gifs: [],
    coll: [{id:'b',url:'https://media2.giphy.com/media/xPlrAYjaiChdC/giphy.gif',title:'haha'},{id:'a',url:'https://media2.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif',title:' '},{id: "30fb5a8a-dae7-4f96-b74c-e41a0fde4d49", url: "https://media0.giphy.com/media/5PL04KKJp5VAs/giphy.gif", title: " "}],
    view: {view: false, url: ''}
}

let store = configureStore(initialState)

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")

)