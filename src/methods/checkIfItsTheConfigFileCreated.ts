import { existsSync } from "fs";
import { getConfigFilePath } from "./getConfigFilePath";

/**
 * With this method we can know if the crafter settings file is created by passing
 * the starting path..
 * 
 * @example
 * checkIfItsTheConfigFileCreated()
 * 
 * @returns returns true when you pass a starting path where it is the crafter settings file.
 */
export const checkIfItsTheConfigFileCreated = (): boolean => {
    let isTheConfigFileCreated: boolean = false;

    const configFilePath = getConfigFilePath();
    isTheConfigFileCreated = existsSync(configFilePath)

    return isTheConfigFileCreated;
}