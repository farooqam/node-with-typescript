import app from "./app";

const port = process.env.PORT || 5678;

app.listen(port, (err) => {
    if (err){
        return console.log(err);
    }

    return console.log(`Server is listening on port ${port}`);
});
