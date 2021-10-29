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
        if (prevProps.imgName !== this.props.imgName) {
            this.setState({ imgName: this.props.imgName })

            
            console.log('old prop1:', prevProps.imgName)
            console.log('new prop1:', this.props.imgName)
            console.log("old state1:",prevState.imgName)
            console.log('new state1:', this.state.imgName)
            
            this.fetchArray(this.props.imgName)
            console.log("arrey", this.state.imgArrey)
        }



        // if (prevState.imgName !== this.state.imgName)
        
    //  if (prevProps.imgName !== this.props.imgName)
    //  {
         
    //      console.log('rabotaet!!:',this.props.imgName)
    // //         this.setState({ imgName: this.props.imgName })
         
         // MAIN!!!!
    //        fetch( 
    //   `https://pixabay.com/api/?q=${this.props.imgName}&page=1&key=23260269-a14f68c41e91863ff9df952e6`
    //         ).then(res => res.json())
    //         .then(imgArrey => { this.setState({ imgArrey }) }
    //      )



        //  console.log(response)
    //     }
    
    }
    fetchArray = (propsImg) => {
    fetch( 
      `https://pixabay.com/api/?q=${propsImg}&page=1&key=23260269-a14f68c41e91863ff9df952e6`
            ).then(res => res.json())
            .then(imgArrey => { this.setState({ imgArrey }) }
         )
    }
    // componentDidMount() {
    //      this.setState({ imgName: this.props.imgName })
    //    console.log('GALERY 27 :',this.props.imgName)
    // }
    render() {
        // console.log(this.state.imgArrey)
        return <ul>
            {/* <p>{this.props.galeryImgName}</p> */}
            {this.props.imgName && <ImageGaleryitem imageArray={this.state.imgArrey }/>}
            {/* <ImageGaleryitem /> */}
            {/* <fetchImg /> */}
        </ul>
    }
}