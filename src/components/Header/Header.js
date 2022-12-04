
import { Link } from 'react-router-dom'

import Back from '../../images/back-button.svg'



export default function Header() {
    return (

        <header>
            <div className="container">

                <Link to="/" >
                    <img src={Back} style={{width: '50px'}} alt="Voltar"/>
                </Link>

            </div>
        </header>

    )
}