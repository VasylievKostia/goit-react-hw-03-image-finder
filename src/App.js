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
    imgName: '',
    
}

  handleFormSubmit = (imgName) => {
    this.setState({imgName})
    // this.setState({listSwitcher : true})
    
  }


  
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit }/>
        {/* <ImageGalery galeryImgName={this.state.imgName} /> */}
        <ImageGalery imgName={ this.state.imgName}/>
        <ToastContainer autoClose={3000 }/>
      </div>
    );
  }
  
}
