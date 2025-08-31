import path from "path";
import { Messages } from "../constants/Messages";
import { LogType } from "../enums/LogType";
import { checkIfItsTheConfigFileCreated } from "./checkIfItsTheConfigFileCreated";
import { getCommandName } from "./getCommandName";
import { getCommandParametter } from "./getCommandParametter";
import { getConfigFile } from "./getConfigFile";
import { getProjectRoot } from "./getProjectRoot";
import { print } from "./print";
import { searchCommandIndexByCommandName } from "./searchCommandIndexByCommandName";
import { recursiveFileCreator } from "./recursiveFileCreator";

/**
 * With this function we can manage a component crafter command. if this function will
 * have some problems or issue will show to the user what is happened anwill stop running
 * the command.
 * 
 * @example
 * executeCraftCommand();
 */
export const executeCraftCommand = () => {

    const startingPath: string = getProjectRoot();

    if (!checkIfItsTheConfigFileCreated({ startingPath })) {
        print({ message: Messages.Error.CantRunCustomCommandWithoutInitialize, logType: LogType.Error });
        return;
    }

    const crafterConfig = getConfigFile();

    if (crafterConfig.commands == undefined) {
        print({ message: Messages.Error.ConfigFileDontHaveCommandProperty, logType: LogType.Error })
        return;
    }

    if (crafterConfig.commands.length == 0) {
        print({ message: Messages.Error.ConfigFileHaveCommandPropertyEmpty, logType: LogType.Error });
        return;
    }

    const commandName: string = getCommandName() as string;
    const commandIndex = searchCommandIndexByCommandName({ commandName });

    if (commandIndex == -1) {
        print({ message: Messages.Error.CustomComandNotFinded + commandName, logType: LogType.Error });
        return;
    }

    const commandParametter: string | undefined = getCommandParametter();
    const commandSelected = crafterConfig.commands[commandIndex];

    if (commandParametter != undefined) {
        print({
            message: commandSelected.name + ": " + commandSelected.description,
            logType: LogType.Information
        });
    } else {
        
        let commandStartingPath = startingPath;

        if (commandSelected.startingPath != undefined && commandSelected.startingPath.length > 0) {
            commandStartingPath = path.join(startingPath, ...commandSelected.startingPath)
        }
        const treeOfNewElements = recursiveFileCreator({
            scaffold: commandSelected.scaffold,
            startingPath
        });

        print({ message: "Component Crafter is running the command " + commandName + "':\n\nFile Tree:\n\n" + treeOfNewElements, logType: LogType.Information })

    }
}