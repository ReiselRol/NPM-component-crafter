import { writeFileSync } from 'fs-extra';
import { DefaultConfig } from "../configs/DefaultConfig";
import { Messages } from "../constants/Messages";
import { LogType } from "../enums/LogType";
import { print } from "./print";
import { getConfigFilePath } from './getConfigFilePath';
import { checkIfItsTheConfigFileCreated } from './checkIfItsTheConfigFileCreated';

interface CreateEnviromentProps {
    startingPath: string;
}

/**
 * With this function we can create the config file by passing its starting file.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * -  startingPath: On this property you need to pass an string of the starting path of the command.
 * 
 * @example
 * createEnviroment({startingPath: ""});
 */
export const createEnviroment = ({ startingPath } : CreateEnviromentProps) => {
    
    const configFilePath = getConfigFilePath({startingPath});

    if (!checkIfItsTheConfigFileCreated({startingPath})) { 
        writeFileSync(configFilePath, JSON.stringify(DefaultConfig, null, " "))
        print({message: Messages.Successfully.InitializedSucessfully, logType: LogType.Success});
    }
    else {
        print({message: Messages.Error.InitializedError, logType: LogType.Error});
    }
}