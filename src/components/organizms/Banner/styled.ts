import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

interface IProp {
    img: string
}
const WrapperCard = styled.div<IProp>`
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-template-rows: auto-fit;
    min-height: 300px;
    align-items: start;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 40px;
    margin-bottom: 40px;
`
const WrapperText = styled(Typography)`
    color: #333333;
`
const SButton = styled(Button)`
    width: 200px;
`
export const Styled = {
    WrapperCard,
    WrapperText,
    SButton,
}
