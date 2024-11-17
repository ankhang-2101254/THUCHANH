import pool from '../connectDB'
const getALLUser = async () => {
    const [rows, fields] = await pool.execute ('SELECT * FORM `users`')
    return rows
}
const createNewUser = () => {
}
export default {getALLUser, createNewUser}