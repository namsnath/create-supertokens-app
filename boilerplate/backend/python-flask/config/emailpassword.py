from supertokens_python.recipe import emailpassword, session
from supertokens_python import (
    InputAppInfo,
    SupertokensConfig,
)

# this is the location of the SuperTokens core.
supertokens_config=SupertokensConfig(connection_uri="https://try.supertokens.io")

app_info=InputAppInfo(
    app_name="Supertokens",
    api_domain="http://localhost:3001",
    website_domain="http://localhost:3000",
)

framework="flask"

# recipeList contains all the modules that you want to
# use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
recipe_list=[
    session.init(),
    emailpassword.init()
]