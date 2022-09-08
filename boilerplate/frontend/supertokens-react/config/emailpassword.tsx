import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

export const SuperTokensConfig = {
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
        EmailPassword.init({
            emailVerificationFeature: {
                mode: "REQUIRED",
            },
        }),
        Session.init(),
    ],
}

// TODO: Add dashboard recipe as well for all frontends

export const AuthWrapper = EmailPassword.EmailPasswordAuth;