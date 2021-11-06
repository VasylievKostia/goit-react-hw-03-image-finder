import { Component } from "react";
import s from "./Searchbar.module.css"

export class Searchbar extends Component {
  state = {
  searchValue:''
  }

  handleChenge = (e) => {
    this.setState({searchValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.searchValue.trim() === '') {
     return alert('nothing to search!')
    }
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