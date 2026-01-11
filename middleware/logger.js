const logger = (req, res, next) => {
  // isteğin detaylarını console'a yaz
  console.log("‼️ İstek Geldi ‼️");
  console.log("Method: " + req.method + " URL: " + req.url);

  // sonraki adıma geçmesine izin ver
  next();
};

module.exports = logger;
