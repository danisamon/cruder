import { Link } from "react-router-dom"
import HeaderMain from "../../components/HeaderMain/HeaderMain"
import More from "../../images/more.svg"
import "./feed.css"
import axios from "axios"
import { useState, useEffect } from "react"


export default function Feed(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get("https://my-json-server.typicode.com/danisamon/fakeapi-posts/posts")
        .then((response) =>{
            setPosts(response.data)
        })
        .catch(()=>{
            console.log("Algo deu errado!")
        })

    }, [])

    function deletePost(id){
        
        axios.delete(`https://my-json-server.typicode.com/danisamon/fakeapi-posts/posts/${id}`)
        .then((response) =>{
            console.log("Deu certo")
            setPosts(posts.filter(post => post.id !== id ))
        })
        .catch(()=>{
            console.log("Algo deu errado!")
        })

    }

    return(
        <>
            <HeaderMain/>  
            <main>
                <div className="cards">
                    {posts.map((post,key)=>{
                        return(

                    <div className="card" key={key}>
                        <header>
                                <h2>{post.title}</h2>
                                <img src={More} />
                            
                        </  header>
                        <div className="line"></div>
                        <p>{post.description}</p>
                        <div className="btns">
                            <div className="btn-edit">
                                <Link to={{pathname: `/edit/${post.id}`}}>
                                    <button>Edit</button>
                                </Link>
                            </div>
                            <div className="btn-readmore">
                                <Link to="/lermais">
                                    <button>Leia mais</button>
                                </Link>
                            </div>
                            <div className="btn-delete">
                            <Link to="">
                                    <button onClick={()=>deletePost(post.id)}>Excluir</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                        )
                    })}

                    

                </div>

            </main>          
        </>
    )
}