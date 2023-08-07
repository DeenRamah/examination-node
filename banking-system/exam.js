const exams = [];

module.exports = {
  createExam: (req, res) => {
    const newExam = req.body;
    exams.push(newExam);
    res.status(201).json({ message: 'Exam created successfully' });
  },
  calculateResults: (req, res) => {
    // Implement logic to calculate results
    // Update the exam object with results
    res.json({ message: 'Results calculated and updated' });
  },
  displayResults: (req, res) => {
    // Implement logic to display results
    res.json(exams);
  }
};
