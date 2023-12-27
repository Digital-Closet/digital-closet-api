import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxLength: 50,
        },
        slug: {
            type: String,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
            maxLength: 500,
        },
        price: {
            type: Number,
            trim: true,
            required: false,
        },
        category: {
            type: Schema.ObjectId,
            ref: 'Category',
            required: true,
        },
        sold: {
            type: Boolean,
            default: false,
        },
        photo: {
            data: Buffer,
            contentType: String,
        }
    }, {
        timestamps: true
    }
)

export default mongoose.model('Product', productSchema)