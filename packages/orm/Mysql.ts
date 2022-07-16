import { ConnectionOptions } from "mysql2"
import mysql from "mysql2/promise"

export default class Mysql {
  private conn?: mysql.Connection
  private options?: ConnectionOptions

  constructor(options: ConnectionOptions){
    this.options = options
  }

  async connect() {
    if(!this.options) {
      throw new Error("Credentials are required")
    }

    this.conn = await mysql.createConnection(this.options)
  }

  async disconnect() {
    if(!this.conn) {
      throw new Error("No connection!");
    }

    this.conn?.destroy()
  }

  async raw(query: string): Promise<any>{
    await this.connect();

    if(!this.conn) {
      throw new Error("No connection!");
    }

    const [rows] = await this.conn.execute(query);

    return rows
  }
}