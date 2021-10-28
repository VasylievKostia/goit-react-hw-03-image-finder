import { Component } from "react"
import { FetchImg } from "../api/Pixaby"
import s from './ImageGaleryitem.module.css'


export class ImageGaleryitem extends Component {
    componentDidMount() {
        console.log(this.props.imageArray)
    }


    render() {
       return <div> im galery item
        {/* {this.props.imageArray.hits.map(img => {
            <li className={s.ImageGalleryItem} id={img.id}>
  <img src={img.webformatURL} alt="" className={s.ImageGalleryItemImage} />
</li>
        })} */}
    </div>
   }
    
}