import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import App from './App'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

library.add(fas, faArrowRight)

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
