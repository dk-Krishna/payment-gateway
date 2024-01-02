import app from "./app.js";

const port = process.env.PORT;

// testing route
app.get("/", (req, res)=> {
    res.send("Working fine...");
});

app.listen(port, ()=> {
    console.log(`Server is working on http://localhost:${port}`);
});