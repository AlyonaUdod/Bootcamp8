import React from 'react';
import Button from '../Button/Button.jsx'
import './Modal.css'

const Modal = ({name,surname,tel,email,birth,handlerChange,addCard,toggleModal,showCard, changeCard, showModal}) => {
    return (
        <div className='overlay'> 
        <div className='modal'>
        <h3 className="titleCard">Complite form</h3>
            <span className="close" onClick={toggleModal}>X</span>
            <form className="form" onSubmit={addCard}>
                <label className="lab"><input type="text" className="inp"  value={name} name="name" placeholder='Enter Name' onChange={handlerChange} required/></label>
                <label className="lab"><input type="text" className="inp" value={surname} name="surname" placeholder='Enter Surname' onChange={handlerChange} required/></label>
                <label className="lab"><input type="number" className="inp"  value={tel} name="tel" placeholder='Enter phone Number' onChange={handlerChange} required/></label>
                <label className="lab"><input type="email" className="inp"  value={email} name="email" placeholder='Enter email' onChange={handlerChange} required/></label>
                <label className="lab"><input type="date" className="inp"  value={birth}  name="birth" placeholder='Enter Date of Birth' onChange={handlerChange} required/></label>
 
                {!showCard ? <Button text={'Save Contact'}/> : <Button text={'Edit'}/>}
            </form>
        </div>
    </div>
    );
};

export default Modal;