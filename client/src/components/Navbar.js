import {Button, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';

function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(!show);
    const handleShow = () => setShow(!show);

    const checkout = async () => {
        await fetch('http://localhost:4005/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);


    return (
        <>
            <Navbar expand="sm" className='navbar'>
                <Navbar.Brand href="/home" className='logo'>Swimin'Teacher.com</Navbar.Brand>
                <div className='list'>
                    <a href='#aboutId'>About</a>
                    <a href='#experiencesId'>Experiences</a>
                    <a href='#servicesId'>Services</a>
                    <a href='#contactId'>Contact</a>
                </div>
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow} className='cart-btn'>Cart ({productsCount} Items)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Shopping Cart</Modal.Title>
                    Minimize here
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                    :
                        <h4>There are no items in your cart!</h4>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;