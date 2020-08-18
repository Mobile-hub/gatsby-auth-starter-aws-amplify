/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { setUser } from './src/utils/auth'

import Amplify, { Auth } from "aws-amplify"
import awsmobile from "./src/aws-exports"
import awsexternal from "./src/aws-imports"

Amplify.configure({ ...awsmobile, ...awsexternal })

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      const userInfo = {
        ...user.attributes,
        username: user.username
      }
      setUser(userInfo)
    })
    .catch(err => {
      window.localStorage.setItem('gatsbyUser', null)
    })
}
