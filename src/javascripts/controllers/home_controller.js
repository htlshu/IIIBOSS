// home 视图的控制器
import home_template from '../views/home.html'; 
import home_model from '../models/home_model';
import header_menu from '../views/header-menu.html'; 
import tip from '../views/tip.html'; 



let _job_data={};
let _headerMenu_data={};
let _tip_data={};
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
            tap: function(){
               
              $("this span").addClass("active")
             
            },
          },
        
        })
//点击下拉符号轮播图消失，
$(".xiala").on("tap",function(){
    alert(1111111111111111111)
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
}
getTip()





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