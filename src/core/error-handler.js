const errorHandler = {
    entry(error) {
        this.parse(error.stack);
    },
    parse(stack) {
        const parts = stack.split(" ");
        let targetReached = false;
        let modifiedStack = "";
        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === "Object.<anonymous>") {
                targetReached = true;
            }
            if (parts[i] === "at" && targetReached) {
                modifiedStack = modifiedStack.trimEnd();
                break;
            }
            modifiedStack += parts[i] + " ";
        }
        this.print(modifiedStack);
    },
    print(stack) {
        console.error(stack);
        this.exit();
    },
    exit() {
        process.exit(1);
    }
};

module.exports = (error) => {
    errorHandler.entry(error);
};