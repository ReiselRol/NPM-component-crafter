/**
 * With this constant we have all the messages for the command ouputs ordered on Information
 * Error and Successfully.
 */
export const Messages = {
    /**
     * On this property we have the messages related of an information on some command or functions.
     */
    Information: {
        /**
         * With this message you're marking to the user the welcomes.
         */
        WelcomeMessage: "Welcome to Component Crafter! This terminal aplication is used for \nmake custom templates with custom configurable commands!",
        /**
         * REQUIRES APPEND A STRING. <br></br>
         * With this message you're marking to the user that the command don't do anything.
         */
        DontDoAnything: "Component Crafter run the command but on the Component Crafter Configuration  this command don't have a scaffold to build or any command to run, the command name is: "
    },
    /**
     * On this property we have the messages related of a success on some command or functions.
     */
    Successfully: {
        /**
         * REQUIRES APPEND A STRING. <br></br>
         * With this message you're marking to the user that the terminal command worked as expected.
         */
        RunningTerminalCommandSuccessfully: "Component Crafter run successfully the command: ",
        /**
         * With this message you're marking to the user that the Yarn craft init is setted the settings correctly.
         */
        InitializedSucessfully: "Component Crafter has initialized successfully!"
    },
    /**
     * On this property we have the messages related of an errors on some command or functions.
     */
    Error: {
        /**
         * REQUIRES APPEND A STRING. <br></br>
         * With this message you're marking to the user that the terminal command don't worked as expected.
         */
        RunningTerminalCommandUnsucessfully: "Component Crafter run with an error the command: ",
        /**
         * With this message you're marking to the user that the command of initialize can't
         * work properly because is initialized yet.
         */
        InitializedError: "Component Crafter can't initialize when is initialized yet.",
        /**
         * REQUIRES APPEND A STRING. <br></br>
         * With this message you're marking to the user that the function 'print' is not 
         * working well because is passed a wrong or invalid LogType.  
         */
        FunctionPrintLogTypeNotFound: "Component Crafter can't find the logType passed when is calling the method print. the log type passed is: ",
        /**
         * With this message you're marking to the user that it needs to run a craft init
         * before using any craft custom command. 
         */
        CantRunCustomCommandWithoutInitialize: "Component Crafter is not initialized yet. Please run the command yarn crafter init.",
        /**
         * With this message you're marking to the user that the command property on the
         * component crafter is not created yet and explains how you can create it manually.
         */
        ConfigFileDontHaveCommandProperty: "Component Crafter's configuration apparently is corrupted. It can't find 'commands'\npart. This part will we on this lines of the document:\n\n{\n   'commands': [   <--- this line\n      ...\n\nTry to fix it or delete the configuration and do yarn crafter init to create a brand \nnew configuration.",
        /**
         * With this message you're marking to the user that there is no custom command for
         * component crafter created yet.
         */
        ConfigFileHaveCommandPropertyEmpty: "Component Crafter has no commands yet, please add some commands inside of 'commands'\n array.",
        /**
         * REQUIRES APPEND A STRING. <br></br>
         * With this message you're marking to the user that the command that it want to execute
         * is not finded on the config file on the property commands.
         */
        CustomComandNotFinded: "Component Crafter can't find the custom command selected on the commands array on the config file. seacrh the command: ",
    }
} as const