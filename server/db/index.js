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
        console.log(sql);
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

data.addRequirementToUk = (element1, element2, element3, element4,
                           element5, element6, element7,element8,
                           element9, element10, element11, element12,
                           element13, element14, element15, element16,
                           element17, element18, element19, element20, element21, element22) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO uk_dd.all_requirements (Req_ID, Technical_Service, Component, Requirement, Details, Type, Business_Service_Group_X, Tool, Propagation_rule" +
            ", Event_no_Event, Access_Status, KPIs, Requirement_Monitor_Type, Discovery_Status, Firewall_Status, Monitor_Implementation_Status" +
            ", QA_Status, Testing_Status, Blocking_Reasons, Comments, Demand_ID) VALUES ('"
            + element1 + "','" + element2 + "','" + element3 + "','" +  element4 + "','" + element5 + "','" + element6 + "','" + element7 + "','" + element8 + "','"
            + element9 + "','" + element10 + "','" + element11 + "','" + element12 + "','"  + element13 + "','" + element14 + "','" + element15 + "','" + element16 +
            "','"  + element18 + "','" + element19 + "','" + element20 + "','" + element21 + "','" + element22 + "')";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.addMarketServersForUk = (element1, element2, element3, element4,
                              element5, element6, element7,element8,
                              element9, element10, element11, element12,
                              element13, element14, element15, element16) => {

    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO uk_dd.Servers (Technical_Service_ID, Technical_Service, Component, Server_Name, Propagation_Rule, Type, IP_address, IP_address_2, OS" +
            ", Location, System_Owner, 1st_Level_Support, 2nd_Level_Support, 3rd_Level_Support) VALUES ('"
            + element1 + "','" + element2 + "','" + element3 + "','" +  element4 + "','" + element5 + "','" + element6 + "','" + element8 + "','"
            + element9 + "','" + element10 + "','" +  element12 + "','"  + element13 + "','" + element14 + "','" + element15 + "','" + element16 + "')";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.addDatabasesForUk = (element1, element2, element3, element4,
                              element5, element6, element7,element8,
                              element9, element10, element11, element12,
                              element13, element14) => {

    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO uk_dd.DBs (Technical_Service_ID, Technical_Service, Server_Name, Propagation_Rule, Type, user, IP_address, Port, OS" +
            ", System_Owner, 1st_Level_Support, 2nd_Level_Support, 3rd_Level_Support) VALUES ('"
            + element1 + "','" + element2 + "','" + element3 + "','" +  element4 + "','" + element5 + "','" + element7 + "','" + element8 + "','"
            + element9 + "','" + element10 + "','" +  element11 + "','" + element12 + "','" + element13 + "','" + element14 + "')";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.deleteMarketServersForUk = (element) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM uk_dd.Servers WHERE Technical_Service_ID = '" + element + "'";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.deleteDatabaseForUk = (element) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM uk_dd.DBs WHERE Technical_Service_ID = '" + element + "'";
        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

data.deleteRequirementForUk = (element) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM uk_dd.all_requirements where Req_ID = '" + element + "'";
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
