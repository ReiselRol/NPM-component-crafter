import type { CrafterCommandType } from "./CrafterCommandType";

/**
 * With this interface we can get the info of the setting filr for component crafter.
 */
export interface ConfigurationType {
    /**
     * With this property we can know if the config have the propety showExtraDetails
     * actived or not.
     */
    showExtraDetails: boolean,
    /**
     * With this property we can know all the custom commands that contains the settings
     * file of component crafter.
     */
    commands: CrafterCommandType[]
}