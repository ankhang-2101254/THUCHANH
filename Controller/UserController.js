import express from 'express'
import usersModel from '../Model/usersModel'
const getALLUser = async (req, res) => {
    let userList = await usersModel.getALLUser()
    res.render('ListUser', {data: {title: 'List User', page: 'listUser', rows: userList}} )
}
const creatUser = (req, res) => {
    res.render('home', {data: {title: 'Create New User', page: 'createNewUser', }} )
}
export default {getALLUser, creatUser}