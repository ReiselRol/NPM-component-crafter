import { SpecialPropertyName } from "../constants/SpecialPropertyName"
import { DefaultOptions } from "./DefaultOptions" 

/**
 * This constants i for know what is the initial settings when you do a yarn craft init
 */
export const DefaultConfig = {
    ...DefaultOptions,
    commands: [
        {
            name: "component",
            description: "this command will create a folder with a tsx and their css linked and a folder for tests.",
            startingPath: ["src", "components"],
            scaffold: [
                {
                    type: "folder",
                    name: SpecialPropertyName,
                    content: [
                        {
                            type: "folder",
                            name: "__test__",
                            content : []
                        },
                        {
                            type: "file",
                            name: SpecialPropertyName + ".css",
                            content: ""
                        },
                        {
                            type: "file",
                            name: SpecialPropertyName + ".tsx",
                            content: "import './" + SpecialPropertyName + ".css'\n\nfunction " + SpecialPropertyName + "({}) {\n  return (\n    <>\n\n    </>\n  )\n\n}\nexport default " + SpecialPropertyName
                        }
                    ]
                }
            ]
        }
    ]
} as const