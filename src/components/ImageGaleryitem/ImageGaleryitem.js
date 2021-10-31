import { Component } from "react"
import { FetchImg } from "../api/Pixaby"
import s from './ImageGaleryitem.module.css'


export class ImageGaleryitem extends Component {
    componentDidMount() {
        // console.log(this.props.imageArray.hits[0])
    }

    render() {
      return  this.props.imageArray.hits.map((image) => (
      <li className={s.ImageGalleryItem} key={image.id}>
        <img
          src={image.webformatURL}
          alt={image.tag}
          className={s.ImageGalleryItemImage}
       
        />
      </li>
    ));
  }
}

//     render() {
//         return
//         this.props.imageArray.hits.map((img) => {
//             <li className={s.ImageGalleryItem} id={img.id}>
//   <img src={img.webformatURL} alt="" className={s.ImageGalleryItemImage} />
// </li>
//         })}
    
//    }
    
