import { spawnSync } from "child_process";
import { getCompressedTerminalCommand } from "./getCompressedTerminalCommand";
import { Messages } from "../constants/Messages";
import { getCommandSpecialProperty } from "./getCommandSpecialProperty";
import { SpecialPropertyName } from "../constants/SpecialPropertyName";

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
    
    const specialProperty = getCommandSpecialProperty();
    let compressedCommands = getCompressedTerminalCommand({ commands });

    compressedCommands = (specialProperty != undefined) ? compressedCommands.replaceAll(SpecialPropertyName, specialProperty) : compressedCommands

    const result = spawnSync(compressedCommands, {
        stdio: "inherit",
        shell: true,
    });

    if (result.error) {
        return Messages.Error.RunningTerminalCommandUnsucessfully + compressedCommands + `, Error: ${result.error.message}`;
    }

    if (result.status === 0) {
        return Messages.Successfully.RunningTerminalCommandSuccessfully + compressedCommands;
    } else {
        return Messages.Error.RunningTerminalCommandUnsucessfully + compressedCommands;
    }
}