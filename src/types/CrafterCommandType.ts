import { CrafterCommandFile } from "./CrafterCommandFile";

/**
 * With this interface we can get the information for the custom command.
 */
export interface CrafterCommandType {
    /**
     * With this property we can know what is the command name of this
     * custom command.
     */
    name: string;
    /**
     * With this property we can know what is the help description for
     * this custom command.
     */
    description: string;
    /**
     * With this property we can know where is gonna start to craft the
     * template of this command starting by the root of the project.
     */
    startingPath: string[];
    /**
     * With this property we can know what files or folder its gonna
     * create this custom command.
     */
    scaffold: CrafterCommandFile[];
}