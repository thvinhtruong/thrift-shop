const mongoose = require('mongoose')
const product = require('../models/product.model')

const createProduct = async (product) => {
    const newProduct = new Product(product)
    return await newProduct.save()
}

const getProduct = async (id) => {
    return await product.findById(id)
}

const getProducts = async () => {
    return await product.find()
}

const updateProduct = async (id, product) => {
    return await product.findByIdAndUpdate(id, product)
}

const deleteProduct = async (id) => {
    return await product.findByIdAndDelete(id)
}

