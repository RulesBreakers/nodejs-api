var express = require('express');
const { AuthProvider } = require('../security/provider');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('<form action="/backend/login" method="POST"><input type="text" name="username"><br><input type="password" name="password"><br><input type="submit" value="Connexion"></form>');
});

router.post('/', AuthProvider.authenticate);
router.get('/logout', AuthProvider.logout);

module.exports = router;