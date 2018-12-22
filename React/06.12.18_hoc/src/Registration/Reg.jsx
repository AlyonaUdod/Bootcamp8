import React from 'react';
import Modal from '../Modal/Modal.jsx'

const Reg = ({order, id}) => {
    return (
        <Modal order={order} id={id}>
            <h2> Registration</h2>
            <form action="">
                <input type='text' placeholder='Name'/>
                <input pssword='text' placeholder='Password'/>
                <input pssword='text' placeholder='Confirm Password'/>
                <input type='email' placeholder='E-mail'/>
                <input type="submit"/>
            </form> 
        </Modal>
    );
};

export default Reg;