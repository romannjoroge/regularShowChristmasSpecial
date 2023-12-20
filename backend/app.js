import Express from "express";
const app = Express();

// Creating a test route to see if server is reachable
app.get("/test", (req, res) => {
    res.send("I am reachable!");
})


// Configuring the API server to listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})