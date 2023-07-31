const express = require('express');
const mongoose = require('mongoose');
const config = require("./config/default.json")
const cors = require('cors');
const audioRouter = require('./routes/Audios.routes')

const PORT = config.port
const app = express();
app.use(cors());
app.use(express.json())
app.use(audioRouter)

mongoose.connect(config.MongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>{
    console.log("Successfully connected")
  });


app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
