const Product = require('../models/Product')

module.exports = class ProductController {
    static async showProducts(req, res) {
        const products = await Product.find().lean()

        res.render('products/all', { products })
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static async createProductPost(req, res) {
        try {
            const name = req.body.name
            const price = req.body.price
            const image = req.body.image
            const description = req.body.description

            const product = new Product({ name, price, description, image })

            await product.save()

            console.log('Produto Cadastrado!')
            res.redirect('/products')
        } catch (e) {
            console.log(`Erro: ${e.message}`)
        }


    }

    static async showProductById(req, res) {
        const id = req.params.id
        try {
            const product = await Product.findById(id).lean()
            console.log('Produto encontrado')
            res.render('products/product', { product })
        } catch (e) {
            console.log(`Erro: ${e.message}`)
            res.redirect('/products')
        }
    }

    static async deleteProductByIdPost(req, res) {
        const id = req.body.id

        try {
            await Product.deleteOne({ _id: id })
            console.log('Produto excluido!')
        } catch (e) {
            console.log(`Erro: ${e.message}`)
        } finally {
            res.redirect('/products')
        }
    }

    static async updateProduct(req, res) {
        const id = req.params.id
        try {
            const product = await Product.findById(id).lean()
            console.log('Produto Encontrado')
            res.render('products/edit', { product })
        } catch (e) {
            console.log(`Erro: ${e.message}`)
            res.redirect('/products')
        }

    }

    static async updateProductSave(req, res) {
        const id = req.body.id
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description


        try {
            const product = { name, image, price, description }
            await Product.updateOne({ _id: id }, product)
            console.log('Produto Atualizado')
        } catch (e) {
            console.log(`Erro: ${e.message}`)
        } finally {
            res.redirect('/products')
        }
    }
}