import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import "./post.css"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const validationPost = yup.object({
    title: yup.string().required("O título é obrigatório.").max(40, "O título deve ter no mínimo 40 caracteres"),
    description:yup.string(),
    content:yup.string(),

})

export default function Post(){
    let navigate = useNavigate()
    
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validationPost)})
    
    const addPost = (data) => axios.post("https://my-json-server.typicode.com/danisamon/fakeapi-posts/posts",data)
    .then(() =>{
        console.log("Deu certo")
        navigate('/')
    })
    .catch(()=>{
        console.log("Algo deu errado!")
    })
    
    
    return(
        <>
            <Header/>
            <main >
                <div className="card-post">
                    <h1>Criar postagem</h1>
                    <div className="line-post"></div>
                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Título</label>
                                <input type="text" name="title" {...register("title")}/>
                                <p className="error-message">{errors.title?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text" name="description" {...register("description")}/>
                                <p className="error-message">{errors.description?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Conteúdo</label>
                                <textarea type="text"name="content" {...register("content")}/>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>
                            <div className="btn-post">
                                <button>Enviar</button>
                            </div>
                        </form>

                    </div>

                </div>
            </main>
        </>
    )
}