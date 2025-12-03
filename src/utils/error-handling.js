const prismaErrorHandler = (error) => {
  console.log("Prisma Error Handler------");
  console.log(error);

  if (error.code === "P2025") {
    return {
      status: 404,
      message: error.meta?.cause || "Recurso no encontrado",
      cause: error.code
    };
  }

  if (error.status) {
    return {
      status: error.status,
      message: error.message,
      cause: error.code
    };
  }

  return {
    status: 500,
    message: error.message || "Error interno del servidor",
    cause: error.code
  };
};


const globalErrorHandler = (err, req, res, next) => {
  console.error("Global Error Handler------");
  console.error(err);

  res.status(err.status || 500).json({
    error: err.message || "Error interno del servidor"
  });
};

module.exports = { prismaErrorHandler, globalErrorHandler };