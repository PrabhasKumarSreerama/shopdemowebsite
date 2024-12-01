import "./NavBar.css"

const NavBar = ({ cartCount, openModal }) => {
    return (
        <>
            <div>
                <nav>
                    <h1>Shopping Website</h1>
                    <button onClick={openModal}>
                        Cart ({cartCount})
                    </button>
                </nav>
            </div>
        </>
    )
}

export default NavBar;