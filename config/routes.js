/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'index/index' },
  '/detail': { view: 'index/details' },
  '/project': { view: 'index/projects' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  /*后台管理界面 */
  'GET /admin': 'admin/AdminController.index', //后台首页
  'GET /admin/productList': 'admin/AdminController.productList', //项目列表页面
  'POST /admins/productList': 'admin/ProductController.productList', //项目列表数据
  'GET /admin/article': 'admin/AdminController.article', //文章管理页面
  'GET /admin/article/add/:id': 'admin/AdminController.addArticle', //文章添加/编辑页面
  'GET /admin/flash': 'admin/AdminController.flash', //banner管理页面
  'GET /admin/flash/add/:id': 'admin/AdminController.addFlash', //banner添加/编辑页面
  'GET /admin/trade': 'admin/AdminController.trade', //交易对管理页面
  'GET /admin/trade/add/:id': 'admin/AdminController.addTrade', //交易对添加/编辑页面
  'GET /admin/credit': 'admin/AdminController.credit', //授信管理页面
  'GET /admin/credit/add/:id': 'admin/AdminController.addCredit', //授信添加/编辑页面
  'GET /admin/kycCredit': 'admin/AdminController.kycCredit', //KYC认证管理页面
  'GET /admin/kycDetail': 'admin/AdminController.kycDetail', //KYC详情
  'GET /admin/proxy': 'admin/AdminController.proxy', //代理管理页面
  'GET /admin/order': 'admin/AdminController.order', //订单管理页面
  'GET /admin/usersAccount': 'admin/AdminController.usersAccount', //平台账号管理页面
  'GET /admin/login': 'admin/AdminController.login', //登录页面
  'GET   /admin/logout': 'admin/AdminController.adminLogout', //管理员退出

  'GET /admin/accountDetail': 'admin/AdminController.accountDetail', //账单详情页面
  'GET /admin/proxyDetail': 'admin/AdminController.proxyDetail', //代理详情
  'GET /admin/orderDetail': 'admin/AdminController.orderDetail', //订单详情

  'GET /admin/changepwd': 'admin/AdminController.changepwd', //修改密码


  /*后台请求接口 */
    
    //管理员管理
    'POST   /admins/login': 'admin/AdminController.adminLogin', //管理员登录
    'GET    /admins/logout': 'admin/AdminController.adminLogoutapi', //管理员退出接口
    //统计
    'POST   /admins/statistics': 'admin/StatisticsController.statistics', //统计信息
    //flash管理
    'POST   /admins/flashs': 'admin/FlashController.flashs', //flash列表
    'POST   /admins/addFlash': 'admin/FlashController.addFlash', //增加flash
    'POST   /admins/editFlash': 'admin/FlashController.editFlash', //修改flash
    'POST   /admins/getFlash': 'admin/FlashController.getFlash', //获取flash
    'POST   /admins/delFlash': 'admin/FlashController.delFlash', //删除flash
    //article管理
    'POST   /admins/articles': 'admin/ArticleController.articles', //article列表
    //'POST   /admins/addArticle'    :   'admin/ArticleController.addArticle',//增加article
    'POST   /admins/editArticle': 'admin/ArticleController.editArticle', //修改article
    'POST   /admins/getArticle': 'admin/ArticleController.getArticle', //获取article
    'POST   /admins/delArticle': 'admin/ArticleController.delArticle', //删除article
    //授信credit管理
    'POST   /admins/credits': 'admin/CreditController.credits', //credit列表
    'POST   /admins/addCredit': 'admin/CreditController.addCredit', //增加credit
    'POST   /admins/editCredit': 'admin/CreditController.editCredit', //修改credit
    'POST   /admins/getCredit': 'admin/CreditController.getCredit', //获取credit
    'POST   /admins/delCredit': 'admin/CreditController.delCredit', //删除credit
    //交易对trade管理
    'POST   /admins/trades': 'admin/TradeController.trades', //trade列表
    'POST   /admins/addTrade': 'admin/TradeController.addTrade', //增加trade
    'POST   /admins/editTrade': 'admin/TradeController.editTrade', //修改trade
    'POST   /admins/getTrade': 'admin/TradeController.getTrade', //获取trade
    'POST   /admins/delTrade': 'admin/TradeController.delTrade', //删除trade
    'POST   /admins/changepassword': 'admin/AdminController.changepassword', //修改密码
    



 'GET /index': 'TestController.testList', //后台首页
 'GET /index2': 'TestController.testList2', //后台首页

  /** 
   * 用户管理部分
   * */

   //用户注册
  'POST /register': 'UserController.register',
   //用户登录
  'POST /login': 'UserController.login',
  //退出登录
  'POST /logout': 'UserController.logout',
  //个人中心
  'POST /userCenter': 'UserController.userCenter',

  //首页数据
  'POST /index': 'IndexController.index',
  //项目列表
  'POST /productList': 'ProductController.productList',
  //项目详情
  'POST /productDetail': 'ProductController.productDetail',
  //项目交易
  'POST /trade': 'ProductController.trade',
  //项目放款
  'POST /lottery': 'ProductController.lottery',
  //添加提币地址
  'POST /addTibiAddress': 'TibiController.addTibiAddress',
  //提币操作
  'POST /tibi': 'TibiController.tibi',

};
