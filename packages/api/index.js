import express from 'express';
import { greet } from '@monorepo/shared';   

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(greet('Backend'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});