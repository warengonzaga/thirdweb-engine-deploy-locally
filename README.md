# thirdweb Engine Deploy Locally

Let's deploy thirdweb Engine locally in easiest way possible. This repository is maintained by thirdweb community team.

> [!WARNING]
> Use this for demo / preview purposes only. This is not recommended for production use. If you wanna use thirdweb Engine in production, try [cloud-hosted version](https://thirdweb.com/dashboard/engine?requestCloudHosted) or deploy a [self-hosted version](https://blog.warengonzaga.com/how-to-deploy-a-self-hosted-thirdweb-engine-on-railway-in-less-than-3-minutes).

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [NodeJS](https://nodejs.org/en/download/)
- [thirdweb API secret key](https://thirdweb.com/dashboard/api-keys)
- [Wallet address](https://portal.thirdweb.com/glossary/wallet)

## Usage

1. Clone the repository.
2. Configure the `.env.example` file with your API secret key and wallet address.
3. Start Docker on your local machine.
4. Run `npm run start` to deploy the engine locally, wait for it to finish.
5. Visit `http://localhost:3005` in your browser to view the engine, that's it!
