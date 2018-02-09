import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {getArtistRoute, deleteArtistFromDatabase} from '../../actions/thunk.actions.js'
import EditArtist from './EditArtist.js'
import NewArtist from './NewArtist.js'

class ArtistPage extends Component {

  componentWillMount() {
    this
      .props
      .getArtistRoute()
  }

  render() {
    return (
      <div>
        Artist Page:
        <br/>
        Which contains
        <br/>
        the nav bar
        <br/>
        Artist Tiles
        <br/>
        Link to make a new Artist

        <div>
          {this
            .props
            .artists
            .map((artist, i) => {
              return (
                <div key={i}>
                  <div>
                    artistname: {artist.name}
                  </div>
                  <div>
                    artist ID: {artist._id}
                  </div>
                  <div>
                    <EditArtist artist={artist}/>
                  </div>
                  <div>
                    <button onClick={() => this.props.deleteArtistFromDatabase(artist)}>
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {artists: state.artist}
}

export default connect(mapStateToProps, {push, getArtistRoute, deleteArtistFromDatabase})(ArtistPage)