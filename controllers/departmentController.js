import Department from '../models/Department.js'; // Assuming you have a Department model

// Controller to get all departments
const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json({ success: true, departments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error while fetching departments' });
  }
};

// Controller to add a new department
const addDepartment = async (req, res) => {
  try {
    const { dep_name, description } = req.body;

    // Validate input data
    if (!dep_name || !description) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    // Create a new department
    const newDepartment = new Department({
      dep_name,
      description,
    });

    await newDepartment.save();
    res.status(200).json({ success: true, department: newDepartment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error while adding department' });
  }
};

export { getDepartments, addDepartment };