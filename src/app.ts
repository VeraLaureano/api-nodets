import express from 'express';

const app = express();

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})