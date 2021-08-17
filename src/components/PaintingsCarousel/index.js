import Carousel, { consts } from 'react-elastic-carousel'
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi'
import { StyleArrow } from './styled.js'
import PaintingCard from '../PaintingCard'

const customArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <BiChevronLeftCircle>limao</BiChevronLeftCircle> : <BiChevronRightCircle></BiChevronRightCircle>
    return (
        <StyleArrow onClick={onClick} disabled={isEdge}>
            {pointer}
        </StyleArrow>
    )
}

const customBreakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1366, itemsToShow: 2 }
]

const PaintingsCarousel = () => {
    return (
    <Carousel pagination={false} itemsToShow={2} renderArrow={customArrow} breakPoints={customBreakpoints}>
        <PaintingCard/>
        <PaintingCard/>
        <PaintingCard/>
        <PaintingCard/>
        <PaintingCard/>
        <PaintingCard/>
        <PaintingCard/>
    </Carousel>
    )
}

export default PaintingsCarousel;