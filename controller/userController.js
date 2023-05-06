var express = require('express');
const { ensureAuthenticated } = require('../security/provider');
const { DreamService } = require('../service/dreamService');
const { UserService } = require('../service/userService');
var router = express.Router();

router.post('/', UserService.createUser);
router.get('/:id', /*ensureAuthenticated,*/  UserService.getUserById);
router.get("/:id/dreams", /*ensureAuthenticated,*/ DreamService.getDreamsByUserId)
router.post('/:id/dreams', /*ensureAuthenticated,*/ DreamService.createDream);

module.exports = router;