/* eslint @typescript-eslint/no-var-requires: "off" */
import 'dotenv/config'


const config = {
    "accessToken": process.env.accessToken || "",
    "refreshToken": process.env.refreshToken || ""
}

export default config;