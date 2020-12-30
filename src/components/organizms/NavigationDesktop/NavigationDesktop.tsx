import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AndroidIcon from '@material-ui/icons/Android'
import { Styled } from './styled'

type Items = {
    id: number
    element: string
}
type DataProps = {
    items: Items[]
}

export const NavigationDesktop: FC<DataProps> = data => {
    const itemsMenu = data.items.map(item => {
        const { id, element } = item
        return (
            <Button color="inherit" key={id}>
                {element}
            </Button>
        )
    })
    return (
        <AppBar position="static">
            <Toolbar>
                <Styled.Wrapper>
                    <AndroidIcon />
                    <div>{itemsMenu}</div>
                    <IconButton color="inherit" aria-label="open drawer" edge="end">
                        <MenuIcon />
                    </IconButton>
                </Styled.Wrapper>
            </Toolbar>
        </AppBar>
    )
}
