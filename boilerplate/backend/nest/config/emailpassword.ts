import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";

export const appInfo = {
    // Learn more about this on https://supertokens.com/docs/thirdpartypasswordless/appinfo
    appName: "ST",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
}

export const connectionUri = "https://try.supertokens.com";

export const recipeList = [
    EmailPassword.init(),
    Session.init(),
];