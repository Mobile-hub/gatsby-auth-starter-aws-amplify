// https://donaldmanuel.com/gatsby-authentication-cognito
// https://www.gatsbyjs.org/tutorial/authentication-tutorial/

const isBrowser = typeof window !== `undefined`

export const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()
  if (user) return !!user.username
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return
  setUser({})
  callback()
}
