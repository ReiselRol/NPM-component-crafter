/**
 * With this method we can get the command name from the terminal call.
 * 
 * @example
 * getCommandName();
 * 
 * @returns returns the command name (for example "help") or returns undefined if there
 * is not a command name passed on terminal.
 */
export const getCommandName = (): string | undefined => {
    let commandName: string | undefined = undefined;
    
    if (process.argv[2] != undefined) {
        commandName = process.argv[2].toLowerCase();
    }

    return commandName;
}