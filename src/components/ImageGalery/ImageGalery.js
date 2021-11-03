import { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGaleryitem } from "../ImageGaleryitem/ImageGaleryitem";
import { fetchImg } from "../api/Pixaby";
import { render } from "@testing-library/react";
import { PixabyFetch } from '../api/Pixaby';

const BASE_URL = 'https://pixabay.com/api/?key=23260269-a14f68c41e91863ff9df952e6'
const KEY = '?key=23260269-a14f68c41e91863ff9df952e6'
const newPixabyFetch = new PixabyFetch(BASE_URL)

export class ImageGalery extends Component {
    state={
        searchResult: [],
        status : 'init'
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchValue !== this.props.searchValue) {
          console.log('fetch!!')
          this.setState({ status: 'loading'})
        newPixabyFetch.searchQuery = this.props.searchValue
          newPixabyFetch
            .searchPhotos()
            .then(result => {
              this.setState({ searchResult: result, status: 'success' })
              console.log(result)
            })
            .catch (err => {
                  console.log(err)
                  this.setState({status: 'error'})
            })
      
        }
    }
    render() {
    
        if (this.state.status === 'init') {
            return <p>Enter your query</p>
      }
      if (this.state.status === 'loading') {
          return <p>LOADING......</p>
      }
      if (this.state.status === 'success') {
        return (
        
          <ul>
            {this.state.searchResult.length > 0 && this.state.searchResult.map(el => {
              return (
                <li key={el.id}>
                  <img src={el.webformatURL} alt='' />
                </li>
              )
            })}
          </ul>
        )
      }
      if (this.state.status === 'error') {
        return <p>Всё пропало</p>
      }
}
}












































































// export class ImageGalery extends Component {
//     state={
//         imgArrey: [],
//         imgName:''
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.imgName !== this.props.imgName) {
//             this.setState({ imgName: this.props.imgName })

            
//             console.log('prevProps.imgName:', prevProps.imgName)
//             console.log('this.props.imgName:', this.props.imgName)
//             console.log("old state1:",prevState.imgName)
//             console.log('new state1:', this.state.imgName)
            
//             // this.fetchArray(this.props.imgName)
//             // console.log("arrey", this.state.imgArrey)
//         }



//         if (prevState.imgName !== this.state.imgName) {
//          this.setState({ imgName: this.props.imgName })
//         console.log('Before fetch in LIST', this.state.imgName )

         
//         return(
//            fetch( 
//       `https://pixabay.com/api/?q=${this.props.imgName}&page=1&key=23260269-a14f68c41e91863ff9df952e6`
//             ).then(res => res.json())
//             .then(imgArrey => { this.setState({ imgArrey }) }
//             )
//         )
//         console.log(this.state.imgArrey)
//         }
//         if (this.state.imgArrey !== prevState.imageArray) {
//             console.log('this.state.imgArrey !== prevState.imageArray |||this.state.imageArray=', this.state.imageArray)
//         }
//     }
//     // fetchArray = (propsImg) => {
//     // fetch( 
//     //   `https://pixabay.com/api/?q=${propsImg}&page=1&key=23260269-a14f68c41e91863ff9df952e6`
//     //         ).then(res => res.json())
//     //         .then(imgArrey => { this.setState({ imgArrey }) }
//     //      )
//     // }
//     // componentDidMount() {
//     //      this.setState({ imgName: this.props.imgName })
//     //    console.log('GALERY 27 :',this.props.imgName)
//     // }
//     render() {
//         // console.log(this.state.imgArrey)
//         return <ul>
//             {/* <p>{this.props.galeryImgName}</p> */}
//             {this.state.imgArrey.length > 0 && <ImageGaleryitem imageArray={this.state.imgArrey }/>}
//             {/* <ImageGaleryitem /> */}
//             {/* <fetchImg /> */}
//         </ul>
//     }
// }