const prismaErrorHandler = (error) => {
    console.log("Prisma error-------"); 
    console.log(error.message); 
    console.log("Prisma error------- ");
    if (error.code === 'P2025') {
        throw { status: 404, message: { error: error.meta?.cause || error.message, cause: error.code } };
    }
    throw { status: 500, message: { error: error.meta || error.message, cause: error.code } };
}    

const globalErrorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
}

module.exports = { prismaErrorHandler, globalErrorHandler };