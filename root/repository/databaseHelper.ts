import mysql, { OkPacket, OkPacketParams, Pool, PoolConnection, PreparedStatementInfo, PrepareStatementInfo, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export default class DatabaseHelper {
    private static instance: DatabaseHelper;
    private pool: Pool;

    private constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',  
            user: 'root',       
            password: '',       
            database: 'Prenotazioni', 
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    public static getInstance(): DatabaseHelper {
        if (!DatabaseHelper.instance) {
            DatabaseHelper.instance = new DatabaseHelper();
        }
        return DatabaseHelper.instance;
    }

    public async getAppointments(email: string) {
        const conn : PoolConnection = await this.pool.getConnection();
        const sql : string = 'SELECT * FROM `Prenotazione` WHERE MATCH (Utente_Email) AGAINST (? IN NATURAL LANGUAGE MODE) LIMIT 1 OFFSET 0';
        const statement : PreparedStatementInfo  = await conn.prepare(sql);
        const [result] = await statement.execute([email]);
        conn.release();
        return result;
        
    }

    public async createAppointments(data: string, idTipo: number, orario: string, email: string) {
        const conn : PoolConnection = await this.pool.getConnection();
        const sql : string = 'INSERT INTO `Prenotazione` (`Data`,`Tipo_idTipo`,`Fascia_Oraria_Da`, `Utente_Email`) VALUES (?, ?, ?, ?)';
        const statement : PreparedStatementInfo = await conn.prepare(sql);
        const result = await statement.execute([data, idTipo,orario,email]);
        conn.release();
        return result;
    }

    public async deleteAppointment(idTipo: number, orario: string, data: string) {
        const conn : PoolConnection = await this.pool.getConnection();
        const sql : string = 'DELETE FROM `Prenotazione` WHERE `Tipo_idTipo` = ? and `Fascia_Oraria_Da` = ? and `Data` = ?';
        const statement : PreparedStatementInfo = await conn.prepare(sql);
        const result = await statement.execute([idTipo,orario,data]);
        conn.release();
        return result;
       
    }

    public async modifyAppointment(idTipo: number, orario: string, data: string, newData: string) {
        const conn : PoolConnection = await this.pool.getConnection();
        const sql : string = 'UPDATE `Prenotazione` SET `Data` = ? WHERE `Tipo_idTipo` = ? and `Fascia_Oraria_Da` = ? and `Data` = ?';
        const statement : PreparedStatementInfo = await conn.prepare(sql);
        const result = await statement.execute([newData, idTipo, orario, data]);
        conn.release();
        return result;
    }
}