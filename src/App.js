import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./components/Searchbar/Searchbar"
import { ImageGalery } from './components/ImageGalery/ImageGalery';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { PixabyFetch } from './components/api/Pixaby';

// const BASE_URL = 'https://pixabay.com/api/?key=23260269-a14f68c41e91863ff9df952e6'
// const KEY = '?key=23260269-a14f68c41e91863ff9df952e6'
// const newPixabyFetch = new PixabyFetch(BASE_URL)
// console.log(newPixabyFetch)
export default class App extends Component {
  state = {
    serchedImg: null,
    searchValue: '',
   
    // searchResult: []
    
}

  // componentDidUpdate(prevProps,prevState) {
  //   if (prevState.searchValue !== this.state.searchValue) {
  //     // newPixabyFetch.searchQuery = this.state.searchValue
  //     // newPixabyFetch.searchPhotos().then((r) =>
  //     //   this.setState({ searchResult: r })
        
  //     // )
  //     console.log('appStateSeacchResult=',this.state.searchResult)
  //   }
  // }
  
  // handleFormSubmit = (imgName) => {
    // this.setState({imgName})
// console.log('Before fetch in APP', this.state.imgName )
    
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('before fetch', this.state.searchValue)
  //   // this.setState({searchValue: e.target.value})
  //   // this.setState({ searchValue: ''})
  //  }

  getSearchValue = (value) =>{
    this.setState({searchValue : value})
  }

  
  render() {
    return (
      <div className="App">
        <Searchbar getSearchValue={ this.getSearchValue}/>
        <ImageGalery searchValue={ this.state.searchValue}/>
        {/* <header className='{s.Searchbar}' >
          <form className='{s.SearchForm}' onSubmit={this.handleSubmit}>
            <button type="submit" className='{s.SearchFormButton}'>
              <span className='{s.SearchFormButtonLabel}'>Search</span>
            </button>
            <input
            value={this.state.searchValue}
            className='{s.SearchFormInput}'
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleChenge}
          />
          </form>
          </header> */}
          {/* <ul>
            {this.state.searchResult.length > 0 && this.state.searchResult.map(el => {
              return (
                <li key={el.id}>
                  <img src={el.webformatURL} alt='' />
                </li>
              )
            })}
          </ul> */}
      
      </div>
    );
  }
  
}
