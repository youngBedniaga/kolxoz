import express from 'express';

const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/" + 'index.html');

})

const server = app.listen(8080, () => {
    console.log(`Server is running at port 8080`);
});