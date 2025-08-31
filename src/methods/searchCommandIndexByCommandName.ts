import { getConfigFile } from "./getConfigFile";

interface SearchCommandIndexByCommandNameProps {
    commandName: string;
}

/**
 * With this method we can know by name what is the position in the command array
 * of the command you are passing its name.
 * 
 * @param Object On this param you must pass an object with one property: <br></br> 
 * - commandName: On this property you need to pass an string of command name
 * you want to know its index.
 * 
 * @example
 * searchCommandIndexByCommandName({commandName: "component"});
 * 
 * @returns returns the index of the command you are searching for, if the method don't find
 * the index it will return a -1.
 */
export const searchCommandIndexByCommandName = ({ commandName }: SearchCommandIndexByCommandNameProps): number => {
    
    const configFile = getConfigFile();
    let commandIndex: number = 0;

    for (let eachCommand = 0; eachCommand < configFile.commands.length; eachCommand++) {
        if (configFile.commands[eachCommand].name == commandName) {
            commandIndex = eachCommand;
            break
        }
    }

    return commandIndex;
}