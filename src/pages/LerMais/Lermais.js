import { Link } from "react-router-dom"
import HeaderMain from "../../components/HeaderMain/HeaderMain"
import More from "../../images/more.svg"


export default function LerMais(){
    return(
        <>
            <HeaderMain/>  
            <main>
                <div className="cards">
                    <div className="card">
                        <header>
                                <h2>Curso consumindo api</h2>
                                <img src={More} />
                            
                        </  header>
                        <div className="line"></div>
                        <p>Nesse curso aprendia a consumir uma api com react.
                        Nesse curso aprendia a consumir uma api com react.
                        Nesse curso aprendia a consumir uma api com react.
                        Nesse curso aprendia a consumir uma api com react.
                        
                        </p>
                       

                    </div>

                </div>

            </main>          
        </>
    )
}