import fs, { ensureDir } from 'fs-extra';
import { DefaultConfig } from "../configs/DefaultConfig";
import { Messages } from "../constants/Messages";
import { LogType } from "../enums/LogType";
import { print } from "./print";
import { getConfigFilePath } from './getConfigFilePath';
import { checkIfItsTheConfigFileCreated } from './checkIfItsTheConfigFileCreated';
import { getTemplateFolderRoute } from './getTemplateFolderRoute';

const { writeFileSync } = fs;

/**
 * With this function we can create the config file by passing its starting file.
 * 
 * @example
 * createEnviroment({startingPath: ""});
 */
export const createEnviroment = () => {
    
    const configFilePath = getConfigFilePath();
    const configTemplateFolder = getTemplateFolderRoute();

    ensureDir(configTemplateFolder);

    if (!checkIfItsTheConfigFileCreated()) { 
        writeFileSync(configFilePath, JSON.stringify(DefaultConfig, null, " "))
        print({message: Messages.Successfully.InitializedSucessfully, logType: LogType.Success});
    }
    else {
        print({message: Messages.Error.InitializedError, logType: LogType.Error});
    }
}