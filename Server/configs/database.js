const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todoappDB", { useNewUrlParser: true, useUnifiedTopology: true });