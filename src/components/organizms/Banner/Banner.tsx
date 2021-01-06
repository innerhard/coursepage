import React, { FC } from 'react'
import { Styled } from './styled'

interface DataProps {
    img: string
    title: string
    description: string
    buttonDescription: string
}

export const Banner: FC<DataProps> = ({ img, title, description, buttonDescription }) => {
    return (
        <Styled.WrapperCard img={img}>
            <div>
                <Styled.WrapperText variant="h3" gutterBottom>
                    {title}
                </Styled.WrapperText>
                <Styled.WrapperText variant="h5" gutterBottom>
                    {description}
                </Styled.WrapperText>
                <Styled.SButton variant="contained" color="secondary">
                    {buttonDescription}
                </Styled.SButton>
            </div>
        </Styled.WrapperCard>
    )
}
