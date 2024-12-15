const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // Simulate asynchronous operation
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 'invalid') {
          reject(new Error('User not found'));
        }
        resolve();
      }, 100);
    });
    res.json({ id: userId });
  } catch (err) {
    // Error will be caught here
    next(err);
  }
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));