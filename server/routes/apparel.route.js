const ApparelController = require('../controllers/apparel.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/allApparel', ApparelController.findAllApparel);
    app.get('/api/myApparel',authenticate, ApparelController.allApparelByLoggedInUser)
    app.post('/api/newApparel', authenticate, ApparelController.createApparel);
    app.get('/api/oneApparel/:id', ApparelController.findOneApparel);
    app.put('/api/updateApparel/:id', ApparelController.updateApparel);
    app.delete('/api/deleteApparel/:id', ApparelController.deleteApparel);
}