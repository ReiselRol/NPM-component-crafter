import { spawnSync } from "child_process";
import { Messages } from "../constants/Messages";
import { getCommandSpecialProperty } from "./getCommandSpecialProperty";
import { getSpecialPropertyName } from "./getSpecialPropertyName";

interface RunTerminalCommandsProps {
    commands: string[];
}

/**
 * With this method we can execute a command or a group of commands by passing an array of
 * strings of the commands and depending of what happened with the execution wil return a
 * error message or a sucessfull message.
 * 
 * @param Object On this param you must pass an object with two properties: <br></br>
 * - commands: On this property you need to pass an array of string of terminal commands you want to execute.
 * 
 * @example
 * runTerminalCommands({ commands: ["yarn install", "yarn build"] });
 * 
 * @returns returns an string of how it worked the execution.
 */
export const runTerminalCommands = ({ commands }: RunTerminalCommandsProps): string => {
    
    let commandMessagesOutput = '';

    const specialProperty = getCommandSpecialProperty();

    for(let eachCommand = 0; eachCommand < commands.length; eachCommand++) {
        
        const specialPropertyName = getSpecialPropertyName()
        let actualCommand = commands[eachCommand];
        let preparedCommand = (specialProperty != undefined) ? actualCommand.replaceAll(specialPropertyName, specialProperty) : actualCommand;

        console.log(`\n[runTerminalCommands] Ejecutando en: ${process.cwd()}`);
        
        const result = spawnSync(preparedCommand, {
            stdio: "inherit",
            shell: true,
        });

        if (eachCommand != 0) commandMessagesOutput += '\n';

        if (result.error) {
            commandMessagesOutput += Messages.Error.RunningTerminalCommandUnsucessfully + preparedCommand + `, Error: ${result.error.message}`;
        }

        if (result.status === 0) {
            commandMessagesOutput += Messages.Successfully.RunningTerminalCommandSuccessfully + preparedCommand;
        } else {
            commandMessagesOutput += Messages.Error.RunningTerminalCommandUnsucessfully + preparedCommand;
        }
    }

    return commandMessagesOutput;
}