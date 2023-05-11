declare namespace NodeJS {
    interface ProcessEnv {
        PORT: number
        UI_URL: string
        NODE_ENV: string
        GOOGLE_APPLICATION_CREDENTIALS: string
        DB_DIALECT: string
        DB_HOST: string
        DB_PORT: number
        DB_NAME: string
        DB_USER: string
        DB_PASSWORD: string
    }
}