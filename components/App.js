import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../redux/actions'
import GifList from './GifList'
import Random from './Random'
import Collection from './Collection'
import Viewer from './Viewer'
import '../client/styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faArrowLeft, faArrowRight, faTrash, faAirFreshener, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

library.add( faWindowClose, faArrowLeft, faArrowRight, faTrash, faAirFreshener, faArrowDown, faArrowUp )

class App extends Component {
    render (){
    var divStyle = {
        width: '100%',
        height: '130px',
        backgroundColor: 'white'
    }
    var h1Style = {
        textAlign: 'left',
        fontFamily: 'Bitter',
        paddingLeft: '20px',
        display: 'inline-block',
        verticalAlign: 'middle',
    }
    var iconStyle = {
        height: '50px',
        display: 'inline-block',   
        position: 'relative',
        verticalAlign: 'sub'
    }
    var h3Style = {
        marginLeft: '20px'
    }
    var random = {
        display: 'inline-block',
        position: 'relative',
        paddingLeft: '20px'
    }
        return (
        <div>
            <div style={divStyle}>
            {this.props.view.view ? <Viewer col={this.props.coll} actions={this.props.actions} view={this.props.view}/> : null}                            
            <h1 style={h1Style}><img style={iconStyle} src="https://cdn1.iconfinder.com/data/icons/flat-christmas-icons-1/75/_gift-512.png"/>
Gif Collector</h1>
            <Random gifs={this.props.gifs} actions={this.props.actions}/>
            </div>            
            <GifList coll={this.props.coll} gifs={this.props.gifs} actions={this.props.actions}/>
            <h3 style={h3Style}>Your collection ({this.props.coll.length})</h3>
            <Collection view={this.props.view} coll={this.props.coll} actions={this.props.actions}/>
        </div>
     )
    }    
}

function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)