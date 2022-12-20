import NavbarComponent from "../components/Navbar";

function Cancel() {
    return (
        <>
            <NavbarComponent />
            <h1 className='Success-Cancel'>Sorry to see you cancelled your Stripe payment!</h1>
        </>
    )
}

export default Cancel;