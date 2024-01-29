const catchAsync = (func) => {
    const wrapped = (req, res, next) => {

        func(req, res, next)
            .catch(next);

    };

    return wrapped;
}
//above code can also written as 
// const catchAsync = (func)=>{
//     return (req, res, next)=>{
//         func(req, res, next).catch(next)
//     }
// }

module.exports = catchAsync;