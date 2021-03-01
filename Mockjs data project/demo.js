let Mock = require('mockjs')
let data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }]
})

// 使用 node 运行js文件项目
console.log(JSON.stringify(data, null, 4))
