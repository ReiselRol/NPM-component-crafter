import path from "path";
import { ConfigFileName } from "../constants/ConfigFileName";
import { getProjectRoot } from "./getProjectRoot";

/**
 * With this method we can get the path to the config file created with the command init.
 * 
 * @example
 * getConfigFilePath();
 * 
 * @returns returns the path to the config file on a string value.
 */
export const getConfigFilePath = (): string => {
    return path.join(getProjectRoot(), ConfigFileName);
}