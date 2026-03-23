import { getCommandSpecialProperty } from "./getCommandSpecialProperty";
import { getSpecialPropertyName } from "./getSpecialPropertyName";

interface ReplaceSpecialPropertyProps {
    stringToReplace: string
}

/**
 * With this method we can pass a string to replace all the special properties it found to the special
 * property value that the command have actually. If the command don't have any special property value
 * assigned it will return the string without modifyng it.
 * 
 * @param Object On this param you must pass an object with one property: <br></br> 
 * - stringToReplace: On this property you need to pass the string you want to replace the spedcial property name to its actual value.
 * 
 * @returns returns the string with the the special property with teh value it need to have if the special
 * property have a value, if no instead this method will return the string you pass for modify it.
 */
export const replaceSpecialProperty = ({stringToReplace}: ReplaceSpecialPropertyProps): string => {
    const specialPropertyName = getSpecialPropertyName();
    const specialProperty = getCommandSpecialProperty();
    return (specialProperty == undefined) ? stringToReplace : stringToReplace.replaceAll(specialPropertyName, specialProperty);
}