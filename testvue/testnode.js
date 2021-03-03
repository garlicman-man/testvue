// var sql = require('mssql');
// //连接方式1："mssql://用户名:密码@ip地址（无需端口号）/SqlServer名/数据库名称"
// //连接方式2："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"
// //sql.connect("mssql://sa:123456@localhost/john/test").then(function() {
// sql.connect("mssql://sa:123456@localhost:1433/school").then(function() {
//   // Query
//   new sql.Request().query('select * from E').then(function(recordset) {
//     console.log(recordset);
//   }).catch(function(err) {
//     console.log(err);
//   });
//   // Stored Procedure
// }).catch(function(err) {
//   console.log(err);
// });
const helper = require('./helper');
/*
 * 查询所有
 * @param tableName
 * @param result
 */
helper.sql('select * from E where xh = 1103, function (err, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('data :', result);
});

/*
 * 修改
 * @param updateObj     修改内容（必填）
 * @param whereObj      修改对象（必填）
 * @param tableName     表名
 * @param callBack(err,recordset)
 */
// helper.sql("update dbo.tableName set name = @updateObj where id = @whereObj", err => {
//   if (err) {
//     console.log("error:" + err);
//     return;
//   } else {
//     console.log('Ok!');
//   }
// });
//
// /*
//  * 添加
//  * @param addObj    添加对象（必填）
//  * @param tableName 表名
//  * @param callBack(err,recordset)
//  */
// helper.sql("insert into dbo.tableName(obj)values(@addObj)", err => {
//   if (err) {
//     console.log("error:" + err);
//   } else {
//     console.log("Ok!");
//   }
// })
//
// /*
//  * 删除
//  * @param whereObj    删除对象（必填）
//  * @param tableName 表名
//  * @param callBack(err,recordset)
//  */
// helper.sql("delete dbo.tableName where 1 = 1 and id = @whereObj", err => {
//   if (err) {
//     console.log("error:" + err);
//   } else {
//     console.log("Ok!");
//   }
// })
