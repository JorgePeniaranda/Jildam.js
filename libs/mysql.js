import serverlessMysql from "serverless-mysql";

export const mysql = serverlessMysql({
  config: {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "testing",
  },
});
