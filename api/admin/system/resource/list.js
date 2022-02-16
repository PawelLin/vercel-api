module.exports = (req, res) => {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*")
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type")
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    res.json({
        code: '0000',
        data: {
            menuList: [
                // { id: 1, parentId: 0, title: '首页', icon: 'ios-home', name: 'home' },
                { id: 9992, parentId: 0, title: '权限管理', icon: 'ios-people', name: 'auth' },
                { id: 99921, parentId: 9992, title: '用户管理', icon: 'ios-person', name: 'auth_user' },
                { id: 99922, parentId: 9992, title: '角色管理', icon: 'md-person', name: 'auth_role' },
                { id: 9993, parentId: 0, title: '开发通用', icon: 'ios-construct', name: 'demo' },
                { id: 99931, parentId: 9993, title: '输入框', icon: 'md-create', name: 'demo_input' },
                { id: 99932, parentId: 9993, title: '两种TAG', icon: 'ios-pricetags', name: 'demo_tags' },
                { id: 99933, parentId: 9993, title: '自定义组件', icon: 'ios-flower', name: 'demo_component' },
                { id: 99934, parentId: 9993, title: '自定义过滤器', icon: 'ios-color-filter', name: 'demo_filters' },
                { id: 99935, parentId: 9993, title: '自定义指令', icon: 'ios-key', name: 'demo_directives' },
                { id: 99936, parentId: 9993, title: '自定义公共样式', icon: 'logo-css3', name: 'demo_css' },
                { id: 99937, parentId: 9993, title: '自定义工具方法', icon: 'ios-hammer', name: 'demo_tools' },
                { id: 99938, parentId: 9993, title: '自定义公共请求', icon: 'md-repeat', name: 'demo_service' },
                { id: 99939, parentId: 9993, title: '各种表格', icon: 'ios-grid-outline', name: 'demo_table' },
                { id: 99930, parentId: 9993, title: '高阶组件', icon: 'ios-grid-outline', name: 'demo_hoc' },
                { id: 9994, parentId: 0, title: '迭代日志', icon: 'ios-bookmark-outline', name: 'demo_logs' },
                { id: 9995, parentId: 0, title: '按钮权限', icon: 'md-square-outline', name: 'demo_buttons' },
                { id: 9996, parentId: 0, title: 'iframes', icon: 'ios-bookmark-outline', name: 'iframe' },
                { id: 99961, parentId: 9996, title: 'iview', icon: 'ios-bookmark-outline', name: 'https://www.iviewui.com/' },
                { id: 99962, parentId: 9996, title: 'vant', icon: 'ios-bookmark-outline', name: 'https://vant-contrib.gitee.io/vant/#/zh-CN/' },
            ],
            buttonList: ['example_tag', 'user_add']
        }
    })
}