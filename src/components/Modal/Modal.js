import { Component } from 'react'
import s from './Modal.module.css'
export class Modal extends Component {
componentDidMount() {
    // console.log('modal mount!')
        window.addEventListener('keydown', this.handleKeyDown)
    }
componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)    
}    

handleKeyDown = e => {
        // console.log(e.code)
            if (e.code === 'Escape') {
            // console.log('thisIsECSkey')
            this.props.onClose()
        }
    }
backdropClick = e => {
    if (e.target === e.currentTarget) {
        this.props.onClose()
    }
}
    render() {
      return (
          <div className={s.Overlay} onClick={this.backdropClick }>
        <div className={s.Modal}>
            <img src={this.props.modalImg} alt="modalImg" />
         </div>
    </div>
    )  
    }
    
}