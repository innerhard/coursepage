import React from 'react'
import { NavigationDesktop, Card, Banner } from 'components'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { MenuMock, ProductMock } from 'mocks'

export const MainPage = () => {
    const allCategories = ProductMock.map(item => {
        const { id, description, title } = item
        return (
            <Grid key={id} item xs={4}>
                <Card
                    img="https://cdn.dribbble.com/users/255/screenshots/9536611/media/095b710681fef2f75c6768831b6587a0.jpg?compress=1&resize=400x300"
                    title={title}
                    description={description}
                />
            </Grid>
        )
    })
    return (
        <>
            <NavigationDesktop {...MenuMock} />
            <Banner
                img="https://cdn.dribbble.com/users/3281732/screenshots/8616916/media/a7e39b15640f8883212421d134013e38.jpg?compress=1&resize=1600x1200"
                title="Забота о друге"
                description="Лучшие производители, составим рацион с еженедельной доставкой!"
                buttonDescription="Оформи подписку"
            />
            <Container>
                <Grid container spacing={3}>
                    {allCategories}
                </Grid>
            </Container>
        </>
    )
}
