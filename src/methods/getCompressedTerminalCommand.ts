interface GetCompressedTerminalCommand {
    commands: string[];
}

/**
 * With this method we can get the a command line compressed in only one line for run it on the terminal.
 * 
 * @param Object On this param you must pass an object with two properties: <br></br>
 * - commands: On this property you need to pass an array of string of terminal commands you want to compress in one string.
 * 
 * @example
 * getCompressedTerminalCommand({ commands: ["yarn install", "yarn build"] });
 * 
 * @returns returns a string with compressed commands for use to the terminal.
 */
export const getCompressedTerminalCommand = ({ commands }: GetCompressedTerminalCommand): string => {
    let compressedCommand = '';

    for(let eachCommand = 0; eachCommand < commands.length; eachCommand++) {
        
        const actualCommand = commands[eachCommand];
        compressedCommand += (eachCommand == 0) ? actualCommand : " ; " + actualCommand;

    }

    return compressedCommand;
}