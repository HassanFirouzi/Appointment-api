const express = require("express");
const {
  getAllAppointments,
  getAppointmentsByDoctor,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentDetail,
} = require("../controllers");

/*
 ! Route
 * Hangi URL'e hangi Methodla istek atıldığında hangi Controller fonksiyonun çalışıcağını belirle
*/

// Router > server.js dosyası dışarısında route tanımlamaya yarar
const router = express.Router();

// randevuları al
router.get("/api/appointments", getAllAppointments);

// doktara ait randevuları al
router.get("/api/appointments/doctor/:doctor", getAppointmentsByDoctor);

// bir randevunu detayını al
router.get("/api/appointments/:id", getAppointmentDetail);

// yeni randevu oluştur
router.post("/api/appointments", createAppointment);

// randeveyu güncelle
router.patch("/api/appointments/:id", updateAppointment);

// randevuyu sil
router.delete("/api/appointments/:id", deleteAppointment);

// server.js'e router'u tanıtmak için export et
module.exports = router;
