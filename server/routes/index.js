const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/marketServerUk', async (req, res, next) => {
    try {
        console.log('uk');
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
        console.log('uk');
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
        console.log('uk');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForUk();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketServerEs', async (req, res, next) => {
    try {
        console.log('es');
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
        console.log('es');
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
        console.log('es');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForEs();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketServerGr', async (req, res, next) => {
    try {
        console.log('gr');
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
        console.log('gr');
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
        console.log('gr');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForGr();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketServerIe', async (req, res, next) => {
    try {
        console.log('ie');
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
        console.log('ie');
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
        console.log('ie');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForIe();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketServerIt', async (req, res, next) => {
    try {
        console.log('it');
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
        console.log('it');
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
        console.log('it');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForIt();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketServerPt', async (req, res, next) => {
    try {
        console.log('pt');
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
        console.log('pt');
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
        console.log('pt');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForPt();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketServerQa', async (req, res, next) => {
    try {
        console.log('qa');
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
        console.log('qa');
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
        console.log('qa');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForQa();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketServerDeBy', async (req, res, next) => {
    try {
        console.log('by');
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
        console.log('by');
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
        console.log('by');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForDeBy();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/marketServerDeNw', async (req, res, next) => {
    try {
        console.log('deNw');
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
        console.log('deNw');
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
        console.log('deNw');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let results = await db.bussinessServiceForDeNw();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
