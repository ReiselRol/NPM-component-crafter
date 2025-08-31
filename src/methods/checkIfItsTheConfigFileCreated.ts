import { existsSync } from "fs";
import { getConfigFilePath } from "./getConfigFilePath";

interface CheckIfItsTheConfigFileCreatedProps {
    startingPath: string
}

/**
 * With this method we can know if the crafter settings file is created by passing
 * the starting path..
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * - startingPath: On this property you need to pass an string of the command name
 * you are checking for if the crafter settings exists or not.
 * 
 * @example
 * checkIfItsTheConfigFileCreated({ startingPath: "" })
 * 
 * @returns returns true when you pass a starting path where it is the crafter settings file.
 */
export const checkIfItsTheConfigFileCreated = ({ startingPath }: CheckIfItsTheConfigFileCreatedProps): boolean => {
    let isTheConfigFileCreated: boolean = false;

    const configFilePath = getConfigFilePath({ startingPath });
    isTheConfigFileCreated = existsSync(configFilePath)

    return isTheConfigFileCreated;
}