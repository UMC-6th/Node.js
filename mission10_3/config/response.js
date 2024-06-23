export const response = ({isSuccess, code, message, status}, result) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
        status: status,
        result: result
    }
};