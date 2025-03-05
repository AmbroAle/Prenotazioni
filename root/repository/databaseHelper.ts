import mysql, { Pool, PoolConnection } from 'mysql2/promise';
import { string } from 'zod';

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
        const conn = await this.pool.getConnection();
        const sql = 'SELECT * FROM `Prenotazione` WHERE MATCH (Utente_Email) AGAINST (? IN NATURAL LANGUAGE MODE)';
        const statement = await conn.prepare(sql);
        const [rows, fields] = await statement.execute([email]);
        conn.release();
        return rows;
        
    }

    public async createAppointments(data: string, idTipo: number, orario: string, email: string) {
        const conn = await this.pool.getConnection();
        const sql = 'INSERT INTO `Prenotazione` (`Data`,`Tipo_idTipo`,`Fascia_Oraria_Da`, `Utente_Email`) VALUES (?, ?, ?, ?)';
        const statement = await conn.prepare(sql);
        const result = await statement.execute([data, idTipo,orario,email]);
        conn.release();
        return result;
    }

    public async deleteAppointment(idTipo: number, orario: string, data: string) {
        const conn = await this.pool.getConnection();
        const sql = 'DELETE FROM `Prenotazione` WHERE `Tipo_idTipo` = ? and `Fascia_Oraria_Da` = ? and `Data` = ?';
        const statement = await conn.prepare(sql);
        const result = await statement.execute([idTipo,orario,data]);
        conn.release();
        return result;
       
    }

    public async modifyAppointment(idTipo: number, orario: string, data: string, newData: string) {
        const conn = await this.pool.getConnection();
        const sql = 'UPDATE `Prenotazione` SET `Data` = ? WHERE `Tipo_idTipo` = ? and `Fascia_Oraria_Da` = ? and `Data` = ?';
        const statement = await conn.prepare(sql);
        const result = await statement.execute([newData, idTipo, orario, data]);
        conn.release();
        return result;
    }
}