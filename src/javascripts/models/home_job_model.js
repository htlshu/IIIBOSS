
// 提供职位信息数据
const job_list = (pageNo = 1) => {
    //  https://m.lagou.com/listmore.json?pageNo=2&pageSize=15

    // return new Promise(resolve => {
    //     $.ajax({
    //         url: '/lagou/listmore.json?pageNo=2&pageSize=15',
    //         success: (res) => {
    //            resolve(res)
    //         }
    //     })
    // })

    // return $.ajax({
    //     url:'/lagou/device_id=fc8743c0-cd24-11e8-8fc8-fb70814116d8&env=web&platform=web&uuid=fc8743c0-cd24-11e8-8fc8-fb70814116d8&access_token=null&version=.0.2&screen_height=375&screen_width=667',
    //      //   url: '/lagou/listmore.json?pageNo='+ pageNo +'&pageSize=15',
    //         success: (res) => {
    //            return res;
    //         }
    //     })
    

    return  $.ajax({
                // url: '/static/mock/list.json',
                url: '/api/job/list_time',
                success: (res) => {
                    return res;
                }
            })

}




export default {
    job_list
}