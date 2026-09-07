const express = require('express')
const router = express.Router()
const { createuser, updateuser, deleteuser, allusers, finduserbyemail, finduserbyid } = require('../controllers/userController')

const app = express();
app.use(express.Router());

router.post('/createuser', createuser)
router.put('/updateuser/:id', updateuser)
router.delete('/deleteuser/:id', deleteuser)
router.get('/allusers', allusers)
router.get('/finduserbyid/:id', finduserbyid)
router.get('/finduserbyemail', finduserbyemail)

module.exports = router;