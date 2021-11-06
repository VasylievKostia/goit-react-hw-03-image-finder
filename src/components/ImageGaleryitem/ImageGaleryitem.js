import { Component } from "react"
import s from './ImageGaleryitem.module.css'


export class ImageGaleryitem extends Component {
  
  render() {
return (
  <>
    {this.props.searchResult.map(el => {
        return (
          <li key={el.id} className={s.ImageGalleryItem} >
            <img src={el.webformatURL} alt='' className={ s.ImageGalleryItemImage} onClick={this.props.onImgClick}/>
          </li>
          ) 
        }
      )
    }
  </>
      )
  }

  
}