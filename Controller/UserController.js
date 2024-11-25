import express from 'express'
import usersModel from '../Model/usersModel'
const getALLUser = async (req, res) => {
    let userList = await usersModel.getALLUser()
    res.render("home",{body:"listUser",rows: userList} )
}
const create = async (req,res) => {
    res.render("home",{body:"createUser"})
}

const creatUser = (req, res) => {
    res.render('home', {data: {title: 'Create New User', page: 'createNewUser', }} )
}
export default {getALLUser, creatUser,create}