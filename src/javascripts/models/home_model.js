const list = () => {
    return  $.ajax({
                 url: '/static/mock/list.json',
              //  url: '/api/job/list_time',
                success: (res) => {
                    return res;
                }
            })

}
const footer = () => {
    //  https://m.lagou.com/listmore.json?pageNo=2&pageSize=15

    // return new Promise(resolve => {
    //     $.ajax({
    //         url: '/lagou/listmore.json?pageNo=2&pageSize=15',
    //         success: (res) => {
    //            resolve(res)
    //         }
    //     })
    // })

   

    return  $.ajax({
                 url: '/static/mock/footer.json',
              //  url: '/api/job/list_time',
                success: (res) => {
                    return res;
                }
            })

}

const tip = () => {
   

    return  $.ajax({
                 url: '/static/mock/tip.json',
              //  url: '/api/job/list_time',
                success: (res) => {
                    return res;
                }
            })

}



export default {
    list,
    footer,
    tip

}