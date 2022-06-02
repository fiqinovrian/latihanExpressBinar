const express = require('express');
const app = express()
const router = express.Router()


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next()
});

router.get('/', function (req, res) {
    res.send('Birds home page');
});

router.get('/about', function (req, res){
    res.send('About Birds');
})

module.exports = router;