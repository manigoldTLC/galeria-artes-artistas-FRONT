import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { api } from '../../../../services/api'

import { useHistory } from 'react-router-dom'

import { CardPost } from './styled'

import Button from '../../../Button'


const validationArtist = yup.object().shape({
    name: yup.string().required("Campo nome é obrigatório"),
    description: yup.string().required("Campo descrição é obrigatório"),
})

const CreateArtistForm = () => {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationArtist)
    })

    const createArtist = (data) => {
        api.post('/artists/create', data)
        .then(() => {
            history.push("/artistas")
        })
        .catch(() => {
            window.alert("Algo errado aconteceu. Tente novamente!")
        })
    }

    return (
        <CardPost>
            <h1>Adicionar Artista</h1>
            <div className="line-post"></div>

            <div className="card-body-post">
            
                <form onSubmit={handleSubmit(createArtist)}>
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
                        <Button type="submit">Criar Artista</Button>
                    </div>
                </form>

            </div>
        </CardPost>
    )
}

export default CreateArtistForm
