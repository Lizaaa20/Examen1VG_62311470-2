
const Producto = require('../Models/producto');

// CREATE - POST 

async function create(req, res) {
    try {
        const producto = new Producto({
            sku: req.body.sku || "SIN-SKU",
            descripcion: req.body.descripcion || "SIN DESCRIPCIÓN",
            marca: req.body.marca || "GENÉRICA",
            numeroEstante: req.body.numeroEstante || 0
        });

        const productoGuardado = await producto.save();
        res.status(201).json(productoGuardado);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// GET
async function show(req, res) {
    try {
        const productos = await Producto.find();

        if (productos.length === 0) {
            return res.status(204).json({ message: "NO CONTENT" });
        }

        res.json(productos);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// GET 

async function showOne(req, res) {
    try {
        const producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(producto);

    } catch (err) {
        res.status(400).json({ error: "ID inválido" });
    }
}


// UPDATE - PUT /

async function update(req, res) {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            {
                sku: req.body.sku,
                descripcion: req.body.descripcion,
                marca: req.body.marca,
                numeroEstante: req.body.numeroEstante
            },
            { new: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(productoActualizado);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// DELETE 
async function deleted(req, res) {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);

        if (!productoEliminado) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto eliminado correctamente" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    create,
    show,
    showOne,
    update,
    deleted
};