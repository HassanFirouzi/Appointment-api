const express = require("express");
const appointmentRoutes = require("./routes");
const logger = require("./middleware/logger");


// kurulum
const app = express();
const PORT = 3000;

// middleware'ler
// isteklerin body/header bölümlerini işleyen mw (json ------> js)
app.use(express.json());

// logger arayazılımını aktif hale getir
app.use(logger);

// route endpotinlerini tanıtma
app.use(appointmentRoutes);

// dilinicek protu belirle
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunu dinlemeye başladı`);
});
