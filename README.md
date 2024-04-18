# thirdweb Engine Deploy Locally

This is a community repository for deploying thirdweb Engine locally in easier way possible. This repository is maintained by thirdweb community team.

> [!WARNING]
> Use this for demo / preview purposes only. This is not recommended for production use. If you wanna use thirdweb Engine in production, try [cloud-hosted version](https://thirdweb.com/dashboard/engine?requestCloudHosted) or deploy a [self-hosted version](https://blog.warengonzaga.com/how-to-deploy-a-self-hosted-thirdweb-engine-on-railway-in-less-than-3-minutes).

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [NodeJS](https://nodejs.org/en/download/)
- [thirdweb API secret key](https://thirdweb.com/dashboard/api-keys)
- [Wallet address](https://portal.thirdweb.com/glossary/wallet)

## Usage

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory of the project.
4. Copy the contents of `.env.example` into `.env` and update it with your info.
5. Start Docker on your local machine.
6. Run `npm run deploy` to deploy the engine locally.
7. Wait for it to finish deploying.
8. Visit `http://localhost:3005` in your browser to view the engine.
9. That's it! You're now running the thirdweb engine locally.

