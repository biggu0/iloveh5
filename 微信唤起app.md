## 1.将使用微信调起app功能的js接口的公众号appid加入微信白名单。微信那边对接口的使用有一些要求，如被发现违规，则封禁唤起权限30天：
 *（1）只用于唤起业务方所属公司APP；微信开放平台中注册的APP可以调起，传送门:http://mp.weixin.qq.com/wiki/11/74ad127cc054f6b80759c40f77ec03db.html
 *（2）在微信环境内，无论会话还是朋友圈场景点击后都不得直接唤起app，只有用户在H5的主动触发唤起操作才可以唤起app；
 * 除此以外，微信现在不再提供判断本机是否安装某应用的能力，因此业务方需自行处理本机无应用导致的外跳失败事件。

## 2.微信提供了启动第三方app接口文档 :(待补充)
## 3.使用微信启动第三方app接口launch3rdApp案例:（待补充）
