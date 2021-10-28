import { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGaleryitem } from "../ImageGaleryitem/ImageGaleryitem";
import { fetchImg } from "../api/Pixaby";

export class ImageGalery extends Component {
    state={
        imgArrey: [],
        imgName:''
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.imgName !== this.state.imgName) {
            console.log('GALERY 13 :',this.props.galeryImgName)
            fetch( 
      `https://pixabay.com/api/?q=${this.props.galeryImgName}&page=1&key=23260269-a14f68c41e91863ff9df952e6`
    ).then(res => res.json())
      .then(imgArrey => {this.setState({imgArrey})}
            )
            
 console.log('GALERY 20 :',this.props.galeryImgName)
        }
        console.log('GALERY 22 :',this.props.galeryImgName)
         
    }
    componentDidMount() {
         this.setState({ imgName: this.props.imgName })
       console.log('GALERY 27 :',this.props.galeryImgName)
    }
    render() {
        // console.log(this.state.imgArrey)
        return <ul>
            {/* <p>{this.props.galeryImgName}</p> */}
            {this.props.galeryImgName && <ImageGaleryitem imageArray={this.state.imgArrey }/>}
            {/* <ImageGaleryitem /> */}
            {/* <fetchImg /> */}
        </ul>
    }
}