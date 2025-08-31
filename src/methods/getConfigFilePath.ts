import path from "path";
import { ConfigFileName } from "../constants/ConfigFileName";

interface GetConfigFilePathProps {
    startingPath: string
}

/**
 * With this method we can get the path to the config file created with the command init.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * -  startingPath: On this property you need to pass an string of teh starting path of the command.
 * 
 * @example
 * getConfigFilePath({startingPath: ""});
 * 
 * @returns returns the path to the config file on a string value.
 */
export const getConfigFilePath = ({ startingPath } : GetConfigFilePathProps): string => {
    return path.join(startingPath, ConfigFileName);
}