/**
 * With this method we can get the command special property from the terminal call.
 * 
 * @example
 * getCommandSpecialProperty();
 * 
 * @returns returns the command special property (for example "hello") or returns undefined if there
 * is not a command special property passed on terminal.
 */
export const getCommandSpecialProperty = (): string | undefined => {
    let commandSpecialProperty: string | undefined = undefined;

    if (process.argv[3] != undefined) {
        commandSpecialProperty = process.argv[3];
    }

    return commandSpecialProperty;
}