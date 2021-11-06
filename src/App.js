import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./components/Searchbar/Searchbar"
import { ImageGalery } from './components/ImageGalery/ImageGalery';
import { Component } from 'react';



export default class App extends Component {
  state = {
    serchedImg: null,
    searchValue: ''
}


  getSearchValue = (value) =>{
    this.setState({searchValue : value})
  }
  pageScroll = () => {
  window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
  }
  
  render() {
    return (
      <div className="App">
        <Searchbar getSearchValue={ this.getSearchValue}/>
        <ImageGalery searchValue={this.state.searchValue} pageScroll={ this.pageScroll}/>
      </div>
    );
  }
  
}
