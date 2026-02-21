const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', service: 'users' });
});

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Serviço de Usuários rodando na porta ${PORT}`);
});