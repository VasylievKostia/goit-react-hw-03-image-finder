import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./components/Searchbar/Searchbar"
import { ImageGalery } from './components/ImageGalery/ImageGalery';
import { Component } from 'react';
import { render } from '@testing-library/react';


export default class App extends Component {
  state = {
    serchedImg: null,
    imgName:''
}

  handleFormSubmit = (imgName) => {
    this.setState({imgName})
    console.log(imgName)
  }


  
  render() {
    return (
      <div className="App">
        <div>{this.state.serchedImg && (<div className='asd'>{this.state.serchedImg.hits[0].webformatURL}</div>)}</div>
        
        <Searchbar onSubmit={this.handleFormSubmit }/>
        <ImageGalery galeryImgName={ this.state.imgName}/>
        <ToastContainer autoClose={3000 }/>
      </div>
    );
  }
  
}
