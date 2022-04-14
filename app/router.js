const router = require('express').Router();
const controller = require('./controller/controller');
const debug = require('debug')('Router')

debug('route /')
router.route('/')
    .get(controller.homePage);

debug('route random')
router.route('/random')
    .get(controller.getRandom);

debug('route personnage')
router.route('/random/personnage/:personnage')
    .get(controller.getOneByPerson);

debug('route personnage all')
router.route('/all/personnage/:personnage')
    .get(controller.getAllByPerson);

router.route('/sounds/:filename')
    .get(controller.getSounds);
    
module.exports = router;