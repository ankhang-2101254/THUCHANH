import pool from '../connectDB'
const getALLUser = async () => {
    const [rows, fields] = await pool.execute ('SELECT * FROM `users`')
    return rows
}
const createNewUser = () => {
}
export default {getALLUser, createNewUser}