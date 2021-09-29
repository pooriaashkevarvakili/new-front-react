const getNotices = (req, res) => {
  res.json([
    {
      id: '000000001',
      avatar: '',
      title: 'notify 1',
      datetime: '2020-08-09',
      type: 'notification',
    },
    {
      id: '000000002',
      avatar: '',
      title: 'event 1',
      datetime: '2020-08-08',
      type: 'event',
    },
    {
      id: '000000002',
      avatar: '',
      title: 'message 1',
      datetime: '2020-08-08',
      type: 'message',
    },
  ]);
};

export default {
  'GET /api/notices': getNotices,
};
