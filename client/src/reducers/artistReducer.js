function artistReducer(state = [], action) {
  switch (action.type) {

    case 'GET_ARTISTS':
      return [...action.artistsFromDatabase]

    case 'CREATE_ARTIST':
      return [
        ...state,
        action.newArtistData
      ]

    case 'EDIT_ARTIST':
      return updateObjectInArray(state, action)

    case 'DELETE_ARTIST':
      return state.filter(artist => artist._id !== action.artistToDeleteId)

    default:
      return state
  }
}

function updateObjectInArray(array, action) {
  return array.map((artist) => {
    if (artist._id !== action.editedArtistData.id) {
      return artist
    }
    return {
      ...artist,
      ...action.editedArtistData
    }
  })
}

export default artistReducer