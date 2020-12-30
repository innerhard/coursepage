import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet/es/Helmet'


import { App } from './App'

library.add(fas)

render(
    <>
        <Helmet>
            <title>InSchool: Open lessons</title>
        </Helmet>
        <App />
    </>,
    document.getElementById('root'),
)
