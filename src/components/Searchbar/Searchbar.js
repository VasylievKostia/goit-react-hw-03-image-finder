import { Component } from "react";
import s from "./Searchbar.module.css"
import {  toast } from 'react-toastify';
import shortid from 'shortid';



export class Searchbar extends Component {
  state = {
  searchValue:''
  }

  handleChenge = (e) => {
    this.setState({searchValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.searchValue === '') {
     return alert('nothing to search!')
    }
    console.log(e)
    this.props.getSearchValue(this.state.searchValue)
    this.setState({ searchValue: ''})
   }


  render() {
    return (
      <header className={s.Searchbar} >
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
          name= 'searchValue'
          value={this.state.searchValue}
          className={s.SearchFormInput}
          type="text"
          placeholder="Search images and photos"
          onChange={this.handleChenge}
        />
        </form>
      </header>
    )
  }
}
































































































// export class Searchbar extends Component {
//     state = {
//         inputValue: ''
//     }
//     inputId = shortid.generate();
  
//   handleChenge = (event) => {
//     this.setState({ inputValue: event.target.value})
//   }

//   onSubmit = (event) => {
//     event.preventDefault()

//     if (this.state.inputValue.trim() === '') {
//       return toast.error('nothing to search!');
//     }
//     this.props.onSubmit(this.state.inputValue)
//     this.setState({ inputValue: '' })
//     console.log('Before fetch in searchbar', this.state.inputValue )
//   }
  



    
//     render() {
//       return <header className={s.Searchbar} onSubmit={this.onSubmit}>
          
//   <form className={s.SearchForm}>
//     <button type="submit" className={s.SearchFormButton}>
//       <span className={s.SearchFormButtonLabel}>Search</span>
//     </button>

//     <input
//       value={this.state.inputValue}
//       className={s.SearchFormInput}
//       type="text"
//       placeholder="Search images and photos"
//       onChange={this.handleChenge}
//     />
//   </form>
// </header>
//     }
    
// }


// // return <div className={s.Searchbar}>
// // //     <input
// //         name='inputValue'
// //         id={this.inputId}
// //         value={this.state.inputValue}
// //         onChange={this.handleChenge}
// //         type='text'
// //     ></input>
// // </div>