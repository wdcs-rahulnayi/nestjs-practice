# Setting Up the Code

Follow these steps to set up and run the application:

1. **Initialize Environment Content**: 
    - Copy the `.env.example` file and rename it to `.env`.
    ```bash
    cp .env.example .env
    ```

2. **Install Dependencies**:
    - Install all required dependencies using npm.
    ```bash
    npm install
    ```

3. **Start MongoDB Server**:
    - Before running the application, ensure that your MongoDB server is running.
    - If you're on Linux, start the MongoDB service using the following command:
    ```bash
    sudo service mongod start
    ```

4. **Seed Initial Data**:
    - Once MongoDB is up and running, seed the initial data by executing:
    ```bash
    npm run seed
    ```
    Note: You might encounter some errors during this step. This is expected and can be resolved by following the subsequent steps.

5. **Run the Application**:
    - Finally, start the application by running:
    ```bash
    yarn run dev
    ```
    This command will start the development server and you should be able to access the application.

By following these steps, you should be able to successfully set up and run the application. If you encounter any issues, refer to the error messages for troubleshooting or consult the documentation.
