const Reader = require('awdb_nodejs').default;
const options = {
  // you can use options like `cache` or `watchForUpdates`
};

Reader.open('C:\\Users\\用户名\\Desktop\\****.awdb', options).then((reader) => {
  let result = reader.get('1.1.1.1');
  console.log(result);
  console.log(result.accuracy.toString());
});
