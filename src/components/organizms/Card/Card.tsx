import React, { FC } from 'react'
import { Styled } from './styled'
import { Button, Typography } from '@material-ui/core'

interface DataProps {
    img: string
    title: string
    description: string
}

export const Card: FC<DataProps> = ({ img, title, description }) => {
    return (
        <Styled.WrapperCard>
            <Styled.WrapperImg img={img} />
            <Typography variant="subtitle1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {description}
            </Typography>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </Styled.WrapperCard>
    )
}
