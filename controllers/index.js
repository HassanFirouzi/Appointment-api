const fs = require("fs");
const crypto = require("crypto");
const write = require("../utils/write");

/*
 ! Controller
 * iş mantığı (business logic) içeren fonksiyonlardır.
 * HTTP isteğini alır (req)
 * Gerekli işlemleri yapar (veri okuma,yazma,güncelleme,silme)
 * HTTP yanıtı döndürür (res)
*/

// randevu verilini json dosyasından al (json ---> js)
let appointments = JSON.parse(fs.readFileSync(`${__dirname}/../data/db.json`, "utf-8"));

exports.getAllAppointments = (req, res) => {
  res.json({ message: "Randevular listelendi", results: appointments.length, data: appointments });
};

exports.getAppointmentsByDoctor = (req, res) => {
  // url'de parametre olarak bulunan doktor'un ismine eşir
  const { doctor } = req.params;

  // doctor'a ait olan randevuları al
  const filtered = appointments.filter((i) => i.doctor === doctor);

  // client'a cevap gönder
  res.json({ message: "Doktara ait randevular listelendi", results: filtered.length, data: filtered });
};

exports.getAppointmentDetail = (req, res) => {
  // urlden id parametresini al
  const { id } = req.params;

  // randevular arasından id ile eşleşeni bul
  const appointment = appointments.find((i) => i.id === id);

  // client'a cevap gönder
  res.json({ message: "Randevu detayları alındı", data: appointment });
};

exports.createAppointment = (req, res) => {
  // backendin oluşturması gereken verileri hazırla
  const id = crypto.randomUUID();
  const createdAt = new Date().getTime();
  const updatedAt = new Date().getTime();

  // bodyden gelen verilerin arasına yukarıdaki verileri ekle
  // ... (spread opeator) ile body bölümünden gelen verileri yeni nesne içerisine dağıttık
  const newAppointment = { ...req.body, id, createdAt, updatedAt };

  // yeni randevuyu, randevular dizisine ekle
  appointments.push(newAppointment);

  // json dosyasını güncelle
  write(appointments);

  // client'a cevap gönder
  res.status(201).json({ message: "Randevu oluşturuldu", data: newAppointment });
};

exports.updateAppointment = (req, res) => {
  // güncellenicek randevu id'sini url parametresinden al
  const { id } = req.params;

  // id'sini bildiğimiz güncellenicek randevunun bütün verilerini al
  const index = appointments.findIndex((i) => i.id === id);

  // isteğin body kısmı ile gelen alanları randevu nesnesinde güncelledik
  const updated = { ...appointments[index], ...req.body, updatedAt: new Date().getTime() };

  // dizideki ilgili randevuyu güncelle
  appointments[index] = updated;

  // json dosyasını güncelle
  write(appointments);

  // client'a cevap gönder
  res.json({ message: "Randevu güncelle", data: updated });
};

exports.deleteAppointment = (req, res) => {
  // silinecek randevunun id'sine eriş
  const { id } = req.params;

  // id'si bilnen randevuyu diziden kaldır
  appointments = appointments.filter((i) => i.id !== id);

  // randevu kaldırıldı
  res.status(204).json({ message: "Randevu kaldırldı" });
};
