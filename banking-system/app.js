const express = require('express');
const app = express();

app.use(express.json());

// Routes
const examRoutes = require('./routes/routes');
app.use('/api/exams', examRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
