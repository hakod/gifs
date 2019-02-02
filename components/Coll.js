import React, { Component } from 'react'
const uuidv4 = require('uuid/v4');
import Viewer from './Viewer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Coll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copy: 'Copy me'
        }
        this.urlRef = React.createRef();
        this.setState = this.setState.bind(this)
        this.handleSource = this.handleSource.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.expand = this.expand.bind(this)
        this.up = this.up.bind(this)
        this.down = this.down.bind(this)
    }

    handleDelete() {
        this.props.actions.deleteCollection(this.props.coll.id)
    }
    // copy url
    handleSource(event) {
        const node = this.urlRef.current
        node.select();
        document.execCommand("copy");
        node.focus()
        this.setState({
            copy: 'Copied!'
        })
        setInterval(() => this.setState({
            copy: 'Copy me'
        }), 2000)
    }
    expand() {
        this.props.actions.viewer(this.props.coll)
    }
    up() {
        this.props.actions.up(this.props.coll)
    }
    down() {
        this.props.actions.down(this.props.coll)
    }
    render() {
        var divStyle = {
            width: '280px',
            height: '350px',
            overflow: 'hidden',
        }
        var iStyle = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            resize: 'none'
        }
        var butStyle = {
            all: 'unset',
            border: 'none',
            height: '20px',
            padding: '2px 8px 2px 8px',
            fontSize: '20px',
            color: '#1e90ff'
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
            height: '75%',
            cursor: 'pointer'
        }
        var tooltip = {
            
        }
        return (
            <div style={divStyle}>
                <div style={bStyle}>
                    <img onClick={this.expand} src={this.props.coll.url} />
                </div>
                <div style={aStyle}>
                    <button style={butStyle} onClick={this.handleDelete}><FontAwesomeIcon icon="trash" /></button>
                    <button className='tooltip' style={butStyle} onClick={this.handleSource}><FontAwesomeIcon icon="air-freshener" /><span className='tooltiptext'>{this.state.copy}</span></button>
                    <button style={butStyle} onClick={this.up}><FontAwesomeIcon icon="arrow-up"/></button>
                    <button style={butStyle} onClick={this.down}><FontAwesomeIcon icon="arrow-down"/></button>
                </div>
                <textarea style={iStyle} readOnly ref={this.urlRef} value={this.props.coll.url} />

            </div>
        )
    }
}

export default Coll