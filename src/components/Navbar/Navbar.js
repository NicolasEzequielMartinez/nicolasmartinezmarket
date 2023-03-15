import './Navbar.css'
import logo from './assets/bolsa-de-la-compra.png'
import Button from '../Button/Button'

import CartWidget from '../CartWidget/CartWidget'

const navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Market</h1>
            <img className="imgNav" src={logo} alt='logo'/>
            <div>
                <Button label="Verduras" callback={() => console.log('Verduras')}/>
                <Button label="Frutas" callback={() => console.log('Frutas')}/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default navbar