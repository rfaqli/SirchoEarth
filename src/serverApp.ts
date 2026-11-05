import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Public Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'SirchoEarth',
    sanitation: 'active',
    timestamp: new Date().toISOString()
  });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Express Global Error:', err);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

export default app;
