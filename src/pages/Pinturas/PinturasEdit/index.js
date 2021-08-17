import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from '../PinturasCreate/styles';
import { api } from '../../../services/api'
import { useParams } from "react-router"

const PinturasEdit = () =>{

    let{id} = useParams()
    const[name, setName] = useState('')
    const[artist_id, setArtist_id] = useState('')
    const[art_style_id, setArt_style_id] = useState('')
    const[description, setDescription] = useState('')
    const history = useHistory()

    const loadPainting = async () => {
        const response = await api.get(`/paintings/show/${id}`)
        setName(response.data.name)
        setDescription(response.data.description)
        setArtist_id(response.data.artist_id)
        setArt_style_id(response.data.art_style_id)
    }

    useEffect(() => {
        loadPainting()
    // eslint-disable-next-line
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(name === ''){
            alert('Nome deve estar preenchido.')
        }else if(artist_id === ''){
            alert('Id do Artista deve ser preenchido.')}
        else if(art_style_id === ''){
            alert('Id de estilo de arte deve ser preenchido.')}
        else if(description === ''){
            alert('Descrição deve estar preenchida.')
        }
        else if(name.length < 3){
            alert('Nome deve ter mais de 3 caracteres')
        }else if(description.length < 5){
            alert('Descrição deve ter mais de 5 caracteres')
        }
    
        try{
            const response = await api.patch('/paintings/update/$(id)', {
                category: {
                    name,
                    artist_id,
                    art_style_id,
                    description
                }
            })
            if(response.data){
                alert('Pintura Atualizada.')
                history.push('/paintings')
            }
        }catch(error){
            alert(error)
        }

    }

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder='Nome'
                    onChange={(value) => setName(value.target.value)}
                />
                <Input
                    placeholder='Id do Artista'
                    onChange={(value) => setArtist_id(value.target.value)}
                />
                <Input
                    placeholder='Id de Estilo do Artista'
                    onChange={(value) => setArt_style_id(value.target.value)}
                />
                <Input
                    placeholder='Descrição'
                    onChange={(value) => setDescription(value.target.value)}
                />
                <Button type='submit'>Criar Pintura</Button>
            </form>
        </Container>
    )

}

export default PinturasEdit