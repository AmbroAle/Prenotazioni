import DatabaseHelper from './databaseHelper';
import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
const db = DatabaseHelper.getInstance();
export default class AppointmentRepository {
    private static instance: AppointmentRepository;
    
    private constructor() {

    }

    public static getInstance(): AppointmentRepository {
        if (!AppointmentRepository.instance) {
            AppointmentRepository.instance = new AppointmentRepository();
        }
        return AppointmentRepository.instance;
    }

    public async getAppointments(email: string, page: number): Promise<RowDataPacket[]> {
        const sql = 'SELECT * FROM `Prenotazione` WHERE MATCH (Utente_Email) AGAINST (? IN NATURAL LANGUAGE MODE) AND Id_Prenotazione >= ? ORDER BY Id_Prenotazione LIMIT 10';
        return db.fetchQuery(sql, [email, page]);
    }

    public async createAppointments(data: string, idTipo: number, orario: string, email: string): Promise<ResultSetHeader> {
        const sql = 'INSERT INTO `Prenotazione` (`Data`,`Tipo_idTipo`,`Fascia_Oraria_Da`, `Utente_Email`) VALUES (?, ?, ?, ?)';
        return db.executeQuery(sql, [data, idTipo, orario, email]);
    }

    public async deleteAppointment(idTipo: number, orario: string, data: string): Promise<ResultSetHeader> {
        const sql = 'DELETE FROM `Prenotazione` WHERE `Tipo_idTipo` = ? AND `Fascia_Oraria_Da` = ? AND `Data` = ?';
        return db.executeQuery(sql, [idTipo, orario, data]);
    }

    public async modifyAppointment(idTipo: number, orario: string, data: string, newData: string): Promise<ResultSetHeader> {
        const sql = 'UPDATE `Prenotazione` SET `Data` = ? WHERE `Tipo_idTipo` = ? AND `Fascia_Oraria_Da` = ? AND `Data` = ?';
        return db.executeQuery(sql, [newData, idTipo, orario, data]);
    }
}