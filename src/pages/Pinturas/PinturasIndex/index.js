import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { Container } from "./styles"
import { Link } from "react-router-dom"

const PinturasIndex = () => {

    const [paintings, setPaintings] = useState([])

    const loadPaintings = async () => {
        const response = await api.get('/paintings/index')
        setPaintings(response.data)
    }

    useEffect(() => {
        loadPaintings()
    }, [])

    return(
        <Container>
            {paintings.map(painting => {return(
            <li key={painting.id}>
                <Link to={{ pathname: `/paintings/show/${painting.id}`}}>{painting.name}</Link>
            </li>)})}
        </Container>
    )
}

export default PinturasIndex