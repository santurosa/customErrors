import EErrors from "../../service/errors/enums.js";

export default (error, req, res, next) => {
    console.log(error.cause);
    switch (error.code) {
        case EErrors.INVALID_TYPE_ERROR:
            res.status(422).send({ status: 'error', error: error.name, cause: error.cause});
            break;
        case EErrors.INVALID_PARAMS_ERROR:
            res.status(422).send({ status: 'error', error: error.name, cause: error.cause});
            break;
        case EErrors.DATABASE_ERROR:
            res.status(500).send({ status: 'error', error: error.name, cause: error.cause});
            break;
        default:
            res.send({ status: 'error', message: 'Unhandled error', error });
            break;
    }
}