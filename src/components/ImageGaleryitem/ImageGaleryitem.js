import { Component } from "react"
import { FetchImg } from "../api/Pixaby"
import s from './ImageGaleryitem.module.css'


export function ImageGaleryitem(props) {
  return (
  <>
    {props.searchResult.map(el => {
        return (
          <li key={el.id} className={s.ImageGalleryItem}>
            <img src={el.webformatURL} alt='' className={ s.ImageGalleryItemImage}/>
          </li>
          ) 
        }
      )
    }
  </>
      )
}