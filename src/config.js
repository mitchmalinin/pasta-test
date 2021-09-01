const configProd = {
  API_URI: "https://hedge-landing-server.herokuapp.com",
}
// development specific config goes here
const configDev = {
  API_URI: "http://localhost:8000",
}

const config = process.env.NODE_ENV === "development" ? configDev : configProd
export default config
