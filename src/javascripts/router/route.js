
import job_controller from '../controllers/job_controller';
import search_controller from '../controllers/search_controller';
import view_controller from '../controllers/view_controller';
import cat_controller from '../controllers/cat_controller';
import profile_controller from '../controllers/profile_controller';
import search_list_product from '../controllers/search_list_product_controller';
import login_controller from '../controllers/login_controller'

const routes = {
    '#/job': job_controller,
    '#/vip': search_controller,
    '#/view':view_controller,
    '#/cat':'',
    '#/profile': profile_controller,
    '#/search':search_list_product,
    '#/login':login_controller
}

export { routes } ;


