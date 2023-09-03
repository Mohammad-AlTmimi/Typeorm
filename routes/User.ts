import express from 'express';
import { User }  from '../DB/entites/User.js'
import { validateJob } from '../validate/User.js'
import  dataSource  from '../DB/dataSource.js'
import  TypeUser  from '../types/User.js'
import { stringify } from 'querystring';
var router = express.Router();

router.post('/' , async (req : TypeUser.Request , res : TypeUser.Response) =>{
  
  try {
        let user = new User();
        user.fullName =  req.body.fullName;
        user.password =  req.body.password;
        await user.save();
        res.status(200).send('User Updated')
      } catch (error) {
        console.error(error);
        res.status(450).send("Something went wrong, " + error);
      }
})

router.get('/', async (req: TypeUser.Request , res :TypeUser.Response) => {
    try {
      const page = parseInt(req.query.page || '1');
      const pageSize = parseInt(req.query.pageSize || '10');
  
      const [items, total] = await User.findAndCount({
        skip: pageSize * (page - 1),
        take: pageSize,
        order: {
          password: 'ASC'
        },
      });
  
      res.send({
        page,
        pageSize: items.length,
        total,
        items
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong!");
    }
});

router.get('/search', async (req: any, res: any) => {
    const ID = req.query.id;
    try {
      const item = await User.findOne({
        where: [  
          {id: ID}
        ]
      });
  
      res.send({
        item,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong!");
    }
  });
  


router.put('/id:', async (req: TypeUser.Request, res: TypeUser.Response) => {
    const id = req.params.id;
    const task = await User.findOneBy({ id });
    console.log('req.body.fullName :>> ', req.body.fullName);
    if (task) {
        task.password = req.body.password;
        task.fullName = req.body.fullName;
        task.save();
      res.send('Task Updated');
    } else {
      res.status(404).send('Task not found!');
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const task = await User.findOneBy({ id });
    if (task) {
      task.remove();
      res.send('Task Deleted');
    } else {
      res.status(404).send('Task not found!');
    }
});

export default router;

