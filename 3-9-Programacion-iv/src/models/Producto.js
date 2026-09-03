import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    codigoSKU: {
        type: String,
        required: [true, 'El código SKU es obligatorio'],
        unique: true,
        uppercase: true,
        match: [/^[A-Z]{3}-\d{3}$/, 'El código SKU debe tener el formato AAA-000 (tres letras, guion, tres números)']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    stock: {
        type: Number,
        required: [true, 'El stock es obligatorio'],
        default: 0,
        min: [0, 'El stock no puede ser negativo'],
        validate: {
            validator: Number.isInteger,
            message: 'El stock debe ser un número entero'
        }
    },
    categoria: {
        type: String,
        enum: {
            values: ['PERIFERICOS', 'MONITORES', 'COMPONENTES', 'ACCESORIOS'],
            message: '{VALUE} no es una categoría válida'
        }
    },
    estadoActivo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export const Producto = mongoose.model('Producto', productoSchema);
