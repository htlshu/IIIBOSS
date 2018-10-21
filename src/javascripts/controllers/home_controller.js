// home 视图的控制器
import home_template from '../views/home.html'; 
import home_model from '../models/home_model';
import header_menu from '../views/header-menu.html'; 
import tip from '../views/tip.html'; 

import xialaMenu from '../views/xialaMenu.html'; 


let _job_data={};
let _headerMenu_data={};
let _tip_data={};
let _xialaMenu_data={}
// 负责将home视图模板渲染在对应的地方
const render = () => {
    // 刚才说了，一切皆模块，说明html也是模块，看一下它暴露的是什么 发现是字符串
    // console.log(homeTemplate)
    document.querySelector('#root').innerHTML = home_template;
    
    // 渲染home的job视图
    // job_controller.render();

    // switchTab();
    $('.home-title').tap(function () {
        router.switch('#/job');
    })
//菜单
const getheaderMenu = async () => {
    _headerMenu_data = await home_model.list()
    _headerMenu_data=_headerMenu_data.category_list;
    console.log(_headerMenu_data)

        
    renderheaderMenu()
}
const renderheaderMenu = () => { // 渲染job-content
    // 将html字符串处理成编译函数
    let _template = Handlebars.compile(header_menu)
    // 将handlebar模板编译成html格式的字符串
  
     let _html = _template({ _headerMenu_data : _headerMenu_data })
    //  渲染job视图
     $(".header-menu").html(_html)
     var mySwiper = new Swiper('.swiper-container',{
        watchSlidesProgress : true,
        watchSlidesVisibility : true,
        
        freeMome : true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        on:{
            tap: function(e){
               console.log($(e.target).css("color","red").siblings())
              $(e.target).css("color","red").siblings().css("color","#262626")
             
            },
          },
        
        })


//点击下拉符号轮播图消失，
$('main').on("tap",'.xiala',function(){
    console.log(555)
    $('.xialaMenu').css('display', 'block');
    $('.nav').css('display', 'none');
    $('.title').css('display', 'block');
    $('.xiala').css('display', 'none');
    $('.title i').css('display', 'block');
})
//复原
$('.title').on("tap",'.title i',function(){
    console.log(555)
    $('.xialaMenu').css('display', 'none');
    $('.nav').css('display', 'block');
    $('.title').css('display', 'none');
    $('.xiala').css('display', 'block');
    $('.title i').css('display', 'none');
})
   
}
getheaderMenu()

//底部
const getfooter = async () => {
    _job_data = await home_model.footer()
    _job_data=_job_data.wx_tag_info
   
        
    renderJobList()
}
const renderJobList = () => { // 渲染job-content
    // 将html字符串处理成编译函数
    let _template = Handlebars.compile(home_template)
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({ _job_data : _job_data})
    //  渲染job视图
    $("#root").html(_html)
}

getfooter()

//tip
const getTip = async () => {
    _tip_data = await home_model.tip()
    _tip_data= _tip_data.warning_msg

        
    renderTip()
}
const renderTip = () => { // 渲染job-content
    // 将html字符串处理成编译函数
    let _template = Handlebars.compile(tip)
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({ _tip_data : _tip_data})
    //  渲染job视图
    $(".tip").html(_html)
    setTimeout(function(){
        $('.tip').css("display","none")
    },3000)
}
getTip()

const search=()=>{
    $('.search').tap(function(){
       alert(11111)
    })
}
search()

//渲染下拉菜单
const getxialaMenu = async () => {
    
    _xialaMenu_data = await home_model.list()
    _xialaMenu_data= _xialaMenu_data.category_list;
        
    renderxialaMenu()
}
const renderxialaMenu = () => { // 渲染job-content
    // 将html字符串处理成编译函数
    let _template = Handlebars.compile(xialaMenu)
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({ _xialaMenu_data : _xialaMenu_data})
    //  渲染job视图
    $(".xialaMenu").html(_html)
}
getxialaMenu()
//点击搜索框


}

// // 切换标签
// const switchTab = () => {
//     $('.footer__item').on('tap', function () {
//         let _controllers = [ job_controller, search_controller, profile_controller ];
//         _controllers[$(this).index()].render();
//         $(this).addClass('active').siblings().removeClass('active');
//     })
// }

export default { render }


// 需求： 显示home  MVC