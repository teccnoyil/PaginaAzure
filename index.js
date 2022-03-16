const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const productos = [
  {
    id: 1,
    nombre: "Taladro Percutor Atornillador Inalambrico Bosch",
    precio: 2828,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_986660-MLA44986030012_022021-F.webp",
    stock: 3,
  },

  {
    id: 2,
    nombre: "Multimetro Digital Prof. 500 V Truper",
    precio: 415,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_857229-MLM45279445149_032021-F.webp",
    stock: 3,
  },

  {
    id: 3,
    nombre: "Juego Herramientas 133 Pz Pretul",
    precio: 1015,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_800138-MLM43147566469_082020-F.webp",
    stock: 3,
  },

  {
    id: 4,
    nombre: "Mini Esmeriladora De 4-1/2",
    precio: 657,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_724380-MLM31231996148_062019-F.webp",
    stock: 3,
  },

  {
    id: 5,
    nombre: "Juego Pinzas Electricista Chofer Corte 4 Pz 8 Y 6",
    precio: 325,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_716925-MLM44794906196_022021-F.webp",
    stock: 3,
  },

  {
    id: 6,
    nombre: "Bomba periférica Agua negra 60Hz",
    precio: 325,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_941647-MLA46315754198_062021-F.webp",
    stock: 3,
  },

  {
    id: 7,
    nombre: "TRotoMartillo 1/2', industrial, 650 W",
    precio: 1500,
    imagen:
      "https://cdn.shopify.com/s/files/1/1431/6668/products/15683_1024x1024.jpg?v=1594827565",
    stock: 3,
  },

  {
    id: 8,
    nombre: "Pico Forjado 2.5 Lb   Fibra De Vidrio",
    precio: 279,
    imagen:
      "https://cdn.shopify.com/s/files/1/1431/6668/products/100434_1024x1024.jpg?v=1594827622",
    stock: 3,
  },

  {
    id: 9,
    nombre: "Googles Profesionales - Impactos Y Salpicaduras",
    precio: 192,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_794538-MLM44035076693_112020-O.webp",
    stock: 3,
  },

  {
    id: 10,
    nombre: "Desbrozadora A Gasolina 17'' Corte Curva",
    precio: 2350,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_776482-MLM47588517572_092021-O.webp",
    stock: 3,
  },

  {
    id: 11,
    nombre: "Carretilla, Llanta Neumática Reforzada",
    precio: 525,
    imagen:
      "https://cdn.shopify.com/s/files/1/1431/6668/products/11740_29844601086_o_1024x1024.jpg?v=1475074641",
    stock: 3,
  },

  {
    id: 12,
    nombre: "Extintor recargable tipo ABC 1kg",
    precio: 425,
    imagen:
      "https://cdn.shopify.com/s/files/1/1431/6668/products/EXT-1_1024x1024.jpg?v=1614299678",
  },
];

app.get("/api/productos", (req, res) => {
  res.send(productos);
});
 
app.use("/", express.static("Front"));

app.listen(port, () =>{
  console.log(`Example app listening at http://localhost:${port}`);
});

  