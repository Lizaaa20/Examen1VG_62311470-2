const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
    default: "SIN-SKU"
  },
  descripcion: {
    type: String,
    required: true,
    default: "SIN DESCRIPCIÓN"
  },
  marca: {
    type: String,
    required: true,
    default: "GENÉRICA"
  },
  numeroEstante: {
    type: Number,
    required: true,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Producto", productoSchema);