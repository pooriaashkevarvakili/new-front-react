// eslint-disable-next-line import/no-extraneous-dependencies
import {parse} from 'url';

// mock tableListDataSource
const genList = (current, pageSize) => {
  const tableListDataSource = [];

  const sts = {
    1: 'در انتظار منابع انسانی',
    2: 'تایید در سایت ',
    3: 'غیر فعال',
    4: 'منقضی شده',
  };


  const titles = [
    'برنامه نویس وب سایت',
    'فروشنده کت شلوار',
    'برنامه نویس اندروید',
    'کارشناس حسابداری',
    'برنامه نویس پایتون',
  ];


  const departments = [
    'بازرگانی',
    'فناوری اطلاعات',
    'مارکتینگ',
  ];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    const s = Math.floor(Math.random() * 10) % 4;
    const title = titles[Math.floor(Math.random() * 10) % 5];
    const department = departments[Math.floor(Math.random() * 10) % 3];
    tableListDataSource.push({
      key: index,
      disabled: i % 6 === 0,
      avatar: [
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      ][i % 2],
      job_title: {title},
      department: {title: department},
      workplace: {title: 'دفتر مرکزی'},
      count: Math.floor(Math.random() * 100),
      sts: s,
      sts_str: sts[s],
      updatedAt: new Date(),
      createdAt: new Date(),
    });
  }

  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

function getRule(req, res, u) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const {current = 1, pageSize = 10} = req.query;
  const params = parse(realUrl, true).query;
  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);
  console.log("params ==> ", params.sorter);
  // const sorter = JSON.parse("deb");

  // if (sorter) {
  //   dataSource = dataSource.sort((prev, next) => {
  //     let sortNumber = 0;
  //     Object.keys(sorter).forEach((key) => {
  //       if (sorter[key] === 'descend') {
  //         if (prev[key] - next[key] > 0) {
  //           sortNumber += -1;
  //         } else {
  //           sortNumber += 1;
  //         }
  //
  //         return;
  //       }
  //
  //       if (prev[key] - next[key] > 0) {
  //         sortNumber += 1;
  //       } else {
  //         sortNumber += -1;
  //       }
  //     });
  //     return sortNumber;
  //   });
  // }

  if (params.filter) {
    const filter = JSON.parse(params.filter);

    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return Object.keys(filter).some((key) => {
          if (!filter[key]) {
            return true;
          }

          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }

          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data.name.includes(params.name || ''));
  }

  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };
  return res.json(result);
}

function postRule(req, res, u, b) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const {method, name, desc, key} = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;

    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule = {
          key: tableListDataSource.length,
          href: '',
          avatar: [
            '',
            '',
          ][i % 2],
          name,
          owner: '',
          desc,
          callNo: Math.floor(Math.random() * 1000),
          status: Math.floor(Math.random() * 10) % 2,
          updatedAt: new Date(),
          createdAt: new Date(),
          progress: Math.ceil(Math.random() * 100),
        };
        tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();

      return;

    case 'update':
      (() => {
        let newRule = {};
        tableListDataSource = tableListDataSource.map((item) => {
          if (item.key === key) {
            newRule = {...item, desc, name};
            return {...item, desc, name};
          }

          return item;
        });
        return res.json(newRule);
      })();

      return;

    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };
  res.json(result);
}

export default {
  'GET /api/rule': getRule,
  'POST /api/rule': postRule,
};
