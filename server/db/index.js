const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 10, // default = 10
    host            : 'localhost',
    user            : 'root',
    password        : 'mahdiamine1995**',
    database        : 'uk_dd'
});

let data = {};


// UK queries
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

data.selectedTechnicalServiceApplicationServersForUk = (selectedElement) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM uk_dd.Servers where Technical_Service = '" + selectedElement + "'";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.selectedTechnicalServiceApplicationDatabasesForUk = (selectedElement) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM uk_dd.DBs where Technical_Service = '" + selectedElement + "'";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.selectedTechnicalServiceApplicationRequirementForUk = (selectedElement) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT distinct Requirement_Monitor_Type from uk_dd.all_requirements where Technical_Service = '" + selectedElement + "'";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.selectedRequirementUk = (selectedTechnical, selectedRequirement) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * from uk_dd.all_requirements where Technical_Service ='" + selectedTechnical + "' and  Requirement_Monitor_Type = '" + selectedRequirement + "'";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// ES queries
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

// GR queries
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

// IE queries
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

// IT queries
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

// PT queries
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

// QA queries
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

// DE BY queries
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

// DE NW queries
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
