import classes from "../UI/modal.module.css"
import reactDom from "react-dom"
import { Fragment } from "react"

const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const OverlayModal= props =>{
    return <div className={classes.modal}>
             <div>{props.children}</div>
           </div>
}

const portalElement=document.getElementById("overlays")

const Modal = props =>{
   return <Fragment>
       {reactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
       {reactDom.createPortal(<OverlayModal>{props.children}</OverlayModal>,portalElement)}
   </Fragment> 
}
export default Modal;