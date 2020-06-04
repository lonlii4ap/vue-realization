module.exports = (env) => {
    console.log(env)
    return {
        development: Boolean(env === 'development')
    }
}
