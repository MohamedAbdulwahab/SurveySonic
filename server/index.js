const express = require('express');
const app = express();

app.use('/', mainRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
