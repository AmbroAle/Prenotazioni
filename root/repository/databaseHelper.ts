import mysql, { FieldPacket, Pool, PoolConnection, PreparedStatementInfo, ResultSetHeader, RowDataPacket} from 'mysql2/promise';
export default class DatabaseHelper {
    private static instance: DatabaseHelper;
    private pool: Pool;

    private constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',  
            user: 'root',       
            password: '',       
            database: 'Prenotazioni', 
        });
    }

    public static getInstance(): DatabaseHelper {
        if (!DatabaseHelper.instance) {
            DatabaseHelper.instance = new DatabaseHelper();
        }
        return DatabaseHelper.instance;
    }

    public async executeQuery(sql : string , param : any[]) : Promise<ResultSetHeader> {
        const conn : PoolConnection = await this.pool.getConnection();
        const [result]: [ResultSetHeader, FieldPacket[]] = await conn.execute(sql, param);
        conn.release();
        return result;
    }

    public async fetchQuery(sql : string, param : any[]) : Promise<RowDataPacket[]> {
        const conn : PoolConnection = await this.pool.getConnection();
        const [result] : [RowDataPacket[],FieldPacket[]] = await conn.execute(sql,param);
        return result;
    }
}