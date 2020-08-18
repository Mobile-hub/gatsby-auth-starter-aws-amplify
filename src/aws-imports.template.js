/* eslint-disable */
// WARNING: USE A COPY OF THIS FILE CHANGING NAME FROM `aws-imports.template.js` TO `aws-imports.js`
// Reference: https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js#manual-setup-import-existing-rest-api

import awsmobile from "./aws-exports"

const awsexternal = {
  // OPTIONAL - if your API requires authentication
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    //identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
    identityPoolId: awsmobile.aws_cognito_identity_pool_id,
    // REQUIRED - Amazon Cognito Region
    //region: 'XX-XXXX-X',
    region: awsmobile.aws_project_region,
    // OPTIONAL - Amazon Cognito User Pool ID
    //userPoolId: 'XX-XXXX-X_abcd1234',
    userPoolId: awsmobile.aws_user_pools_id,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    //userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',
    userPoolWebClientId: awsmobile.aws_user_pools_web_client_id,
    mandatorySignIn: true,
  },
  API: {
    endpoints: [
      {
        name: "Custom Name",
        endpoint: "https://api-gateway-endpoint/manually/stage",
        custom_header: async () => {
          return {
            auth: "token",
            "x-api-key": "****************************************",
          } // Not recommended to hardcoded an api key
          // Alternatively, with Cognito User Pools use this (or right header: Authorization)
          // return { auth: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
          // return { auth: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
        },
      },
    ],
  },
}

export default awsexternal
