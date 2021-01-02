import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

interface IProp {
    img: string
}
const WrapperCard = styled.div<IProp>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr 1fr;
    min-height: 450px;
    align-items: start;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px;
`
const WrapperText = styled(Typography)`
    color: #ffffff;
`
export const Styled = {
    WrapperCard,
    WrapperText,
}
