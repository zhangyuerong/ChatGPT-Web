import mysql from 'mysql2/promise'
// 创建 MySQL 数据库连接池
const pool = mysql.createPool({
  host: 'containers-us-west-154.railway.app',
  port: 7700,
  user: 'root',
  password: 'bahFUX2faNAVxvEe3uTV',
  database: 'chatgpt', // 所连接的数据库名
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

// 测试数据库连接
// pool.getConnection()
//   .then(connection => {
//     console.log('Connected to MySQL database.');
//     connection.release();
//   })
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });

// 测试数据库连接
// async function getConnection() {
//   return await pool.getConnection()
//   .then(connection => {
//     console.log('Connected to MySQL database.');
//     connection.release();
//   })
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });
// }
async function getConnection() {
  return await pool.getConnection()
}
export function disconnect() {
  pool.end()
}
export { getConnection }
