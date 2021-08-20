const { projects } = require('./projects.json');

// @route /api/projects/
export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(projects);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
