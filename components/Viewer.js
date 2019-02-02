import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Viewer extends Component {
    constructor(props){
        super(props)
        this.close = this.close.bind(this)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.keyDown = this.keyDown.bind(this)
    }   
    componentDidMount() {
        this.view.focus()
    }
    componentWillUnmount() {
        this.view.focus()
    }
    close() {        
        this.props.actions.viewer()
    }
    next() {
        var url = this.props.col.map(x=>{return x.url})
        var next = url.indexOf(this.props.view.url)
        this.props.actions.next(this.props.col[next+1])
    }
    previous() {
        var url = this.props.col.map(x=>{return x.url})
        var prev = url.indexOf(this.props.view.url)
        this.props.actions.next(this.props.col[prev-1])
    }
    keyDown(e) {
        if(e.keyCode===27){
            e.preventDefault()
            this.close()
        }
        if(e.keyCode===37){
            e.preventDefault()
            this.previous()
        }
        if(e.keyCode===39){
            e.preventDefault()
            this.next()
        }
    }
    render() {
       var divStyle = {
           width: '100%',
           height: '100%',
           backgroundColor: 'rgba(0,0,0,1)',
           zIndex: '1',
           position: 'fixed',
           left: '0',
           top: '0',
           verticalAlign: 'middle',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           overflowY: 'hidden'
       }
       var imgStyle = {
           marginLeft: 'auto',
           marginRight: 'auto',
           maxHeight: '90%',
           zIndex: '2',
           verticalAlign: 'middle'           
       }
       var butStyle = {
           width: '70px',
           height: '70px',
           position: 'absolute',
           top: '0',
           zIndex: '3',
           textAlign: 'center',
           fontSize: '30px',
           border: 'none',
           backgroundColor: 'transparent',
           color: 'white'
       } 
       var sideStyle = {
           width: '70px',
           height: '70px',
           fontSize: '30px',
           zIndex: '3',
           border: 'none',
           backgroundColor: 'transparent',
           color: 'white'
       }
        return (
            <div ref={(e)=>{this.view=e}} tabIndex='0' onKeyDown={(e)=>{this.keyDown(e)}} style={divStyle}>
                <button style={sideStyle} onClick={this.previous}><FontAwesomeIcon icon="arrow-left"/></button>
                <img style={imgStyle} src={this.props.view.url} /> 
                <button style={butStyle} onClick={this.close}><FontAwesomeIcon icon="window-close"/></button>
                <button style={sideStyle} onClick={this.next}><FontAwesomeIcon icon="arrow-right"/></button>                         
            </div>
        )
    }
}

export default Viewer