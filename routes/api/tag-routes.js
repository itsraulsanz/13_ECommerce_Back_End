const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// GET all tags
router.get("/", (req, res) => {
  console.log("get tags hit");
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).then((tags) => {
    res.json(tags);
  });
});

// GET a single tag
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).then((tags) => {
    res.json(tags);
  });
});

// POST a new tag
router.post("/", (req, res) => {
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .then((tagIds) => res.status(200).json(tagIds))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// UPDATE a tag
router.put("/:id", (req, res) => {
  Tag.update(req.body, { 
    where: {
      id: req.params.id,
    },
  })
    .then((updateTag) => {
      
     res.json(updateTag)
    })
});

// DELETE a tag
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where:{
      id:req.params.id,
    },
  }).then((tag) => {
    res.json(tag)
  });
});

module.exports = router;
