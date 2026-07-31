class Response {

    constructor(success, message, info){
        this.success = success;
        this.message = message;
        this.info = info;
    }

    get json(){
        return {
            success: this.success,
            message: this.message,
            info: this.info ? this.info : {},
            error: null
        };
    }

    get successResponse(){
        return {
            success: true,
            code: 0,
            message: this.message,
            info: this.info ? this.info : {},
            error: null
        };
    }
};

module.exports = Response;