import CreateArtistForm from "../../../../components/Forms/ArtistForms/Create";
import { Main } from "./styled";

const ArtistCreatePage = () => {
    return (
        <Main>
            <div className="div-content-create-artist">
                <h1 className="h1-page-artista"> Página para adicionar um novo artista </h1>
                <CreateArtistForm />

            </div>
        </Main>
    )
}

export default ArtistCreatePage
