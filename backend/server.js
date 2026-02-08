const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ message: "CHANGE Foundation Backend is Live! 🚀" });
});

app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    // TODO: Add actual subscription logic (e.g., save to database, send to mailing list)
    console.log('New subscription:', email);
    res.json({ message: 'Successfully subscribed!', email });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});