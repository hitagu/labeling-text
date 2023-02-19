# Finding Similarity Between Texts

This app provides a way for users to find similar texts. As users enter new text, the app identifies which of the already-seen texts are most similar. This app uses the [string-similarity package](https://www.npmjs.com/package/string-similarity), and is built using [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). The code and instructions below were inspired by OpenAI's Node.js tutorial [here](https://github.com/openai/openai-quickstart-node). Our primary goal for this application is to allow doctors to have quick access to similar patient records when making notes.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Navigate to the directory on your computer where you want to save the project, and clone this repository
   ```bash
   git clone https://github.com/hitagu/labeling-text
   ```

3. Navigate into the project directory

   ```bash
   cd labeling-text
   ```

4. Install the requirements

   ```bash
   npm install
   ```

5. Make a copy of the example environment variables file and save in .env

   On Linux systems: 
   ```bash
   cp .env.example .env
   ```
   On Windows:
   ```powershell
   copy .env.example .env
   ```
6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file. Your .env file should look like this: 
   ```
   OPENAI_API_KEY='YOUR KEY HERE'
   ```

7. Run the app

   ```bash
   npm run dev
   ```

8. You should now be able to access the app at [http://localhost:3000](http://localhost:3000). Feel free to text out the app with different types of inputs. We have provided a text file appointments.txt, auto-generated with ChatGPT, with details about five cardiologist appointments. Try individually entering them into the program and checking which ones the program finds are most similar.