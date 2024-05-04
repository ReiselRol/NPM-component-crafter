#!/usr/bin/env node

import fs from 'fs-extra'
import path from 'path';

const CONFIG_FILE_NAME = ".component-crafter-config.json";
const DEFAULT_CONFIG = {
    commands: [
        {
            name: "component",
            description: "this command will create a folder with a tsx and their css linked and a folder for tests.",
            startingPath: ["src", "components"],
            Scaffold: [
                {
                    type: "folder",
                    name: "|SPECIAL|",
                    content: [
                        {
                            type: "folder",
                            name: "__test__",
                            content : []
                        },
                        {
                            type: "file",
                            name: "|SPECIAL|.css",
                            content: ""
                        },
                        {
                            type: "file",
                            name: "|SPECIAL|.tsx",
                            content: "import './|SPECIAL|.css'\n\nfunction |SPECIAL|({}) {\n  return (\n    <>\n\n    </>\n  )\n\n}\nexport default |SPECIAL|"
                        }
                    ]
                }
            ]
        }
    ]
}

function componentCrafterCall() {

    const PROJECT_ROOT = process.argv[1].replace('\\node_modules\\component-crafter\\src\\component-crafter.js', '')
    const COMMAND = (process.argv[2] != undefined) ? process.argv[2].toLowerCase() : undefined
    const COMMAND_SPECIAL = (process.argv[3] != undefined) ? process.argv[3].toLowerCase() : undefined
    const COMMAND_PARAMETER = (process.argv[4] != undefined) ? process.argv[4].toLowerCase()  : undefined

    if (COMMAND != undefined) 
    { 
        if (COMMAND.toLowerCase() == "i" || COMMAND.toLowerCase() == "-i" || COMMAND.toLowerCase() == "init" || COMMAND.toLowerCase() == "install") createEnviroment(PROJECT_ROOT)
        else executeCraftCommand(COMMAND, PROJECT_ROOT, COMMAND_PARAMETER, COMMAND_SPECIAL)
    }
    else {
        let text = "Welcome to Component Crafter! This terminal aplication is used for "
                +"\nmake custom templates with custom configurable commands!"

        crafterLog(text, 'I')
    }
}

async function createEnviroment(startingPath) {
    const CONFIG_FILE_PATH = path.join(startingPath, CONFIG_FILE_NAME)
    if (isConfigCreated(startingPath) == false) { 
        fs.writeFile(CONFIG_FILE_PATH, JSON.stringify(DEFAULT_CONFIG, null, " "))
        .then(() => crafterLog("Component Crafter has initialized successfully!", 'S'))
    }
    else crafterLog("Component crafter can't reinitialize when the file '" + CONFIG_FILE_NAME + "' already exists.\nPlease delete manually the file:\n'" + CONFIG_FILE_PATH, 'E')
}

function isConfigCreated(startingPath) {
    const CONFIG_FILE_PATH = path.join(startingPath, CONFIG_FILE_NAME)
    return fs.existsSync(CONFIG_FILE_PATH)
}

function crafterLog(message, tag) {

    console.log('\x1b[0m', "")
    console.log('\x1b[0m', "")
    console.log("____________________________________________________________________________________")
    console.log("|_|                                                                              |_|")
    console.log("|    _____                                   __      _____         _____           |")
    console.log("|   / ___/__  __ _  ___  ___  ___  ___ ___  / /_____/ ___/______ _/ _/ /____ ____  |")
    console.log("|  / /__/ _ \\/  ' \\/ _ \\/ _ \\/ _ \\/ -_) _ \\/ __/___/ /__/ __/ _ `/ _/ __/ -_) __/  |")
    console.log("|  \\___/\\___/_/_/_/ .__/\\___/_//_/\\__/_//_/\\__/    \\___/_/  \\_,_/_/ \\__/\\__/_/     |")
    console.log("|_               /_/                                                            ___|")
    console.log("|_|____________________________________________________________________________|RR7|")
    console.log("")
    console.log(message)
    console.log("")
    if (tag == 'S') {
        console.log('\x1b[32m', "____________________________________________________________________________________")
        console.log('\x1b[32m', "|_|                                                                              |_|")
        console.log('\x1b[32m', "|_           A C T I O N   F I N I S H E D   S U C C E S S F U L L Y              _|") 
        console.log('\x1b[32m', "|_|______________________________________________________________________________|_|")
    } else if (tag == 'E') {
        console.log('\x1b[31m', "____________________________________________________________________________________")
        console.log('\x1b[31m', "|_|                                                                              |_|")
        console.log('\x1b[31m', "|_           A C T I O N   F I N I S H E D   W I T H   A N   E R R O R            _|") 
        console.log('\x1b[31m', "|_|______________________________________________________________________________|_|")
    } else if (tag == 'I') {
        console.log('\x1b[36m', "____________________________________________________________________________________")
        console.log('\x1b[36m', "|_|                                                                              |_|")
        console.log('\x1b[36m', "|_                             I N F O R M A T I O N                              _|") 
        console.log('\x1b[36m', "|_|______________________________________________________________________________|_|")
    }
    console.log('\x1b[0m', "")
    console.log('\x1b[0m', "")
    console.log('\x1b[0m', "")

}

