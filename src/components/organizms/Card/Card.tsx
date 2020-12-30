import React, { FC } from 'react'
import { Styled } from './styled'

interface DataProps {
    img: string
    title: string
    description: string
}

export const Card: FC<DataProps> = ({ img, title, description }) => {
    return (
        <Styled.WrapperCard img={img}>
            {title}
            {description}
        </Styled.WrapperCard>
    )
}
