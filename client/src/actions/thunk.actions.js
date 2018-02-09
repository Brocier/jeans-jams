import axios from 'axios'

export function sendArtistsToState(artistsFromDatabase) {
  return {type: 'GET_ARTISTS', artistsFromDatabase}
}

export function getArtistRoute() {
  return function (dispatch) {
    return axios
      .get('/api/artists')
      .then((response) => {
        dispatch(sendArtistsToState(response.data))
      })
  }
}

export function sendNewArtistToState(newArtistData) {
  return {type: 'CREATE_ARTIST', newArtistData}
}

export function sendNewArtistToDatabase(newArtistInfo) {
  return function (dispatch) {
    return axios
      .post('/api/artists', newArtistInfo)
      .then((response) => {
        dispatch(sendNewArtistToState(response.data))
      })
  }
}

export function editedArtistToState(editedArtistData) {
  return {type: 'EDIT_ARTIST', editedArtistData}
}

export function editArtistInDatabase(editedArtistInfo) {
  return function (dispatch) {
    return axios
      .patch(`/api/artists/${editedArtistInfo.id}`, editedArtistInfo)
      .then((response) => {
        dispatch(editedArtistToState(editedArtistInfo))
      })
  }
}

export function deleteArtistFromState(artistToDeleteId) {
  return {type: 'DELETE_ARTIST', artistToDeleteId}
}

export function deleteArtistFromDatabase(artistToDeleteFromDatabase) {
  return function (dispatch) {
    return axios
      .delete(`/api/artists/${artistToDeleteFromDatabase._id}`)
      .then((response) => {
        dispatch(deleteArtistFromState(artistToDeleteFromDatabase._id))
      })
  }
}