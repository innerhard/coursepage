import React from 'react'
import { NavigationDesktop, Card, Banner } from 'components'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { MenuMock } from 'mocks'

export const MainPage = () => {
    return (
        <>
            <NavigationDesktop {...MenuMock} />
            <Banner
                img="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg"
                title="title в карте"
                description="awdawdawdaw"
            />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper elevation={3} style={{ borderRadius: '24px' }}>
                            <Card
                                img="https://cdn.dribbble.com/users/255/screenshots/9536611/media/095b710681fef2f75c6768831b6587a0.jpg?compress=1&resize=400x300"
                                title="title в карте"
                                description="awdawdawdaw"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Card
                            img="https://cdn.dribbble.com/users/255/screenshots/9536611/media/095b710681fef2f75c6768831b6587a0.jpg?compress=1&resize=400x300"
                            title="title в карте"
                            description="awdawdawdaw"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
