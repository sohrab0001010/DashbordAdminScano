import React, { useState } from 'react'


const Modal = ({title,message,icon,bgIcon}) => {

    const [showModal,setShowModal] = useState(false)




  return (
    <div
    className="
    bg-[]
    "
    >
        <div className="iconContainer">
            <div>
                <span>×</span>
            </div>
        </div>
        <div className="textcontainer">
            <span
            
            >title</span>
            <span>message message message</span>
        </div>
    </div>
  )
}

export default Modal