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
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  Category.update(req.body, { 
    where: {
      id: req.params.id,
    },
  })
    .then((newCategory) => {
      
     res.json(newCategory)
    })
});

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
