import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  },
  {
    id: 2,
    username: 'hkz',
    password: '85691392',
    avatar: 'https://raw.githubusercontent.com/xxcclong/vue-admin/master/src/assets/user.png',
    name: '黄可钊'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cword(1,6),
    addr: Mock.mock('@csentence()'),
    'age|1-5000': 1,
    birth: Mock.Random.datetime('y-MM-dd HH:mm:ss'),
    sex: Mock.Random.integer(0, 2)
  }));
}

export { LoginUsers, Users };
