import "dotenv/config"

import { ConnectionOptions } from "mysql2"
import mysql from "mysql2/promise"

interface Props {
  where: string | number,
}

export default class Mysql {
  protected table?: string
  private conn?: mysql.Connection
  private options?: ConnectionOptions

  constructor(table?: string){
    this.table = table;
    this.options = {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: Number(process.env.PORT),
      database: process.env.DATABASE,
    }
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

  async findOne({ where }: Props) {
    const query = `SELECT * FROM ${this.table} WHERE ${where}`

    await this.connect();

    if(!this.conn) {
      throw new Error("No connection!");
    }

    const [rows] = await this.conn.execute(query);

    return rows
  }
}