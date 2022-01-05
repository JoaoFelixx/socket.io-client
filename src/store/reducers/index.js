const INITIAL_STATE = {
  language: 'pt',
  theme: 'white',
  username: 'Jotaro',
  room: '',
  showChat: false,
} 

export const reducer = (state = INITIAL_STATE, action) => {

  if (action.type === 'SET_THEME') return {
    ...state,
    ...action.theme
  }

  if (action.type === 'SET_LANGUAGE') return {
    ...state,
    ...action.language
  }

  if (action.type === 'SET_USERNAME_AND_ROOM') return {
    ...state,
    ...action.user
  }
  
  return state  
}