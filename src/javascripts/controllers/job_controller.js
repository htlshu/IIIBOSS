
import home_model from '../models/home_model';

import job_template from '../views/home-job.html';
import FiveMenu from '../views/FiveMenu.html';
import TwoMenu from '../views/TwoMenu.html';
import job_content_template from '../views/home-job-content.html';
import job_model from '../models/home_job_model';

import BScroll from 'better-scroll';


let datasources = [] // job页面要显示的所有的数据
let _BigImg_data = []
let _FiveMenu_data = []
let _TwoMenu_data = []
let _ProductList_data = []
const render = () => {

    // 初始加载一下 首页的框架
    /*  let _template = Handlebars.compile(job_template);
      let _html = _template();
      $('.home-container main').html(_html);
      handleContentScroll();
  } 
  
  const handleContentScroll = async () => { // 处理整个程序滚动等等逻辑
      
  
      // 实力和bscroll
      let _job_scroll = new BScroll('main', {
          startY: -80,
          probeType: 2
      });
  
      await getJobList(); // 初始加载第一页
      _job_scroll.refresh(); // 异步加载完成后，让better-scroll重新计算
  
  
      let _o_scroll_info_top = $('.scroll-info--top') // 下拉刷新的dom元素
      let _o_scroll_info_top_title = _o_scroll_info_top.find('.scroll-info__title') // 下拉刷新的文字dom
      let _top_class = 'scroll-info--top scroll-info ' // 下拉刷新元素的初始类名
  
      let _scroll_y_sta = 'go' // 下拉刷新的状态
  
      _job_scroll.on('scroll', ({ x, y }) => {
          if ( y > 0 && _scroll_y_sta !== 'release') { // 放手就刷新
              // 使用状态判断是放在符合条件还不断的更改视图
              _scroll_y_sta = 'release'
              _o_scroll_info_top.prop('class', _top_class + 'release-refresh')
              _o_scroll_info_top_title.html('放开就刷新')
          }
      })
  
      _job_scroll.on('scrollEnd', async ({ x, y }) => {
          if ( y > -80 && y < 0 ) { // 没有完全拉出刷新元素
              // 塞回去
              _job_scroll.scrollTo(0, -80, 300)
          }else if ( y === 0 ) { // 说明该获取数据去了
              _o_scroll_info_top.prop('class', _top_class + 'loading')
              _o_scroll_info_top_title.html('正在加载')
              await refreshJobList()
              _o_scroll_info_top.prop('class', _top_class + 'go-refresh')
              _o_scroll_info_top_title.html('下拉就刷新')
              _scroll_y_sta = 'go'
              _job_scroll.refresh()
              _job_scroll.scrollTo(0, -80, 300)
          }
      })
  }
  
  
  
  const refreshJobList = async () => { // 下拉刷新的时候去获取数据
      let _job_data = await job_model.job_refresh()
      let _job_list = _job_data.content.data.page.result
      datasources = [ ..._job_list, ...datasources ] // 刷新，新数据放在前面
      renderJobList()
  }
  
  const getJobList = async () => { // 获取某一页数据
  
      let _job_data = await job_model.job_list(_pageNo)
  
      // 多个职位信息数组
      let _job_list = _job_data.content.data.page.result
  
      datasources = [ ...datasources, ..._job_list ]
  
      renderJobList() // 每次获取到新的数据后重新渲染
     
  }
  
  const renderJobList = () => { // 渲染job-content
      // 将html字符串处理成编译函数
      let _template = Handlebars.compile(job_content_template)
      // 将handlebar模板编译成html格式的字符串
      let _html = _template({ _job_list: datasources})
      //  渲染job视图
      $('.home-container main .job-content').html(_html)
  }
  
  */

    //  渲染job视图



    //大的轮播图

    const getBigImg = async () => {
        _BigImg_data = await home_model.list();
        console.log(_BigImg_data);
        _BigImg_data = _BigImg_data.product_list.banner;


        datasources = [..._BigImg_data]
        renderBigImg()



    }


    const renderBigImg = () => { // 渲染job-content
        // 将html字符串处理成编译函数

        let _template = Handlebars.compile(job_template)
        // 将handlebar模板编译成html格式的字符串

        let _html = _template({ _BigImg_data: datasources })


        //  渲染job视图
        $("main").html(_html)
        var mySwiper2 = new Swiper('.swiper2', {
            speed: 300,
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        '/' +
                        '<span class="' + totalClass + '"></span>';
                },
            }

        })
    }
    getBigImg()

    //五个菜单
    const getFiveMenu = async () => {
        _FiveMenu_data = await home_model.list()
        _FiveMenu_data = _FiveMenu_data.product_list.categoryAreaV2.lanternArea;



        renderFiveMenu()



    }


    const renderFiveMenu = () => { // 渲染job-content
        // 将html字符串处理成编译函数

        let _template = Handlebars.compile(FiveMenu)
        // 将handlebar模板编译成html格式的字符串
        // console.log(datasources, 3333333)
        let _html = _template({ _FiveMenu_data: _FiveMenu_data })


        //  渲染job视图
        $(".nav_5").html(_html)
    }
    getFiveMenu()


    //两个菜单
    const getTwoMenu = async () => {
        _TwoMenu_data = await home_model.list()
        _TwoMenu_data = _TwoMenu_data.product_list.categoryAreaV2.tileArea;



        renderTwoMenu()



    }


    const renderTwoMenu = () => { // 渲染job-content
        // 将html字符串处理成编译函数

        let _template = Handlebars.compile(TwoMenu)
        // 将handlebar模板编译成html格式的字符串
        // console.log(datasources, 3333333)
        let _html = _template({ _TwoMenu_data: _TwoMenu_data })


        //  渲染job视图
        $(".nav_2").html(_html)
    }
    getTwoMenu()

    //产品



    const getProductList = async () => {
        _ProductList_data = await home_model.list()
        _ProductList_data = _ProductList_data.product_list.products;



        renderProductList()



    }


    const renderProductList = () => { // 渲染job-content
        // 将html字符串处理成编译函数

        let _template = Handlebars.compile(job_content_template)
        // 将handlebar模板编译成html格式的字符串
        // console.log(datasources, 3333333)
        let _html = _template({ _ProductList_data: _ProductList_data })


        //  渲染job视图
        $(".product").html(_html)



        let tem=0;
      
        $(".product").on("tap", ".img", function (e) {
            $(e.target).css("display", "none")
            $(e.target).next().css("display", "block")
           
            
           
        })


        $(".product").on("tap", ".icon-9", function (e) {
            tem = tem + 1
            $(e.target).parent().children("span").text(tem);
          
        })
        

        $(".product").on("tap", ".icon-11", function (e) {
            tem = tem - 1

            

            if (tem <= 0) {
                $(e.target).parent().css("display", "none")
                $(e.target).parent().prev().css("display", "block")
              
                tem=1
            }
            $(e.target).parent().children("span").text(tem);
           

        })
    }
    getProductList()





}

export default {
    render
}