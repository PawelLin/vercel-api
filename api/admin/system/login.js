module.exports = (req, res) => {
    res.json({
        code: '0000',
        data: {
            token: 'sdlfj909402934234j23l4j234l32j4',
            errorNum: 0,
            isFirstLogin: false,
            realName: 'pawel',
            loginName: 'pawel',
            orgCode: "320188999",
            orgName: "管理机构",
            orgLevel: "1"
        },
        message: 'ok'
    })
}