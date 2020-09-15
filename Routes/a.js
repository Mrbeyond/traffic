const router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('from a')
})

module.exports = router