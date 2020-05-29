const functions = require('firebase-functions');
const express = require('express');
const app = express();
const declension = require('./declension');

app.get('/vocative', (req, res) => {
    const urlName = req.query.name;
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.send({
        nominative: urlName,
        vocative: declension.vocative(urlName)
    });
});

exports.app = functions
                .region('europe-west3')
                .https.onRequest(app);
