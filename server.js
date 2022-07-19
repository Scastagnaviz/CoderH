const express = require("express");
const app = express();


 
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
})


app.listen(PORT, (err) => {
    if (!err) {
      console.log("server escuchando en el puerto " + PORT);
    }
  });
  