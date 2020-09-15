const router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('from b')
})

module.exports = router;