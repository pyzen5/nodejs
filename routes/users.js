const express = require('express');
const router = express.Router();

// middleware
router.use((req, res, next) => {
    console.log('users middleware!!')
    next();
})

router.get('/', (req,res) => {
    res.send('Users home page!!')
})


router.get('/new', (req,res) => {
    res.send('New User home page!!')
})

module.exports = router;