import Mysql  from "@microservice/orm";

export const mysqlRepository = new Mysql({ user: "root", password: "123455", host: "localhost", database: "application" })