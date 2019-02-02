import React, {Component} from 'react'
import Coll from './Coll'
const uuidv4 = require('uuid/v4');

class Collection extends Component {
    constructor(props){
        super(props)
        this.state = {
            collection: [],
            label: 'Show'
        }
    }    
    collapse(){
        if (this.state.label==='Hide') {
        this.setState({
            label: 'Show'
        })
    } else {
        this.setState({
            label: 'Hide'
        })
    }
    }
    render() {
    var ulStyle = {
        display: 'grid',        
        gridTemplateColumns: 'repeat(3, 280px)',
        gridGap: '30px',
        paddingTop: '50px',
        paddingBottom: '50px',
        paddingLeft: '0',
        justifyContent: 'center'
    }
    var butStyle = {
        all: 'unset',
        textAlign: 'center',
        width: '50px',
        marginLeft: '20px',
        backgroundColor: '#1E90FF',
        color: '#F8F8FF',
        border: 'none',
        padding: '5px',
        borderRadius: '5px'
    }
        return (
            <div>
                <button style={butStyle} onClick={this.collapse.bind(this)}>{this.state.label}</button>
                <ul style={ulStyle}>
                {
                    this.state.label==='Show'?this.state.collection:this.props.coll.map((coll)=>{                        
                        return <Coll view={this.props.view} key={uuidv4()} col={this.props.coll} coll={coll} actions={this.props.actions}/>
                    
                    })
                }

            
            </ul>
            </div>
            
        )
    }
}

export default Collection