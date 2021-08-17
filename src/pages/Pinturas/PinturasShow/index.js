
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { Container } from "./styles"
import { useParams } from "react-router"
import Button from "../../../components/Button"
import { useHistory } from "react-router-dom"

const PinturasShow = () => {

    let{id} = useParams()

    const [painting, setPainting] = useState({})

    const history = useHistory()

    const loadPainting = async () => {
        const response = await api.get(`/paintings/show/${id}`)
        setPainting(response.data)
    }

    useEffect(() => {
        loadPainting()
        // eslint-disable-next-line
    }, [])

    const deletePainting = async () => {
        try{
            if(window.confirm('Você tem certeza?')){
                // const response = 
                await api.delete(`/paintings/destroy/${id}`)
                history.push('/paintings')
            }
        }catch(e){
            alert(e)
        }
    }

    return(
        <Container>
            <li>{painting.name}</li>
            <li>{painting.description}</li>
            <li>{painting.artist_id}</li>
            <li>{painting.art_style_id}</li>
            <Button onClick={deletePainting}>Deletar</Button>
        </Container>
    )
}

export default PinturasShow