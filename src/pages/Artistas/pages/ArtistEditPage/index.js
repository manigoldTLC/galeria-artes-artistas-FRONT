import EditArtistForm from "../../../../components/Forms/ArtistForms/Edit";
import { Main } from "./styled";

const ArtistEditPage = () => {
    return (
        <Main>
            <div className="div-content-create-artist">
                <h1 className="h1-page-artista"> Página para editar um artista já criado </h1>
                <EditArtistForm />
            </div>
        </Main>
    )
}

export default ArtistEditPage
