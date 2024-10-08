import dbConnect from "../../../api/dbConnection";
import Task from "../../../models/Task";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
      case 'GET':
        try {
            const tasks = await Task.find({});
            res.status(200).json({ success: true, tasks });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
     case 'POST':
         try {
             const task = await Task.create(req.body);
             res.status(200).json({ success: true, task });
         } catch (error) {
             res.status(400).json({ success: false });
         }
         break;
      default:
          res.status(404).json({ success: false });
          break;
  }

};
