import styled from 'styled-components'

interface IProp {
    img: string
}
const WrapperCard = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    min-height: 200px;
    align-items: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 4px 4px 34px 0px rgba(34, 60, 80, 0.2);
`
const WrapperImg = styled.div<IProp>`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    min-height: 350px;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 16px;
`
export const Styled = {
    WrapperCard,
    WrapperImg,
}
