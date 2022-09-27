const mongoose = require('mongoose')
const user = require('../models/user.model')

const createUser = async (user) => {
    const newUser = new User(user)
    return await newUser.save()
}

const getUser = async (id) => {
    return await user.findById(id)
}

const getUsers = async () => {
    return await user.find()
}

const updateUser = async (id, user) => {
    return await user.findByIdAndUpdate(id, user)
}

const deleteUser = async (id) => {
    return await user.findByIdAndDelete(id)
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}

