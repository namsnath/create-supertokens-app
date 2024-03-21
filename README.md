![SuperTokens banner](https://raw.githubusercontent.com/supertokens/supertokens-logo/master/images/Artboard%20%E2%80%93%2027%402x.png)

# create-supertokens-app

<a href="https://supertokens.io/discord">
<img src="https://img.shields.io/discord/603466164219281420.svg?logo=discord"
    alt="chat on Discord"></a>

`create-supertokens-app` is a command line tool that lets you quickly setup and explore how SuperTokens integrates with other popular frameworks.

## Usage

### Using npm

Run the tool using the following command

`npx create-supertokens-app`

### Using Bun

Run the tool using the following command

`bun create supertokens-app@latest --manager=bun`

You can then select the tech stack that is relevant to you.

The tool creates a folder for the created application. You can follow the instructions the tool provides to then start the application.

## Additional usage options

When running the tool you can provide additional arguments.

| Option      | About                                                     |          Usage           |
| ----------- | --------------------------------------------------------- | :----------------------: |
| `appname`   | The folder name to be used when creating the application  |    `--appname=my-app`    |
| `recipe`    | The type of authentication you want to use                | `--recipe=emailpassword` |
| `frontend`  | The frontend stack to use for the application             |    `--frontend=react`    |
| `backend`   | The backend stack to use for the application              |     `--backend=node`     |
| `manager`   | Which package manager to use (npm, yarn, pnpm, bun)       |     `--manager=pnpm`     |
| `autostart` | Whether the CLI should start the project after setting up |    `--autostart=true`    |

## Contributing

Please refer to the [CONTRIBUTING.md](https://github.com/supertokens/create-supertokens-app/blob/master/CONTRIBUTING.md) file in this repo.

## Contact us

For any queries, or support requests, please email us at team@supertokens.io, or join our [Discord](https://supertokens.io/discord) server.

## Authors

Created with :heart: by the folks at SuperTokens.io.
