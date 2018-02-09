function userReducer(state = [
  {
    username: 'Gandalf',
    _id: '1'
  }
], action) {
  switch (action.type) {

    case 'GET_ARTISTS':
      return [...action.usersFromDatabase]

    case 'CREATE_ARTIST':
      return [
        ...state,
        action.newUserData
      ]

    case 'EDIT_ARTIST':
      return updateObjectInArray(state, action)

    case 'DELETE_ARTIST':
      return state.filter(user => user._id !== action.userToDeleteId)

    default:
      return state
  }
}

function updateObjectInArray(array, action) {
  return array.map((user) => {
    if (user._id !== action.editedUserData.id) {
      return user
    }
    return {
      ...user,
      ...action.editedUserData
    }
  })
}

export default userReducer