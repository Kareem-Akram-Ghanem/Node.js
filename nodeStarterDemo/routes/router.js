const express = require('express'),
    router  = express.Router(),
    pagesController = require('../controllers/pages.controller'),
    eventsController = require('../controllers/events.controller');


module.exports = router;


router.get('/' , pagesController.showHome);
router.get('/contact' , pagesController.showContact)


router.get('/events' , eventsController.showEvents);

router.get('/create' , eventsController.create);
router.post('/store' , eventsController.store);

router.get('/edit/:id' , eventsController.edit);
router.post('/update/:id' , eventsController.update);

router.get('/events/:id' , eventsController.showSingleEvent);

router.get('/events/:id/delete' , eventsController.deleteEvent);