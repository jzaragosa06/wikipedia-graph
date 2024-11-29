const express = require('express');
const path = require('path');

const app = express();

// Set up middleware and configurations

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) =>
{
    res.render('dashboard');
});

app.get('/brainstorm', (req, res) =>
{
    res.render('brainstorm');
});

app.get('/about', (req, res) =>
{
    res.render('about');
});

// Step 5: Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
{
    console.log(`Server is running on http://localhost:${PORT}`);
});


