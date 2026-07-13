import express from 'express';
import motoristasRoutes from './routes/motoristasRoutes.js';

const app = express();
const PORT = 3000

app.use(express.json());

app.use('/motoristas', motoristasRoutes);
app.listen (PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`)
})