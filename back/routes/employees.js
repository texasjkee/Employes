const { Router } = require("express");
const router = Router();
const { auth } = require("../middlewate/auth");
const {
  getAllEmployeeController,
  addEmployeeController,
  removeEmployeeController,
  editEmployeeController,
  getEmployeeController,
} = require("../controllers/employees");

router.get("/", getAllEmployeeController);
router.get("/:id", auth, getEmployeeController);
router.post("/add", auth, addEmployeeController);
router.post("/remove/:id", auth, removeEmployeeController);
router.put("/edit/:id", auth, editEmployeeController);

module.exports = router;
