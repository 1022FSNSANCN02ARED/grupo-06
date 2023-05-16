module.exports = {
    development: {
        username: "grupo6-db",
        password: "grupo06",
        database: "grupo6-db_g6",
        host: "mysql-grupo6-db.alwaysdata.net",
        dialect: "mysql",
       
    },
    test: {
        username: "root",
        password: null,
        database: "grupo6",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: null,
        database: "grupo6",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};
