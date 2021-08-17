import Carousel, { consts } from 'react-elastic-carousel'
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi'
import { StyleArrow } from './styled.js'

const customArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <BiChevronLeftCircle>limao</BiChevronLeftCircle> : <BiChevronRightCircle></BiChevronRightCircle>
    return (
        <StyleArrow onClick={onClick} disabled={isEdge}>
            {pointer}
        </StyleArrow>
    )
}

const PaintingsCarousel = () => {
    return (
    <Carousel pagination={false} itemsToShow={2} renderArrow={customArrow}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </Carousel>
    )
}

export default PaintingsCarousel