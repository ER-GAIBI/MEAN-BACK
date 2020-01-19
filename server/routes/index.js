const express = require('express');
const db = require('../db');
const fs = require('fs');
const router = express.Router();

// UK controller
router.get('/marketServerUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForUk();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabaseUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForUk();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServiceUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForUk();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/technicalServiceForUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.technicalServiceForUk();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/selectedTechnicalServerApplicationServersUk',  async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.selectedTechnicalServiceApplicationServersForUk(req.query.selectedElement);
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/selectedTechnicalServerApplicationDatabasesUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.selectedTechnicalServiceApplicationDatabasesForUk(req.query.selectedElement);
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/selectedTechnicalServerApplicationRequirementUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.selectedTechnicalServiceApplicationRequirementForUk(req.query.selectedElement);
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/requirementUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.selectedRequirementUk(req.query.selectedElement, req.query.selectedRequirement);
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/addToRequirementUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        await db.addRequirementToUk(req.body.Requirement_ID, req.body.Technical_Service, req.body.Component, req.body.Requirement,
            req.body.Details, req.body.Type, req.body.Business_Service_Group_X, req.body.Tool, req.body.Propagation_rule,
            req.body.Event_NO_Event, req.body.Access_Status, req.body.KPIs, req.body.Requirement_Monitor_Type, req.body.Discovery_Status,
            req.body.Firewall_Status, req.body.Monitor_Implementation_Status, req.body.Overall_Imp_Status, req.body.QA_Status, req.body.Testing_Status,
            req.body.Blocking_Reasons, req.body.Comments, req.body.Demand_ID);
        let results = await db.selectedRequirementUk(req.body.selectedTechnical, req.body.selectedRequirement);
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/addToServerUk', async (req, res, next) => {
    try {
        console.log(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        await db.addMarketServersForUk(req.body.Technical_Service_ID, req.body.Technical_Service, req.body.Component, req.body.Server_Name,
                                        req.body.Propagation_Rule, req.body.Type, req.body.Database, req.body.IP_address,
                                        req.body.IP_address_2, req.body.OS, req.body.Physical_VM, req.body.Locat,
                                        req.body.System_Owner, req.body.Level_Support_1, req.body.Level_Support_2, req.body.Level_Support_3);
        let results;
        if (req.body.selectedElement) {
            results = await db.selectedTechnicalServiceApplicationServersForUk(req.body.selectedElement);
        } else {
            results = await db.allMarketServersForUk();
        }
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/addToDatabaseUk', async (req, res, next) => {
    try {
        console.log(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        await db.addDatabasesForUk(req.body.Technical_Service_ID, req.body.Technical_Service, req.body.Server_Name,
            req.body.Propagation_Rule, req.body.Type, req.body.Database, req.body.user, req.body.IP_address,
            req.body.port, req.body.OS, req.body.System_Owner, req.body.Level_Support_1, req.body.Level_Support_2, req.body.Level_Support_3);
        let results;
        if (req.body.selectedElement) {
            results = await db.selectedTechnicalServiceApplicationDatabasesForUk(req.body.selectedElement);
        } else {
            results = await db.allMarketDatabasesForUk();
        }
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/deleteFromServerUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        await db.deleteMarketServersForUk(req.body.s);
        let results;
        if (req.body.selectedElement) {
            results = await db.selectedTechnicalServiceApplicationServersForUk(req.body.selectedElement);
        } else {
            results = await db.allMarketServersForUk();
        }
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/deleteFromDatabaseUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        await db.deleteDatabaseForUk(req.body.s);
        let results;
        if (req.body.selectedElement) {
            results = await db.selectedTechnicalServiceApplicationDatabasesForUk(req.body.selectedElement);
        } else {
            results = await db.allMarketDatabasesForUk();
        }
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/deleteRequirementUk', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        await db.deleteRequirementForUk(req.body.s);
        let results = await db.selectedRequirementUk(req.body.selectedTechnical, req.body.selectedRequirement);
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// ES controller
router.get('/marketServerEs', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForEs();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabaseEs', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForEs();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServiceEs', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForEs();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// GR controller
router.get('/marketServerGr', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForGr();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabaseGr', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForGr();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServiceGr', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForGr();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// IE controller
router.get('/marketServerIe', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForIe();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabaseIe', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForIe();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServiceIe', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForIe();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// IT controller
router.get('/marketServerIt', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForIt();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabaseIt', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForIt();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServiceIt', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForIt();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// PT controller
router.get('/marketServerPt', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForPt();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabasePt', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForPt();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServicePt', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForPt();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// QA controller
router.get('/marketServerQa', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForQa();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabaseQa', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForQa();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServiceQa', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForQa();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// DE BY controller
router.get('/marketServerDeBy', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForDeBy();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabaseDeBy', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForDeBy();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServiceDeBy', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForDeBy();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// DE NW controller
router.get('/marketServerDeNw', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketServersForDeNw();
        await res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketDatabaseDeNw', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.allMarketDatabasesForDeNw();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/businessServiceDeNw', async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForDeNw();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// PDF controller
router.post('/pdf', function (req, res) {
   const filePath =  '/files/' + req.body.pdfName + '.pdf';
   fs.readFile(__dirname + filePath, function (err, data) {
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.contentType("application/pdf");
       res.send(data);
   })
});
module.exports = router;
