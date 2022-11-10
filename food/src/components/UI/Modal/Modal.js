import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}
const ModalOverlay = ({children}) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
    </div>

};
const target = document.getElementById('overlays')

const Modal = ({children, onClose}) => {
    return <>
        {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, target)}
        {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, target)}
    </>
}

export default Modal;