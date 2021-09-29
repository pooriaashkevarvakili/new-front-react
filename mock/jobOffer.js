export default {
  'POST /api/job-offer': (req, res) => {
    return res.send({result: true});
  },
  'GET /api/job-offer/get-one/:id': (req, res) => {
    return res.send({
      id: 10,
      department: 1,
      job_title: 3,
      level: 3,
      description: 'salam',
      workplace: 2,
    });
  },
  'GET /api/job-offer/init': (req, res) => {
    return res.send({
      departments: [
        {
          id: 1,
          title: "dep 1"
        }
      ],
      workplaces: [
        {
          id: 2,
          title: "w 2"
        }
      ],
      job_titles: [
        {
          id: 3,
          title: "j t 2"
        }
      ],
      levels: [
        {
          id: 3,
          title: "LEVEL 1"
        }
      ],
    });
  }
}
