const errorHandler = {
    print(stack) {
        console.error(stack);
        this.exit();
    },
    exit() {
        process.exit(1);
    }
};
module.exports = (error) => {
    errorHandler.print(error.stack);
};