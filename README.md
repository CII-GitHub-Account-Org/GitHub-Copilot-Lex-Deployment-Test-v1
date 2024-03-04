# My Lex Bot App

This is a Node.js application that deploys a Lex bot to AWS using the Serverless Framework and GitHub Actions.

## Project Structure

The project has the following structure:

- `.github/workflows/main.yml`: Defines the GitHub Actions workflow.
- `src/bot.json`: Contains the configuration for the Lex bot.
- `src/BotLocales/en_US/BotLocale.json` and `src/BotLocales/es_US/BotLocale.json`: Contains the locale-specific configurations for the Lex bot.
- `src/BotLocales/en_US/Intents` and `src/BotLocales/es_US/Intents`: Contains the intent configurations for the Lex bot in English and Spanish respectively.
- `src/BotLocales/en_US/SlotTypes` and `src/BotLocales/es_US/SlotTypes`: Contains the slot type configurations for the Lex bot in English and Spanish respectively.
- `src/index.js`: The entry point of the application.
- `serverless.yml`: Contains the configuration for the Serverless Framework.
- `package.json`: The configuration file for npm.

## Setup

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Set up your AWS credentials.
4. Deploy the application with `npx serverless deploy`.

## Deployment

The application is automatically deployed to AWS when changes are pushed to the main branch, thanks to the GitHub Actions workflow defined in `.github/workflows/main.yml`.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.