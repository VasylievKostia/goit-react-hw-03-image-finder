import { Component } from "react";
import { ImageGaleryitem } from "../ImageGaleryitem/ImageGaleryitem";
import { PixabyFetch } from '../api/Pixaby';
import { Button } from "../Button/Button";
import s from './ImageGalery.module.css'
import Loader from "react-loader-spinner";
import {Modal} from "../Modal/Modal.js"


const newPixabyFetch = new PixabyFetch()
// console.log(newPixabyFetch)
export class ImageGalery extends Component {
    state={
        searchResult: [],
        status : 'init',
        showModal: false,
        modalImg: ''
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchValue !== this.props.searchValue) {
          // console.log('fetch!!')
          this.setState({ status: 'loading' })
          newPixabyFetch.resetPage()
          newPixabyFetch.searchQuery = this.props.searchValue
          // console.log(newPixabyFetch.searchQuery = this.props.searchValue)
          newPixabyFetch  
            .searchPhotos()
            .then(result => {
              if (result.length > 0) {
               this.setState({ searchResult: result, status: 'success' })
              // console.log('then result',result) 
              }
              else {
                this.setState({ status: 'error' })
              }
            })
            .catch(err => {
        console.log('catch result',err);
        this.setState({ status: 'error' });
      });
      
        }
  }
  handleClick = (e) => {
    newPixabyFetch.page = 1
    console.log(e)
    newPixabyFetch  
        .searchPhotos()
      .then(result => {
          
          this.setState((prev) => ({
            searchResult: [...prev.searchResult, ...result]
          }))
          this.props.pageScroll()
        })
      
        .catch(err => {
      this.setState({ status: 'error' });
        });
    
  }
  toggleModal = () => {
    this.setState(prev => ({
     showModal : !prev.showModal
    }))
  }
  onImgClick = (e) => {
    console.log(e.target)
    this.setState({ modalImg: this.state.searchResult.find(el => el.webformatURL === e.target.src).largeImageURL })
    this.toggleModal()
  }

    render() {
    
        if (this.state.status === 'init') {
          return  <p className={s.init}>Enter your query</p>
          
      }
      if (this.state.status === 'loading') {
        return <div className={s.loader}>
          <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
          </div>
      }
      if (this.state.status === 'success') {
        return (
        <>
          <ul className={s.ImageGallery}>
              <ImageGaleryitem searchResult={ this.state.searchResult} onImgClick={this.onImgClick}/>
          </ul>
            <Button handleClick={this.handleClick} />
            {this.state.showModal && <Modal modalImg={this.state.modalImg} onClose={this.toggleModal }/>}
        </>
        )
      }
      if (this.state.status === 'error') {
        return <p className={s.error}>Something is wrong</p>
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