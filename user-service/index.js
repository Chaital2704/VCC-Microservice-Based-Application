const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const UserSchema = new mongoose.Schema({ 
    name: String, 
    email: String 
});

const User = mongoose.model('User', UserSchema);

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.listen(4000, () => console.log('User Service running on port 4000'));
