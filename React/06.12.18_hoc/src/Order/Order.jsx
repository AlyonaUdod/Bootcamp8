import React from 'react';
import Modal from '../Modal/Modal';

const Order = ({order, id}) => {
    return (
        <Modal order={order} id={id}>
            <h2>Order</h2>
            <form action="">
                <input type='text' placeholder='City'/>
                <input type='text' placeholder='Post'/>
                <input type='text' placeholder='Phone Number'/>
            </form>
        </Modal>
    );
};

export default Order;