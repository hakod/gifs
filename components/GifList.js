import React, {Component} from 'react'
import Gif from './Gif'
const uuidv4 = require('uuid/v4');

class GifList extends Component {
    render() {
    var ulStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
        gridAutoFlow: 'dense'
    }    
        return (
            <ul style={ulStyle}>
                {
                    this.props.gifs.map((gif)=>{                        
                        return <Gif key={uuidv4()} coll={this.props.coll} gif={gif} actions={this.props.actions}/>
                    
                    })
                }

            
            </ul>
        )
    }
}

export default GifList