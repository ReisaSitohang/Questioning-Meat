'use strict'
//__________Import modules
const express    = require( 'express' )
const router     = express.Router(  )

//__________Routes

router.get( '/', ( req, res ) => {
	res.render( 'index')
} )

//__________Export module
module.exports = router