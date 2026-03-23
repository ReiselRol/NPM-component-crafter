import { CrafterCommandScaffoldType } from "../types/CrafterCommandScaffoldType"

interface CheckIfThisScaffoldIsATemplateProps {
    scaffoldToCheck: CrafterCommandScaffoldType;
}

/**
 * With this method we can know if the passed scaffold is a template scaffold.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * - scaffoldToCheck: On this property you need to pass an string of the trmplate name
 * you are checking for if the crafter settings exists or not or a scaffold array..
 * 
 * @example
 * checkIfThisScaffoldIsATemplate({ scaffoldToCheck: "component" })
 * 
 * @returns returns true when you pass a scaffold that is not an array and is a string.
 */
export const checkIfThisScaffoldIsATemplate = ({ scaffoldToCheck }: CheckIfThisScaffoldIsATemplateProps): Boolean => {
    return (!Array.isArray(scaffoldToCheck) && typeof scaffoldToCheck === "string");
}