async function executeCraftCommand (command, startingPath, commandParameter, special) {
    if (isConfigCreated(startingPath) == true) {
        const configurationBuffer = await fs.readFile(path.join(startingPath, CONFIG_FILE_NAME))
        const configurationData = JSON.parse(configurationBuffer)
        if (configurationData["commands"] != undefined) {
            if (configurationData["commands"].length > 0) {
                const configurationCommandIndex = searchCommand(configurationData["commands"], command)
                if (configurationCommandIndex >= 0) {
                    if (commandParameter != undefined) {    
                        if (configurationData["commands"][configurationCommandIndex] != undefined) crafterLog(configurationData["commands"][configurationCommandIndex].name + ": " + configurationData["commands"][configurationCommandIndex].description, 'I')
                        else crafterLog("Component Crafter's configuration don't have assigned the description for this command.\nPlease insert some description under the name of the command with the tag 'description'.", 'I')
                    } else {
                        let commandStartingPath = startingPath
                        if (configurationData["commands"][configurationCommandIndex]["startingPath"] != undefined && configurationData["commands"][configurationCommandIndex]["startingPath"].length > 0) commandStartingPath = path.join(startingPath, ...configurationData["commands"][configurationCommandIndex]["startingPath"])
                        const treeOfNewElements = await recursiveFileCreator(configurationData["commands"][configurationCommandIndex]["Scaffold"], commandStartingPath, special, 0)
                    }
                } else crafterLog("Component Crafter can't find the specified command '" + command + "'.\nPlease run the command yarn crafter help to see all commands are loaded.", 'E')
            } else crafterLog("Component Crafter has no commands yet, please add some commands inside of 'commands'\n array.", 'E')
        } else crafterLog("Component Crafter's configuration apparently is corrupted. It can't find 'commands'\npart. This part will we on this lines of the document:\n\n{\n   'commands': [   <--- this line\n      ...\n\nTry to fix it or delete the configuration and do yarn crafter init to create a brand \nnew configuration.", 'E')
    } else crafterLog("Component Crafter is not initialized yet. Please run the command yarn crafter init.", 'E')
}

function searchCommand (arrayToSearch, command) {
    let commandIndex = -1
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i].name == command) {
            commandIndex = i
            break
        }
    }
    return commandIndex
}

async function recursiveFileCreator (scaffold, startingPath, special, depth = 0, firstElement = true) {
    let textOfTheCreation = ""
    for (let i = 0; i < scaffold.length; i++) {
        const data = scaffold[i]
        if (data["type"] != undefined) {
            if (data["name"] != undefined && data["name"].length > 0) {
                let fileName = data["name"]
                if (fileName.includes("|SPECIAL|")) fileName = fileName.replace("|SPECIAL|", special)
                const newPath = path.join(startingPath, fileName)
                if (data["type"] == "folder") {
                    await fs.ensureDir(newPath)
                    textOfTheCreation += await recursiveFileCreator(data.content, newPath, special, depth + 1)
                }
                else if (data["type"] == "file") {
                    let content = ""
                    if (data["content"] != undefined && data["content"].length > 0) content = data["content"]
                    while(content.includes("|SPECIAL|")) content = content.replace("|SPECIAL|", special)
                    fs.writeFile(newPath, content)
                }
            }
        }
    }
    return textOfTheCreation
}

componentCrafterCall()


















/*
async function createComponent(COMPONENT_NAME) {
    if (COMPONENT_NAME == undefined) console.log('\nPlease, specify a component name, example: \nyarn new-component COMPONENT_NAME\n')
    else {
        const ROOT_DIRECTORY = fs.realpathSync(process.cwd())
        const PATH_TO_FIND_COMPONENTS = ['src', 'components']
        const COMPONENTS_DIRECTORY = path.join(ROOT_DIRECTORY, ...PATH_TO_FIND_COMPONENTS)
        if (await fs.pathExists(COMPONENTS_DIRECTORY)) {
            const COMPONENT_PATH = path.join(COMPONENTS_DIRECTORY, COMPONENT_NAME)
            if ((await fs.pathExists(COMPONENT_PATH)) == false) {
                const COMPONENT_TEST_PATH = path.join(COMPONENT_PATH, '__test__')
                await fs.ensureDir(COMPONENT_PATH)
                await fs.ensureDir(COMPONENT_TEST_PATH)
                const COMPONENT_CONTENT = `import './|{COMPONENT_NAME}.css'\n\nfunction |{COMPONENT_NAME}({}) {\n  return (\n    <>\n\n    </>\n  )\n\n}\nexport default |{COMPONENT_NAME}
                `
                await fs.writeFile(path.join(COMPONENT_PATH, COMPONENT_NAME + '.css'), '');
                await fs.writeFile(path.join(COMPONENT_PATH, COMPONENT_NAME + '.tsx'), COMPONENT_CONTENT);
            } else console.log('\nERROR: component-crafter.js found a folder with the same name as the new component.')
        } else console.log('\nERROR: component-crafter.js cant found the folder "components" on "src".')
    }
}
*/
