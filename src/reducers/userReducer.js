export default function userReducer( state=[], action ){
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload
    case 'CREATE_USER':
      return action.payload
    case 'ADD_USER':
      return state
    case 'FETCH_USER':
      return action.payload.data
    default:
      return state
  }
}
