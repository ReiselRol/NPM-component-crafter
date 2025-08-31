import { Messages } from "../constants/Messages";
import { LogType } from "../enums/LogType";
import { checkIfIsTheInitCommand } from "./checkIfIsTheInitCommand";
import { createEnviroment } from "./createEnviroment";
import { executeCraftCommand } from "./executeCraftCommand";
import { getCommandName } from "./getCommandName"
import { getProjectRoot } from "./getProjectRoot";
import { print } from "./print";

/**
 * With this function we can make the start point of component crafter. If component
 * crafter don't detect the command name then it will show an Wlcome message. If the
 * component crafter detect that you want to do the init command it will create the
 * enviroment if there is not created yet. Otherwise will execute and find the command
 * passed via terminal with it's command specials and command properties.
 * 
 * @example
 * componentCrafterCall();
 */
export const componentCrafterCall = () => {
    const commandName = getCommandName();

    if (commandName != undefined) {
        if (checkIfIsTheInitCommand({commandName})) {
            createEnviroment({startingPath: getProjectRoot()});
        }
        else {
            executeCraftCommand();
        }
    } 
    else {
        print({message: Messages.Information.WelcomeMessage, logType: LogType.Information});
    }
}