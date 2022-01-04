export const toggleLanguage = language => {
  return {
    type: 'SET_LANGUAGE',
    language
  }
} 

export const toggleTheme = theme => {
  return {
    type: 'SET_THEME',
    theme
  }
}

export const toggleUsernameAndRoom = user => {
  return {
    type: 'SET_USERNAME_AND_ROOM',
    user
  }
}