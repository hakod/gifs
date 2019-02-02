import React, {Component} from 'react'
import axios from 'axios'
const uuidv4 = require('uuid/v4');
const PUBLIC_KEY = '&api_key=0zRACZovXqpICGqEEVNSt86vgsfg8VMp';
const BASE_URL = 'https://api.giphy.com/v1/gifs/random?';
const RATING = '&rating=g'



class Gif extends Component {
    constructor(props){
        super(props)
        this.state = {
            copy: 'Copy me'
        }
        this.urlRef = React.createRef();
        this.setState = this.setState.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.toCollection = this.toCollection.bind(this)
    }

    handleDelete() {        
        this.props.actions.deleteGif(this.props.gif.id)
    }
    
    toCollection() {
        if(this.props.coll.length<=23 && !this.props.coll.some(e=>e.url===this.props.gif.url)){
        this.props.actions.addCollection(this.props.gif)
        }
    }

    render() {
        var divStyle = {
            height: '200px',
            overflow: 'hidden'
        }
        var imgStyle = {
            height: '100%'
        }
        var butStyle = {
            all: 'unset',
            position: 'absolute',
            zIndex: '3',
            backgroundColor: '#1E90FF',
            color: '#F8F8FF',
            border: 'none',
            height: '10px',
            bottom: '0'
        }
        var aStyle = {
            width: '100%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        }
        var bStyle = {
            display: 'flex',
            justifyContent: 'center',
            height: '100%'
        }
        return (
            <div style={divStyle}>  
                <div style={bStyle}>               
                <img style={imgStyle} src={this.props.gif.url} />
                <button style={butStyle} onClick={this.toCollection}>Add</button>
                </div>
                <br></br>  
                <div style={aStyle}>          
                </div>
            </div>
        )
    }
}

export default Gif