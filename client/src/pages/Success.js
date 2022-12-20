import NavbarComponent from "../components/Navbar";

function Success() {
    return (
        <>
            <NavbarComponent />
            <h1 className='Success-Cancel'>Thank you for your purchase!</h1>
            <a href='/home' className='goback'>  Go Back </a>
        </>
    )
}

export default Success;