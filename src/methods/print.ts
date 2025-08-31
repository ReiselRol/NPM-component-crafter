import { Messages } from "../constants/Messages";
import { LogType } from "../enums/LogType";
import { printError } from "./printError";
import { printInfo } from "./printInfo";
import { printSuccess } from "./printSuccess";

interface PrintProps {
    message: string;
    logType: LogType;
}

/**
 * With this function we can print some message with the title and the message, marking if
 * this message is an error, a success or a information message.
 * 
 * @param Object On this param you must pass an object with two properties: <br></br>
 * - message: On this property you need to pass an string of what you want to print on console.
 * - logType: On this property you need to pass the enum of LogType for select what kind of message you want.
 * 
 * @example
 * log({ message: "Component created", logType: CrafterLogType.Success });
 *
 * @example
 * log({ message: "File not found", logType: CrafterLogType.Error });
 */
export const print = ({ message, logType }: PrintProps) => {
    switch (logType) {
        case LogType.Error: printError({ message }); break;
        case LogType.Success: printSuccess({ message }); break;
        case LogType.Information: printInfo({ message}); break;
        default: printError({ message: Messages.Error.FunctionPrintLogTypeNotFound + logType });
    }
}