'use strict'
//__________Import modules
const express    = require( 'express' )
const router     = express.Router(  )

//__________Routes

router.get( '/', ( req, res ) => {
	res.render( 'index')
} )

router.get('/donate.html', function (req, res, next) {
	res.url = './donate';
	router.handle(req, res, next);
});

router.get( '/download', ( req, res ) => {
	res.download('./public/files/Menukaart.pdf')
} )



//__________Export module
module.exports = router