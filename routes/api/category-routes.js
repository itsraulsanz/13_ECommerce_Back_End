const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  }).then((category) => {
    res.json(category)
  })
});

// GET a single category
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((category) => {
    res.json(category)
  })
});

// POST a new category
router.post("/", (req, res) => {
  Category.create(req.body)
  .then((category) => {
    res.status(200).json(category);
  })
  .then((categoryIds) => res.status(200).json(categoryIds))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// UPDATE a new category
router.put('/:id', (req, res) => {
  Category.update(req.body, { 
    where: {
      id: req.params.id,
    },
  })
    .then((updateCategory) => {
      
     res.json(updateCategory)
    })
});

// DELETE a new category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
      id:req.params.id,
    },
  }).then((cat) => {
    res.json(cat)
  });
});

module.exports = router;
