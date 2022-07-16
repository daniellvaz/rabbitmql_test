import Mysql  from "@microservice/orm";

export const mysqlRepository = new Mysql({ user: "root", password: "123456", host: "localhost", database: "application" })