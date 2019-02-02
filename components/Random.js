import React, {Component} from 'react'
import axios from 'axios'
import GifList from './GifList';
const uuidv4 = require('uuid/v4');

const PUBLIC_KEY = '&api_key=0zRACZovXqpICGqEEVNSt86vgsfg8VMp';
const BASE_URL = 'https://api.giphy.com/v1/gifs/random?';

class Random extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            gif: {
                url: '',
                title: '',
                tag: '',
                rating: false
            }
        }
        this.handleCreate = this.handleCreate.bind(this)
        this.toggle = this.toggle.bind(this)
        this.handleTrash = this.handleTrash.bind(this)
    }
    toggle(event) {        
        this.setState({
            rating: !this.state.rating
        })
    }

    handleSearch(event) {
        this.setState({
            tag: event.target.value
        })
    }

    handleCreate() {
        axios.get(BASE_URL+(this.state.rating==true?'&rating=g':'')+(this.state.tag?'&tag='+this.state.tag.split(' ').join('+'):'')+PUBLIC_KEY)                
            .then((res)=>{
                console.log(this.state.rating==true?'&rating=g':'')
                let data = res.data.data
                this.setState({  
                    gif: {                 
                    url: data.images.original.url,
                    title: data.title          
                    }
                
             })
            if (this.props.gifs.length<=7){  
            this.props.actions.addGif(this.state.gif)   
            .catch((error)=>{
                console.log(error)
            }) 
        }
        })      
        
    }
    handleTrash() {
        this.props.actions.deleteAllGif()
    }
    render() {
    var divStyle = {
        paddingLeft: '20px'
    }
    var butStyle = {
        all: 'unset',
        backgroundColor: '#1E90FF',
        color: '#F8F8FF',
        border: 'none',
        padding: '5px',
        borderRadius: '5px'
    }
    var traStyle = {
        all: 'unset',
        backgroundColor: '#1E90FF',
        color: '#F8F8FF',
        border: 'none',
        padding: '5px',
        borderRadius: '5px',
        marginLeft: '10px'
    }
        return (
        <div style={divStyle}>
        <input onKeyPress={(e)=>{if(e.key==='Enter'){this.handleCreate()}}} onChange={this.handleSearch.bind(this)} type='text' placeholder='Search'></input>    
        <button style={butStyle} onClick={this.handleCreate}>Random gif</button>
        <input onClick={this.toggle} type='checkbox' name='G rating'></input>
        <label for='G rating'>G rating</label>
        <button style={traStyle} onClick={this.handleTrash}>&#x1f5d1;Trash all</button>
        </div>
        )
    }
}

export default Random