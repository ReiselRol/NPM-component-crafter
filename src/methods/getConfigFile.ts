import { readFileSync } from "fs";
import { ConfigurationType } from "../types/ConfigurationType";
import { getConfigFilePath } from "./getConfigFilePath";
import { getProjectRoot } from "./getProjectRoot";

/**
 * With this method we can get the configuration of the component crafter.
 * 
 * @example
 * getConfigFile();
 * 
 * @returns return the config file on an instanced object of ConfigurationType
 */
export const getConfigFile = (): ConfigurationType => {
    
    const startingPath = getProjectRoot();
    const configFilePath = getConfigFilePath({startingPath});
    const configurationBuffer = readFileSync(configFilePath, "utf8");
    const configurationData = JSON.parse(configurationBuffer) as ConfigurationType;
    
    return configurationData;

}