const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Simulate asynchronous operation (e.g., database query)
  setTimeout(() => {
    if (userId === 'invalid') {
      // Throwing an error here, the next middleware doesn't catch it because it's asynchronous
      throw new Error('User not found');
    }
    res.json({ id: userId });
  }, 100);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));