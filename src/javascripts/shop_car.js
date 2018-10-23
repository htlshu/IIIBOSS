import Router from './router'
import product_list_controller from './controllers/product_list_controller';
product_list_controller.render(); 
// 启动路由
const router = new Router({ initial: '#/job' });
window.router = router;
router.init();