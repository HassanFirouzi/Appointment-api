# Hastane Randevu API

- CRUD endpointlerine sahip bir hastane randevu apisi
- Create (Oluştur)
- Read (Oku)
- Update (Güncelle)
- Delete (Sil)

- Randevuları Al
- Get: /api/appointments

- Kendi Randevularımı Al (Doktara Ait Randevular)
- Get: /api/appointments/:doktor_ismi

- Randevu Detayını Al
- Get: /api/appointments/:id

- Randevu oluştur
- Post: /api/appointments

- Randevuyu Güncelle
- Patch: /api/appointments/:id

- Randevuyu Sil
- Patch: /api/appointments/:id

# Teknolojiler

- express
- nodemon

# Klasör Yapısı

appointment_api/
|── controllers/ # İş Mantığı (CRUD işlemleri)
|── routes/ # Route tanımları
|── data/ # JSON veri dosyası (db)
|── middleware/ # Ara yazılımlar
|── utils/ # Yardımcı fonksiyonlar
|── server.js # Ana server dosyası

### 🖼️ Screen Gif

![](api.gif)
