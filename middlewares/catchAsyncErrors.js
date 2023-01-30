export default catchAsyncErrors = (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)