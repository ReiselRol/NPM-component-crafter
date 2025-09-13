import { SpecialPropertyName } from "../constants/SpecialPropertyName";
import { getConfigFile } from "./getConfigFile";

/**
 * With this method we can get the special name property from the configuration 
 * of the component crafter.
 * 
 * @example
 * getSpecialPropertyName();
 * 
 * @returns return |SPECIAL| if it don't found the name or the special name if it found it.
 */
export const getSpecialPropertyName = (): string => {

    let specialPropertyName: string = '';

    const crafterConfig = getConfigFile();
    specialPropertyName = (crafterConfig.specialProperty) ? crafterConfig.specialProperty : SpecialPropertyName;
    
    return specialPropertyName;
    
}