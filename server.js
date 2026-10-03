const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    projeto: "Impulsa",
    mensagem: "Impulsa está funcionando!"
  });
});

app.listen(PORT, () => {
  console.log(`Impulsa rodando na porta ${PORT}`);
});
