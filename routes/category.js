import express from 'express'
import slugify from 'slugify'

import Category from '../models/category.js'

const router = express.Router()

// INDEX
router.get('/categories', async (req, res) => {
    try {
        const all = await Category.find({})
        res.json(all)
    } catch (err) {
        console.log(err)
        return res.status(400).json(err.message)
    }
})
// SHOW
router.get('categories/:categoryId', async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId)
        res.json(category)
    } catch (err) {
        console.log(err)
        return res.status(400).json(err.message)
    }
})

// CREATE
router.post('/categories', async (req, res) => {
    try {
        const { name } = req.body
        console.log(name)
        if (!name.trim()) {
            return res.json({ error: 'Name is required!'})
        }
        const existingCategory = await Category.findOne({name})
        if (existingCategory) {
            return res.json({error: 'Category already exists!'})
        }
        const category = await new Category({ name, slug: slugify(name) }).save()
        res.json(name)
    } catch (err) {
        console.log(err)
        return res.status(400).json(err)
    }
})

// UPDATE

// DELETE

export default router