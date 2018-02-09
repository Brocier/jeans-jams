import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import ArtistPage from './components/ArtistComponents/ArtistPage.js'
import ArtistProfile from './components/ArtistComponents/ArtistProfile.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ArtistPage}/>
        <Route exact path="/artist/:id" component={ArtistProfile}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root