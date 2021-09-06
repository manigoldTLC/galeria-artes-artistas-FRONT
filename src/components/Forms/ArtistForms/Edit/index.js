import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { api } from '../../../../services/api'

import { useHistory, useParams } from 'react-router-dom'

import { CardPost } from './styled'

import Button from '../../../Button'

import { useEffect } from 'react'

const validationArtist = yup.object().shape({
    name: yup.string().required("Campo nome é obrigatório"),
    description: yup.string().required("Campo descrição é obrigatório"),
})

const EditArtistForm = () => {

    const { id } = useParams()
    let history = useHistory()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationArtist)
    })
    
    const loadArtista = () => {
        api.get(`/artists/show/${id}`)
        .then((response) => {
            reset(response.data)
        })
    }

    useEffect(() => {
        loadArtista();
    }, [])

    const editArtist = (data) => {
        api.put(`/artists/update/${id}`, data)
        .then(() => {
            history.push("/artistas")
        })
        .catch(() => {
            window.alert("Algo errado aconteceu. Tente novamente!")
        })
    }

    return (
        <CardPost>
            <h1>Editar Artista</h1>
            <div className="line-post"></div>

            <div className="card-body-post">
            
                <form onSubmit={handleSubmit(editArtist)}>
                    <div className="fields">
                        <label>Nome Artista</label>
                        <input type="text" name="name" {...register("name")} />
                        <p className="error-message">{errors.name?.message}</p>
                    </div>

                    <div className="fields">
                        <label>Descrição</label>
                        <textarea type="text" name="description" {...register("description")}/>
                        <p className="error-message">{errors.description?.message}</p>
                    </div>

                    <div>
                        <Button type="submit">Editar Artista</Button>
                    </div>
                </form>

            </div>
        </CardPost>
    )
}

export default EditArtistForm