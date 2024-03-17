const { prisma } = require("../prisma/prisma-cilent");

/**
 * @route GET /api/employees
 * @desc Get all employees
 * @access Private
 */
const getAllEmployeeController = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    res.status(200).json(employees);
  } catch (error) {
    res.status(200).json({ message: "Failed to get employees" });
  }
};

/**
 * @route POST /api/employees/add
 * @desc Add employee
 * @access Private
 */
const addEmployeeController = async (req, res) => {
  console.log("add");
  try {
    const data = req.body;
    console.log("addEmployeeController ~ data:", data.firstName);
    console.log("addEmployeeController ~ data:", data);

    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * @route POST /api/employees/remove/:id
 * @desc Remove employee
 * @access Private
 */
const removeEmployeeController = async (req, res) => {
  const { id } = req.body;

  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    res.status(204).json("Employee removed");
  } catch {
    res.status(500).json({ message: "Failed to delete employee" });
  }
};

/**
 * @route PUT /api/empoyees/edit/:id
 * @desc Edit employees
 * @access Private
 */
const editEmployeeController = async (req, res) => {
  const data = req.body;
  const id = data.id;

  try {
    await prisma.employee.update({
      where: {
        id,
      },
      data,
    });

    res.status(204).json("Employee edited");
  } catch (err) {
    res.status(500).json({ message: "Failed to edit employee" });
  }
};

/**
 * @route GET /api/employees/:id
 * @desc Get all employees
 * @access Private
 */
const getEmployeeController = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    res.status(200).json(employee);
  } catch {
    res.status(500).json({ message: "Не удалось получить сотрудника" });
  }
};

module.exports = {
  getAllEmployeeController,
  addEmployeeController,
  editEmployeeController,
  removeEmployeeController,
  getEmployeeController,
};
