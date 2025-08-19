const express = require("express")
const cors = require("cors")

function healthcheckApp() {
    return Math.random() > .5 ? true : false
}

function healthcheckDatabase() {
    return Math.random() > .5 ? true : false
}

function healthcheckKafka() {
    return Math.random() > .5 ? true : false
}

const app = express()

app.use(cors())

app.get("/healthcheck", (req, res) => {
    const statusApp = healthcheckApp()
    const statusDatabase = healthcheckDatabase()
    const statusKafka = healthcheckKafka()

    const status = statusApp && statusDatabase && statusKafka ? 200 : 500

    res.status(status).json({
        status_app: statusApp,
        status_kafka: statusKafka,
        status_db: statusDatabase
    })
})

app.get("/", (req, res) => {
    res.status(200).json({
        message: "all's ok"
    })
})

app.listen(3000, () => console.log("Server is running on port 3000"))