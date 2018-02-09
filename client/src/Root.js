import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import SplashPage from './components/SplashPage.js'
import ArtistPage from './components/ArtistComponents/ArtistPage.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={SplashPage}/>
        <Route exact path="/artists" component={ArtistPage}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root