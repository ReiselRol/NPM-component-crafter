/**
 * With this method we can get the command parametter from the terminal call.
 * 
 * @example
 * getCommandParametter();
 * 
 * @returns returns the command parametter (for example "-h") or returns undefined if there
 * is not a command parametter passed on terminal.
 */
export const getCommandParametter = (): string |undefined => {
    let commandParametter: string | undefined = undefined;

    if (process.argv[4] != undefined) {
        commandParametter = process.argv[4].toLowerCase();
    }

    return commandParametter;
}