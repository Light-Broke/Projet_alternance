const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myeventplanner', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// User Routes
app.use('/users', userRoutes);

// Event Routes
app.use('/events', eventRoutes);

// Registration Routes
app.use('/registrations', registrationRoutes);

// Home route to display list of routes
app.get('/', (req, res) => {
    const routesDescription = `
        User Routes (/users):
        POST / - Create a new user
        GET / - Get all users
        GET /byemail - Get a user by email
        GET /byname - Get a user by first name and last name
        GET /:id - Get a user by ID
        PUT /:id - Update a user
        DELETE /:id - Delete a user

        Event Routes (/events):
        POST / - Create a new event
        GET / - Get all events
        GET /bytitle - Get an event by title
        GET /:id - Get an event by ID
        PUT /:id - Update an event
        DELETE /:id - Delete an event

        Registration Routes (/registrations):
        POST / - Create a new registration
        GET / - Get all registrations
        GET /byuserid - Get registrations by User ID
        GET /byeventid - Get registrations by Event ID
        GET /byeventtitleoruseremail - Get registration by Event Title or User Email
        GET /:id - Get a registration by ID
        PUT /:id - Update a registration
        DELETE /:id - Delete a registration
    `;
    res.send(`<pre>${routesDescription}</pre>`);
});

// Handling 404 Not Found
app.use((req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});

// Set up the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
