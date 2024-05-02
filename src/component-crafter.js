#!/usr/bin/env node

import fs from 'fs-extra'
import path from 'path';
async function createComponent() {
    const COMPONENT_NAME = process.argv[2]
    console.log(process.argv)
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
                const COMPONENT_CONTENT = `import './${COMPONENT_NAME}.css'\n\nfunction ${COMPONENT_NAME}({}) {\n  return (\n    <>\n\n    </>\n  )\n\n}\nexport default ${COMPONENT_NAME}
                `
                await fs.writeFile(path.join(COMPONENT_PATH, COMPONENT_NAME + '.css'), '');
                await fs.writeFile(path.join(COMPONENT_PATH, COMPONENT_NAME + '.tsx'), COMPONENT_CONTENT);
            } else console.log('\nERROR: component-crafter.js found a folder with the same name as the new component.')
        } else console.log('\nERROR: component-crafter.js cant found the folder "components" on "src".')
    }
}

createComponent()
.then(() => console.log('Component created successfully.'))
.catch(error => console.error('Error:', error))