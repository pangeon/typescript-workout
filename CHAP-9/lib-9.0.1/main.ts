import express from 'express';
import { DeepPartial } from './DeepPartial';
import { User } from './UserInterFace';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.patch('/users/:userId', async (req, res) => {
    const userId = req.params.userId;
    const userUpdateData: DeepPartial<User> = req.body;
    const user = await User.getById(userId);
    await user.update(userUpdateData);

    await user.save();
    res.status(200).end(user);
});

