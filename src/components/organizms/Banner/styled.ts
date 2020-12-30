import styled from 'styled-components'

interface IProp {
    img: string
}
const WrapperCard = styled.div<IProp>`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    min-height: 200px;
    align-items: center;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background: rgb(131, 58, 180);
    background: linear-gradient(24deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
`
export const Styled = {
    WrapperCard,
}
