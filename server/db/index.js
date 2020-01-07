const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 10, // default = 10
    host            : 'localhost',
    user            : 'root',
    password        : 'mahdiamine1995**',
    database        : 'uk_dd'
});

let data = {};

data.allMarketServersForUk = () => {
  return new Promise((resolve, reject) => {
     pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
         if (err) {
             return reject(err);
         }
         return resolve(results);
     });
  });
};

data.allMarketDatabasesForUk = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForUk = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.technicalServiceForUk = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketServersForEs = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketDatabasesForEs = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForEs = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketServersForGr = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketDatabasesForGr = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForGr = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketServersForIe = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketDatabasesForIe = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForIe = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketServersForIt = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketDatabasesForIt = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForIt = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketServersForPt = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketDatabasesForPt = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForPt = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketServersForQa = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketDatabasesForQa = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForQa = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketServersForDeBy = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketDatabasesForDeBy = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForDeBy = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketServersForDeNw = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.Servers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.allMarketDatabasesForDeNw = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uk_dd.DBs', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.bussinessServiceForDeNw = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT distinct Technical_Service FROM uk_dd.All_Requirements', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = data;
