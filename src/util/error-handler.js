const handleError = (error) => {
    console.error(error.stack);
    process.exit(1);
};
module.exports = handleError;