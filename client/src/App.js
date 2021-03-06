import React, { Component } from 'react';
import state from './state'
import './css/App.css'
import Spinner from './components/Spinner'
import Aside from './components/Aside'
import GridList from './components/GridList'
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Pic from './components/Pic'
import Info from './components/Info'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      imgsLoaded: false,
      images: state.pictures,
    }
  }

  componentDidMount () {
    history.listen((location, action) => {
    })   
    setTimeout(() => {
      this.setState({imgsLoaded: true})
    }, 1800);
  }
     
  render() {
    if (this.state.imgsLoaded) {
      return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Aside />
            <div className="content">        
              <Switch {...this.props}>
                <Route exact path="/picture/:id" 
                  render={(props) => <Pic {...props} images={this.state.images} />}/>
                <Route exact path="/info" component={Info} />
                <Route path="/" render={(props) => <GridList {...props}
                  images={this.state.images}/>}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      )
    } else {
      return (
        <div>
          <div>
            {this.state.images.map(img => <img src={img.thumb} alt="" key={img.id} onLoad={this.loadImgages} 
              style={{width: "0px", height: "0px"}}
            />)}
            {this.state.images.map(img => <img src={img.full}  alt="" key={img.full} onLoad={this.loadImgages} 
              style={{width: "0px", height: "0px"}}
            />)}
          </div>
          <Spinner />
        </div>
      )
    }
  }
}

export default App;

