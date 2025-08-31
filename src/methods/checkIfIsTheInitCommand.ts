interface CheckIfIsTheInitCommandProps {
    commandName: string;
}

/**
 * With this method we can know if the command name is a name of the
 * command for install or do the init of the settings of the crafter.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * - commandName: On this property you need to pass an string of the command name
 * you are checking for if it is a init or not the command.
 * 
 * @example
 * checkIfIsTheInitCommand({ commandName: "init" })
 * 
 * @returns returns true when you pass "i" or "-i" or "init" or "install"
 */
export const checkIfIsTheInitCommand = ({ commandName }: CheckIfIsTheInitCommandProps): boolean => {
    let isTheSearchedCommand = false;

    const commandNameToLowercase = commandName.toLowerCase()
    isTheSearchedCommand = commandNameToLowercase === "i" 
                        || commandNameToLowercase === "-i" 
                        || commandNameToLowercase === "init" 
                        || commandNameToLowercase === "install"

    return isTheSearchedCommand;
}