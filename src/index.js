const express = require('express');
const countryRoutes = require('./routes/country.routes');

const app = express();

app.use(express.json());

app.use('/api', countryRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});