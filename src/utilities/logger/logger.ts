import { ConsoleLogger } from "@nestjs/common";

export class CustomLogger extends ConsoleLogger {
    constructor() {
        super()
    }

    // for log level log.
    log(message: never, ...optionalParams: never[]) {
        super.log(message, optionalParams);
    }

    // for error level log.
    error(message: never, ...optionalParams: never[]) {
        super.error(message, optionalParams);
    }

    // for warn level log.
    warn(message: never, ...optionalParams: never[]) {
        super.warn(message, optionalParams);
    }

    // for debug level log.
    debug(message: never, ...optionalParams: never[]) {
        super.debug(message, optionalParams);
    }

    // for verbose level log.
    verbose(message: never, ...optionalParams: never[]) {
        super.verbose(message, optionalParams);
    }
}