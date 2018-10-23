

 
// import BScroll from 'better-scroll'
// 视图
const user_items_template = require('../views/mine/mine_user_items.html')

const plus_items_template = require('../views/mine/mine_plus_items.html')
const footer_nav_template = require('../views/mine/mine_footer_nav.html')
// 数据
const user_items_model = require('../models/mine_user_items_models')

const render =  async() => {
    // 获得的数据
    let items_data = await user_items_model.user_msg()
    let plus_items_list = items_data.vip_rights_icon
    let footer_list = items_data.myService

    // 将html字符串处理成编译函数
    let _user_items_template = Handlebars.compile(user_items_template);
    
    let _plus_items_template = Handlebars.compile(plus_items_template)
    let _footer_nav_template = Handlebars.compile(footer_nav_template)

    // 将handlebar模板编译成html格式的字符串
    let _user_items_html = _user_items_template(items_data);
   
    let _plus_items_html = _plus_items_template(plus_items_list)
    let _footer_nav_html = _footer_nav_template(footer_list)
    

    //  渲染视图
   
    document.querySelector('#user_items').innerHTML = _user_items_html
   
    document.querySelector('#plus_items').innerHTML = _plus_items_html
    document.querySelector('#footer_nav').innerHTML = _footer_nav_html

    // let move = document.querySelector('#move_plus_items');
    // let hammertime = new Hammer(move);
    // let leftMax = ($(move).width()-30)/2

    // hammertime.on('panstart', function(ev) {
    //     let startX = ev.center.x;   //点击位置
    //     let x1 = $(move).position().left  //点击是子盒子left
       
    //     hammertime.on('panmove',function(ev){
    
    //         let endX = ev.center.x;           //运动中鼠标位置
    //         let moveX = endX-startX            //鼠标距点击时的距离
    //         let left = x1 + moveX              //left = 起始Left + 鼠标移动位置
            
    //         if (left <= 30 && left >= -leftMax ){
    //             $(move).css('left',left)
    //         }
    //     })
    // });

}


export default {
    render
}