/**
 * With this enum we can know if the log is because an
 * error exit code, an information exit code or an
 * Success exit code.
 */
export enum LogType {
    /**
     * This enum property is for mark that the exit code is from a
     * information on a command.
     */
    Information = "Information",
    /**
     * This enum property is for mark that the exit code is from a
     * error on a command.
     */
    Error = "Error",
    /**
     * This enum property is for mark that the exit code is from a
     * success on a command.
     */
    Success = "Success"
}
