import Mysql from "./Mysql";

export const mysqlRepository = new Mysql({ user: "root", password: "123456", host: "localhost", database: "app_1" })