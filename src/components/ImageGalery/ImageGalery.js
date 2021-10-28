import { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGaleryitem } from "../ImageGaleryitem/ImageGaleryitem";
import { fetchImg } from "../api/Pixaby";

export class ImageGalery extends Component {
    state={
        imgArrey : null
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.galeryImgName !== this.props.galeryImgName) {
            fetch(
      `https://pixabay.com/api/?q=${this.props.galeryImgName}&page=1&key=23260269-a14f68c41e91863ff9df952e6`
    ).then(res => res.json())
      .then(imgArrey => {this.setState({imgArrey})})
        }
            
    }
    
    render() {
        console.log(this.state.imgArrey)
        return <ul>
            {/* <p>{this.props.galeryImgName}</p> */}
            {this.props.galeryImgName && <ImageGaleryitem imageArray={this.state.imgArrey }/>}
            {/* <ImageGaleryitem /> */}
            {/* <fetchImg /> */}
        </ul>
    }
}