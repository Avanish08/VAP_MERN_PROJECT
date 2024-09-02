const router = require('express').Router();
const { Regisvalid, Loginvalid } = require('../Middlewares/Authmiddleware');
const { Regis, Login } = require('../Controllers/Authcontroler');

router.post('/Login',Loginvalid ,Login);
router.post('/Regis',Regisvalid ,Regis);

module.exports = router;