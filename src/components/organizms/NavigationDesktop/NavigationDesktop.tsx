import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PetsIcon from '@material-ui/icons/Pets'
import Drawer from '@material-ui/core/Drawer'
import { Styled } from './styled'

type Items = {
    id: number
    element: string
}
type DataProps = {
    items: Items[]
}

export const NavigationDesktop: FC<DataProps> = data => {
    const [message, setMessage] = React.useState(false)
    const itemsMenu = data.items.map(item => {
        const { id, element } = item
        return (
            <Button color="inherit" key={id}>
                {element}
            </Button>
        )
    })
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Styled.Wrapper>
                        <PetsIcon />
                        <div>{itemsMenu}</div>
                        <IconButton
                            onClick={() => setMessage(!message)}
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Styled.Wrapper>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={message}
                classes={{
                    paper: '320px',
                }}
            >
                <div>Я знаю что я делаю</div>
            </Drawer>
        </>
    )
}
