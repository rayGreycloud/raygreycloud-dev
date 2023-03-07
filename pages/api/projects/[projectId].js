const { projects } = require('./projects.json');

// @route /api/projects/[projectId]
export default (req, res) => {
  const { projectId } = req.query;
  console.log('projectId: ', projectId);
  const project = projects.find((project) => project.id === projectId);

  if (req.method === 'GET') {
    res.status(200).json(project);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
