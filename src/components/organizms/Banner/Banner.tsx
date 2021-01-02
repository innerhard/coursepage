import React, { FC } from 'react'
import { Styled } from './styled'

interface DataProps {
    img: string
    title: string
    description: string
}

export const Banner: FC<DataProps> = ({ img, title, description }) => {
    return (
        <Styled.WrapperCard img={img}>
            <Styled.WrapperText variant="h1" gutterBottom color="primary">
                {title}
            </Styled.WrapperText>
            <Styled.WrapperText variant="h5" gutterBottom color="primary">
                {description}
            </Styled.WrapperText>
        </Styled.WrapperCard>
    )
}
