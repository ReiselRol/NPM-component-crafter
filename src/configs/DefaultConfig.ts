import { DefaultOptions } from "./DefaultOptions"

/**
 * This constants i for know what is the initial settings when you do a yarn craft init
 */
export const DefaultConfig = {
    ...DefaultOptions,
    "commands": [
        {
            "name": "project",
            "description": "this command will create a folder with a project for the front-end side and other for the backend side (MERN).",
            "scaffold": [
                {
                    "type": "folder",
                    "name": "|SPECIAL|-frontend",
                    "content": [
                        {
                            "type": "file",
                            "name": "eslint.config.js",
                            "content": "import js from '@eslint/js';\nimport globals from 'globals';\nimport reactHooks from 'eslint-plugin-react-hooks';\nimport reactRefresh from 'eslint-plugin-react-refresh';\nimport tseslint from 'typescript-eslint';\nimport { globalIgnores } from 'eslint/config';\n\nexport default tseslint.config([\n  globalIgnores(['dist']),\n  {\n    files: ['**/*.{ts,tsx}'],\n    extends: [\n      js.configs.recommended,\n      tseslint.configs.recommended,\n      reactHooks.configs['recommended-latest'],\n      reactRefresh.configs.vite,\n    ],\n    languageOptions: {\n      ecmaVersion: 2020,\n      globals: globals.browser,\n    },\n  },\n]);\n"
                        },
                        {
                            "type": "file",
                            "name": "index.html",
                            "content": "<!doctype html>\n<html lang='en'>\n  <head>\n    <meta charset='UTF-8' />\n    <meta name='viewport' content='width=device-width, initial-scale=1.0' />\n    <title>|SPECIAL|</title>\n  </head>\n  <body>\n    <div id='root'></div>\n    <script type='module' src='/src/main.tsx'></script>\n  </body>\n</html>\n"
                        },
                        {
                            "type": "file",
                            "name": "jest.config.js",
                            "content": "module.exports = {\n  testEnvironment: 'jsdom',\n};\n"
                        },
                        {
                            "type": "file",
                            "name": "package.json",
                            "content": "{\n  \"name\": \"|SPECIAL|-frontend\",\n  \"private\": true,\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"start\": \"vite\",\n    \"dev\": \"vite\",\n    \"build\": \"tsc -b && vite build\",\n    \"lint\": \"eslint .\",\n    \"preview\": \"vite preview\",\n    \"test\": \"vitest\"\n  },\n  \"dependencies\": {\n    \"@apollo/client\": \"^3.8.6\",\n    \"@graphql-typed-document-node/core\": \"3.2.0\",\n    \"graphql\": \"^16.8.1\",\n    \"react\": \"^19.1.0\",\n    \"react-devtools\": \"^6.1.2\",\n    \"react-dom\": \"^19.1.0\",\n    \"react-redux\": \"^9.2.0\",\n    \"react-router-dom\": \"^7.6.2\"\n  },\n  \"devDependencies\": {\n    \"@eslint/js\": \"^9.25.0\",\n    \"@reduxjs/toolkit\": \"^2.8.2\",\n    \"@testing-library/dom\": \"^10.4.0\",\n    \"@testing-library/jest-dom\": \"^6.6.3\", \n    \"@testing-library/react\": \"^16.3.0\",\n    \"@testing-library/react-hooks\": \"^8.0.1\",\n    \"@testing-library/user-event\": \"^14.6.1\",\n    \"@types/dotenv\": \"^8.2.3\",\n    \"@types/jest\": \"^29.5.14\",\n    \"@types/node\": \"^24.0.15\",\n    \"@types/nodemailer\": \"^6.4.17\",\n    \"@types/react\": \"^19.1.8\",\n    \"@types/react-dom\": \"^19.1.2\",\n    \"@types/react-redux\": \"^7.1.34\",\n    \"@vitejs/plugin-react-swc\": \"^3.9.0\",\n    \"@vitest/ui\": \"^3.2.2\",\n    \"eslint\": \"^9.25.0\",\n    \"eslint-plugin-react-hooks\": \"^5.2.0\",\n    \"eslint-plugin-react-refresh\": \"^0.4.19\",\n    \"globals\": \"^16.0.0\",\n    \"jsdom\": \"^26.1.0\",\n    \"typescript\": \"~5.8.3\",\n    \"typescript-eslint\": \"^8.30.1\",\n    \"vite\": \"^6.3.5\",\n    \"vitest\": \"^3.2.2\"\n  }\n}\n"
                        },
                        {
                            "type": "file",
                            "name": "tsconfig.app.json",
                            "content": "{\n  \"compilerOptions\": {\n    \"tsBuildInfoFile\": \"./node_modules/.tmp/tsconfig.app.tsbuildinfo\",\n    \"target\": \"ES2022\",\n    \"useDefineForClassFields\": true,\n    \"lib\": [\"ES2022\", \"DOM\", \"DOM.Iterable\"],\n    \"module\": \"ESNext\",\n    \"skipLibCheck\": true,\n\n    /* Bundler mode */\n    \"moduleResolution\": \"bundler\",\n    \"allowImportingTsExtensions\": true,\n    \"verbatimModuleSyntax\": true,\n    \"moduleDetection\": \"force\",\n    \"noEmit\": true,\n    \"jsx\": \"react-jsx\",\n\n    /* Linting */\n    \"strict\": true,\n    \"noUnusedLocals\": true,\n    \"noUnusedParameters\": true,\n    \"erasableSyntaxOnly\": true,\n    \"noFallthroughCasesInSwitch\": true,\n    \"noUncheckedSideEffectImports\": true\n  },\n  \"include\": [\"src\"]\n}\n"
                        },
                        {
                            "type": "file",
                            "name": "tsconfig.json",
                            "content": "{\n  \"files\": [],\n  \"references\": [\n    { \"path\": \"./tsconfig.app.json\" },\n    { \"path\": \"./tsconfig.node.json\" }\n  ]\n}\n"
                        },
                        {
                            "type": "file",
                            "name": "tsconfig.node.json",
                            "content": "{\n  \"compilerOptions\": {\n    \"tsBuildInfoFile\": \"./node_modules/.tmp/tsconfig.node.tsbuildinfo\",\n    \"target\": \"ES2023\",\n    \"lib\": [\"ES2023\"],\n    \"module\": \"ESNext\",\n    \"skipLibCheck\": true,\n\n    /* Bundler mode */\n    \"moduleResolution\": \"bundler\",\n    \"allowImportingTsExtensions\": true,\n    \"verbatimModuleSyntax\": true,\n    \"moduleDetection\": \"force\",\n    \"noEmit\": true,\n\n    /* Linting */\n    \"strict\": true,\n    \"noUnusedLocals\": true,\n    \"noUnusedParameters\": true,\n    \"erasableSyntaxOnly\": true,\n    \"noFallthroughCasesInSwitch\": true,\n    \"noUncheckedSideEffectImports\": true\n  },\n  \"include\": [\"vite.config.ts\"]\n}\n"
                        },
                        {
                            "type": "file",
                            "name": "vite.config.ts",
                            "content": "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react-swc';\n\n// https://vite.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n   test: {\n    globals: true,\n    environment: 'jsdom',\n    setupFiles: './src/setupTests.ts',\n  },\n});\n"
                        },
                        {
                            "type": "folder",
                            "name": "src",
                            "content": [
                                {
                                    "type": "file",
                                    "name": "index.css",
                                    "content": ""
                                },
                                {
                                    "type": "file",
                                    "name": "main.tsx",
                                    "content": "import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport { App } from './components/App/App.tsx';\nimport './index.css';\n\ncreateRoot(document.getElementById('root')!).render(\n  <StrictMode>\n    <App />\n  </StrictMode>,\n);\n"
                                },
                                {
                                    "type": "file",
                                    "name": "setupTests.ts",
                                    "content": "import '@testing-library/jest-dom';\n"
                                },
                                {
                                    "type": "file",
                                    "name": "vite-env.d.ts",
                                    "content": "/// <reference types=\"vite/client\" />"
                                },
                                {
                                    "type": "folder",
                                    "name": "constants",
                                    "content": [
                                        {
                                            "type": "file",
                                            "name": "AppSliceInitialState.ts",
                                            "content": "import type { AppSliceType } from '../types/AppSliceType';\n\n/**\n * **DESCRIPTION:**\n * \n * With this constant you can get the initial state of the redux.\n * \n */\nexport const AppSliceInitialState: AppSliceType = {\n    UserPreferences: {\n        Language: 'es',\n    },\n};\n"
                                        }
                                    ]
                                },
                                {
                                    "type": "folder",
                                    "name": "types",
                                    "content": [
                                        {
                                            "type": "file",
                                            "name": "I18nType.ts",
                                            "content": "/**\n * **DESCRIPTION:**\n * \n * With this type we can refer to objects that have\n * multiples strings dependenly of what language you want.\n * \n * On this case we have:\n * \n * * es: Spanish transaltion.\n * * en: English translation.\n */\nexport type I18nType = {\n  /**\n   * With this property we can refer to the string of the spanish translation.\n   */\n  es: string;\n  /**\n   * With this property we can refer to the string of the english translation.\n   */\n  en: string;\n  /**\n   * With this property we can refer to the string of the french translation.\n   */\n  fr: string;\n  /**\n   * With this property we can refer to the string of the german translation.\n   */\n  de: string;\n  /**\n   * With this property we can refer to the string of the italian translation.\n   */\n  it: string;\n  /**\n   * With this property we can refer to the string of the japanese translation.\n   */\n  ja: string;\n  /**\n   * With this property we can refer to the string of the simplified chinese translation.\n   */\n  zhHans: string;\n  /**\n   * With this property we can refer to the string of the simplified chinese translation.\n   */\n  pt: string;\n  /**\n   * With this property we can refer to the string of the russian translation.\n   */\n  ru: string;\n  /**\n   * With this property we can refer to the string of the korean translation.\n   */\n  ko: string;\n  /**\n   * With this property we can refer to the string of the tradicional chinese translation.\n   */\n  zhHant: string;\n};\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "TranslationsType.ts",
                                            "content": "import type { I18nType } from './I18nType';\n\n/**\n * **DESCRIPTION:**\n * \n * With this type we can refer to objects that have\n * diferent key names refereing to a transaltion keys\n * with the translations inside.\n */\nexport type TranslationsType = {\n    [key: string] : I18nType;\n};\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "LanguageIdType.ts",
                                            "content": "import type { I18nType } from './I18nType';\n\n/**\n * **DESCRIPTION:**\n * \n * With this type we can refer only for\n * the values of the languages like if you want\n * spanish you can set to 'es' or if you want \n * an englis you can set 'en'. The values that can\n * have this type is equal to the key names of the\n * I18nType.\n * \n */\nexport type LanguageIdType = keyof I18nType;\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "AppSliceType.ts",
                                            "content": "import type { LanguageIdType } from './LanguageIdType';\n\n/**\n * **DESCRIPTION:**\n * \n * With this type we can know what is the structure\n * that have the state on the redux and can be used\n * easyly for the selectors for understand what \n * properties the state has.\n */\nexport type AppSliceType = {\n    /**\n     * With this property we can know the preferences that\n     * have the user when is using this application like\n     * the language the user want to have.\n     */\n    UserPreferences: {\n        /**\n         * With this property we can know the language the user\n         * selected to see the application with. This property\n         * contains strings like 'es' for spanish or 'en' for\n         * english.\n         */\n        Language: LanguageIdType;\n    };\n};\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "ActionWithPayload.ts",
                                            "content": "/**\n * **DESCRIPTION:**\n * \n * With this type we can have the reference of what is an\n * action with the payload of the type T we pass.\n * \n * **EXAMPLE OF USE:**\n * \n * @example \n * ActionWithPayload<string>\n * \n */\nexport type ActionWithPayload<T> = {\n  /**\n   * On this property we know the name of the action called.\n   */\n  type: string;\n  /**\n   * On this property wee can have the value that we want to\n   * pass to the action for the call.\n   */\n  payload: T;\n};\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "ProviderStoreType.ts",
                                            "content": "import type { renderWithProviders } from '../test-utils/renderWithProviders';\n\n/**\n * **DESCRIPTION:**\n * \n * With this type you can have the references of the store that have this\n * frontend application for dispacth or for get the state of the redux\n * when you are testing the funcionality.\n */\nexport type ProviderStoreType = ReturnType<typeof renderWithProviders>;\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "UseSelectorType.ts",
                                            "content": "import type { AppSliceType } from './AppSliceType';\n\n/**\n * **DESCRIPTION:**\n * \n * With this type we can have the refernce for the properties\n * of the state usable on the selector.\n * \n * **EXAMPLE OF USE:**\n * \n * @example\n * const languageSelected = useSelector((state: UseSelectorType) => state.AppSlice.UserPreferences.Language);\n */\nexport type UseSelectorType = {\n    AppSlice: AppSliceType,\n}\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "ProviderWrapperType.ts",
                                            "content": "/**\n * **DESCRIPTION:**\n * \n * With this type we cna know what the provider\n * wrapper wants and return, in this case wants a\n * children and returns a react element.\n * \n * **EXAMPLE OF USE:**\n * \n * @example\n * <wrapper>\n *  <div> Hello world :) ! div element now is the children of wrapper </div>\n * </wrapper>\n */\nexport type ProviderWrapperType = ({ children }: {\n    children: React.ReactNode;\n}) => React.JSX.Element\n"
                                        }
                                    ]
                                },
                                {
                                    "type": "folder",
                                    "name": "hooks",
                                    "content": [
                                        {
                                            "type": "folder",
                                            "name": "useTranslations",
                                            "content": [
                                                {
                                                    "type": "file",
                                                    "name": "useTranslations.ts",
                                                    "content": "import { useSelector } from 'react-redux';\nimport { translations } from '../../i18n/translations';\nimport type { I18nType } from '../../types/I18nType';\nimport type { UseSelectorType } from '../../types/UseSelectorType';\n\n/**\n * **DESCRIPTION:**\n * \n * With this interface we can represent the return of the\n * custom hook of the useTranslation, that this custom\n * hook will return only one property that is the function\n * called t that this function is used for get the translations\n * by a translation tag.\n */\ninterface UseTranslationsReturn {\n  /**\n   * **DESCRIPTION:**\n   * \n   * With this function you can get the translated text transalated\n   * on the language that is selected on the state by passing the\n   * translation tag.\n   * \n   * **PARAMETERS:**\n   * \n   * @param stringIdentifier On this property you need to pass the\n   * translation tag of the file of translations.ts that you want\n   * to get the translation for.\n   * \n   * **RETURNS:**\n   * \n   * @returns returns the text trasnlated on the language selected on\n   * the state.\n   * \n   * **EXAMPLE OF USE:**\n   * \n   * @example\n   * const { t } = useTranslations({});\n   * const textTranslated: string = t('exampleTag');\n   */\n  t: (stringIdentifier: I18nType | string) => string\n}\n\n/**\n * **DESCRIPTION:**\n * \n * With this interface we can define the properties that useTranslation\n * hook need but for now it need no properties.\n */\ninterface UseTranslationsProps {\n\n}\n\n/**\n * **DESCRIPTION:**\n * \n * With this customhook you can get a function called t that is used for\n * the translations.\n * \n * **RETURNS:**\n * \n * @returns return an object that contains the porperty called t that is the funcion.\n * \n * **EXAMPLE OF USE:**\n * \n * @example\n * const { t } = useTranslations({});\n * const textTranslated: string = t('exampleTag');\n */\nexport const useTranslations = ({} : UseTranslationsProps): UseTranslationsReturn => {\n\n  const languageSelected = useSelector((state: UseSelectorType) => state.AppSlice.UserPreferences.Language);\n\n  const t = (stringIdentifier: I18nType | string): string => {\n    if (typeof stringIdentifier === 'string') {\n      if (translations[stringIdentifier] != undefined) {\n        return translations[stringIdentifier][languageSelected];\n      } else return translations.errorLocalizedIdNotFound[languageSelected];\n    } else {\n      return stringIdentifier[languageSelected];\n    }\n  }\n\n  return {\n    t\n  }\n}\n"
                                                },
                                                {
                                                    "type": "folder",
                                                    "name": "__test__",
                                                    "content": [
                                                        {
                                                            "type": "file",
                                                            "name": "useTranslations.spec.ts",
                                                            "content": "import { renderHook, act } from '@testing-library/react';\nimport { useTranslations } from '../useTranslations';\nimport { translations } from '../../../i18n/translations';\nimport { setLanguage } from '../../../redux/slices/AppSlice';\nimport { getProviderRenderWrapper } from '../../../test-utils/getProviderRenderWrapper';\nimport type { ProviderWrapperType } from '../../../types/ProviderWrapperType';\nimport type { ProviderStoreType } from '../../../types/ProviderStoreType';\n\ndescribe('Test for useTranslations custom hook', () => {\n  let store: ProviderStoreType;\n  let wrapper: ProviderWrapperType;\n  let result: { current: ReturnType<typeof useTranslations> };\n\n  beforeEach(() => {\n    const { wrapper: Wrapper, store: Store} = getProviderRenderWrapper();\n    wrapper = Wrapper;\n    store = Store;\n    result = renderHook(() => useTranslations({}), {\n      wrapper,\n    }).result;\n  });\n\n  test('1.- the custom hook return the correct properties', () => {\n    expect(result.current.t).toBeDefined();\n  });\n\n  test('2.- the custom hook return the correct translation with an existing translation ID', () => {\n    let translationResult: string = '';\n\n    act(() => {\n      translationResult = result.current.t('example');\n    });\n\n    expect(translationResult).toBe(translations['example'].es);\n  });\n\n  test('3.- the custom hook return the correct error for an unexisting translation ID', () => {\n    let translationResult: string = '';\n\n    act(() => {\n      translationResult = result.current.t('siiiiHombreeee');\n    });\n\n    expect(translationResult).toBe(translations['errorLocalizedIdNotFound'].es);\n  });\n\n  test('4.- the custom hook return the correct translation with an existing translation ID in diferent languages', () => {\n    let translationResult: string = '';\n\n    act(() => {\n      store.dispatch(setLanguage('en'));\n    });\n\n    result = renderHook(() => useTranslations({}), {\n      wrapper,\n    }).result;\n\n    act(() => {\n      translationResult = result.current.t('example');\n    });\n\n    expect(translationResult).toBe(translations['example'].en);\n  });\n});\n"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "folder",
                                    "name": "methods",
                                    "content": []
                                },
                                {
                                    "type": "folder",
                                    "name": "mocks",
                                    "content": []
                                },
                                {
                                    "type": "folder",
                                    "name": "redux",
                                    "content": [
                                        {
                                            "type": "file",
                                            "name": "AppStore.ts",
                                            "content": "import { configureStore } from '@reduxjs/toolkit';\nimport * as Slices from './slices';\n\n/**\n * **Description:**\n * \n * With this contant you can have all the slices with\n * their slices properties for the it's states and theis\n * reducers for the calls for the state. This is the root\n * of the state of the aplication containing all the states\n * that are inside the slices, a slice is for store some values\n * of a thematic like UI or general etc... and the state works like\n * global properties of the app that the components can get via\n * selector and set via dispatch the reducer that this properti have\n * (AppStore).\n */\nexport const AppStore = configureStore({\n  reducer: {\n    ...Slices\n  },\n});\n"
                                        },
                                        {
                                            "type": "folder",
                                            "name": "reducers",
                                            "content": [
                                                {
                                                    "type": "file",
                                                    "name": "index.ts",
                                                    "content": "export { setLanguage } from './setLanguage/setLanguage';\n"
                                                },
                                                {
                                                    "type": "folder",
                                                    "name": "setLanguage",
                                                    "content": [
                                                        {
                                                            "type": "file",
                                                            "name": "setLanguage.ts",
                                                            "content": "import type { WritableDraft } from 'immer';\nimport type { AppSliceType } from '../../../types/AppSliceType';\nimport type { ActionWithPayload } from '../../../types/ActionWithPayload';\nimport type { LanguageIdType } from '../../../types/LanguageIdType';\n\n/**\n * **DESCRIPTION:**\n * \n * With this action we can change the property of the language of the state.\n * \n * **PARAMETERS:**\n * \n * @param state With this property we need to pass the actual state of the redux,\n * this prop is needed only when you pass this reducer on the slice of the initialization.\n * @param action With this property we need to pass the action with payload with a payload typed\n * as LanguageIdType. When you dipatch the reducer you only need to pass the payload but now when\n * we need to pass the Action for the slice to create it properlly.\n */\nexport const setLanguage = (state: WritableDraft<AppSliceType>, action: ActionWithPayload<LanguageIdType>): void => {\n    state.UserPreferences.Language = action.payload;\n}\n"
                                                        },
                                                        {
                                                            "type": "folder",
                                                            "name": "__test__",
                                                            "content": [
                                                                {
                                                                    "file": "file",
                                                                    "name": "setLanguage.spec.ts",
                                                                    "content": "import type { ProviderStoreType } from '../../../../types/ProviderStoreType';\nimport type { LanguageIdType } from '../../../../types/LanguageIdType';\nimport { setLanguage } from '../../../slices/AppSlice';\nimport { getProviderHookWrapper } from '../../../../test-utils/getProviderHookWrapper';\n\ndescribe('Test for setLanguage reducer', () => {\n\n    let store: ProviderStoreType;\n\n    beforeEach(() => {\n        const { store: Store } = getProviderHookWrapper();\n        store = Store;\n    });\n\n    test('1.- dispatching the reducer \"setLanguage\" will run as expect.', () => {\n        store.dispatch(setLanguage('es'));\n        const stateLanguage: LanguageIdType = store.getState().AppSlice.UserPreferences.Language;\n        expect(stateLanguage).toBe('es');\n    });\n});\n"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "folder",
                                            "name": "slices",
                                            "content": [
                                                {
                                                    "type": "file",
                                                    "name": "index.ts",
                                                    "content": "export { AppSlice } from './AppSlice';\n"
                                                },
                                                {
                                                    "type": "file",
                                                    "name": "AppSlice.ts",
                                                    "content": "import { createSlice } from '@reduxjs/toolkit';\nimport { AppSliceInitialState } from '../../constants/AppSliceInitialState';\nimport * as Reducers from '../reducers';\n\n/**\n * **DESCRIPTION:**\n * \n * With this slice we have all the global properties of the state\n * of redux for all the application. this is used for get the actions\n * that we can call and the reducers, for set it up on the appstore.\n */\nexport const AppSliceInstance = createSlice({\n    name: 'AppSlice',\n    initialState: AppSliceInitialState,\n    reducers: Reducers,\n});\n\nexport const {\n    setLanguage,\n} = AppSliceInstance.actions;\n\n/**\n * **DESCRIPTION:**\n * \n * With this slice we can set it up on a AppStore for\n * use and have the actions and properties of the slice\n * on the state.\n */\nexport const AppSlice = AppSliceInstance.reducer;\n"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "folder",
                                    "name": "i18n",
                                    "content": [
                                        {
                                            "type": "file",
                                            "name": "translations.ts",
                                            "content": "import type { TranslationsType } from '../types/TranslationsType';\n\n/**\n * **DESCRIPTION:**\n * \n * With this constant we can have all the translations of the aplication\n * that is being used by the custom hook calles useTranslations.\n */\nexport const translations: TranslationsType = {\n  /**\n   * With this tag you can render or the spanish text or the englih text.\n   */\n  example: {\n    es: 'ejemplo',\n    en: 'example',\n    fr: 'exemple',\n    de: 'Beispiel',\n    it: 'esempio',\n    ja: '例',\n    zhHans: '例子',\n    pt: 'exemplo',\n    ru: 'пример',\n    ko: '예',\n    zhHant: '例子',\n  },\n  errorLocalizedIdNotFound: {\n    es: 'Elemento no encontrado.',\n    en: 'Item not found.',\n    fr: 'Élément non trouvé.',\n    de: 'Element nicht gefunden.',\n    it: 'Elemento non trovato.',\n    ja: '要素が見つかりません。',\n    zhHans: '未找到元素。',\n    pt: 'Elemento não encontrado.',\n    ru: 'Элемент не найден.',\n    ko: '항목을 찾을 수 없습니다.',\n    zhHant: '未找到元素。'\n  },\n};\n"
                                        }
                                    ]
                                },
                                {
                                    "type": "folder",
                                    "name": "test-utils",
                                    "content": [
                                        {
                                            "type": "file",
                                            "name": "getProviderRenderWrapper.tsx",
                                            "content": "import { BrowserRouter } from 'react-router-dom';\nimport { AppStore } from '../redux/AppStore';\nimport { Provider } from 'react-redux';\nimport type { JSX } from 'react';\n\n/**\n * **DESCRIPTION:**\n * \n * With this interface we can represent the two properties that\n * thetest util functions returns that one is the wrapper and the\n * other is the property of the store for use it for test the state.\n */\ninterface GetProviderRenderWrapperReturn {\n    /**\n     * **DESCRIPTION:**\n     * With this react component you can pass a component to render inside\n     * this wrapper that is for have the store data for testing, this wrapper\n     * is only for the test suits and for test.\n     * \n     *  **RETURNS:**\n     *  \n     * @returns returns ta JSX element, it's a react component.\n     * \n     * **EXAMPLE OF USE:**\n     * \n     * @example\n     * <wrapper>\n     *  <yourComponent/>\n     * <wrapper>\n     */\n    wrapper: ({ children }: {\n        children: React.ReactNode;\n    }) => JSX.Element;\n    /**\n     * With this properties you can access to the state on the tests\n     * or you can run an action by the dispatch function that this property\n     * have.\n     */\n    store: typeof AppStore\n}\n\n/**\n * **DESCRIPTION:**\n * \n * With this method you can get the wrapper for hooks of the app and the store for the test\n * of the components or funcionality that uses or have the state of the redux.\n * \n *  **RETURNS:**\n * \n * @returns returns an object with the wrapper and the store.\n * \n * **EXAMPLE OF USE:**\n * \n * @example\n * const {wrapper, store} = getProviderRenderWrapper();\n */\nexport const getProviderRenderWrapper = (): GetProviderRenderWrapperReturn => {\n    const wrapper = ({ children }: { children: React.ReactNode }) => (\n        <Provider store={AppStore}>\n              <BrowserRouter>\n                {children}\n              </BrowserRouter>\n        </Provider>\n    );\n\n    return {\n        wrapper,\n        store: AppStore,\n    }\n}\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "renderWithProviders.tsx",
                                            "content": "import { render } from '@testing-library/react';\nimport { getProviderRenderWrapper } from './getProviderRenderWrapper';\n\n/**\n * **DESCRIPTION:**\n * \n * With this function you can render for test you component inside the all providers you need ton this project.\n * \n * **PARAMETERS:**\n * \n * @param component You need to pass the component you want to render to test with the providers.\n * \n * **RETURNS:**\n * \n * @returns return the store of the redux for see the state.\n * \n * **EXAMPLE:**\n * \n * @example\n * const store = renderWithProviders(<yourComponent>);\n */\nexport const renderWithProviders = (component: React.ReactElement) => {\n    const { wrapper, store } = getProviderRenderWrapper();\n    render(component, { wrapper });\n    return store;\n}\n"
                                        }
                                    ]
                                },
                                {
                                    "type": "folder",
                                    "name": "components",
                                    "content": [
                                        {
                                            "type": "folder",
                                            "name": "App",
                                            "content": [
                                                {
                                                    "type": "file",
                                                    "name": "App.tsx",
                                                    "content": "import { Provider } from 'react-redux';\nimport { AppStore } from '../../redux/AppStore';\nimport { type FC } from 'react';\nimport './App.css';\n\n/**\n * **PROPERTIES OF APP COMPONENT:**\n * \n * This interface currently have 0 properties but if you add any property \n * you must document it and type it correctly for the usability of the component.\n * \n */\ninterface AppProps {\n\n}\n\n/**\n * **DESCRIPTION:**\n * \n * With this Component you can render all the app of the |SPECIAL|\n * frontend services.\n * \n * **EXAMPLE OF USE:**\n * @example\n * return (\n *   <App/>\n * )\n * \n * @returns return the initial point of the |SPECIAL| frontend project.\n */\nexport const App: FC<AppProps> = ({ }) => {\n\n  return (\n    <Provider store={AppStore}>\n      <div data-testid='App-Component'>\n        Entry Point. Good Luck with the project of |SPECIAL|\n      </div>\n    </Provider>\n  )\n}\n"
                                                },
                                                {
                                                    "type": "file",
                                                    "name": "App.css",
                                                    "content": ""
                                                },
                                                {
                                                    "type": "folder",
                                                    "name": "__test__",
                                                    "content": [
                                                        {
                                                            "type": "file",
                                                            "name": "App.spec.tsx",
                                                            "content": "import { App } from '../App';\nimport { render, screen } from '@testing-library/react';\n\ndescribe('Test for App component', () => {\n\n    test('1.- Renders the <App/> component', async () => {\n        render(<App/>);\n        const component = await screen.findByTestId('App-Component');\n        expect(component).toBeInTheDocument();\n    });\n\n});\n"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "folder",
                            "name": "public",
                            "content": [
                                {
                                    "type": "folder",
                                    "name": "images",
                                    "content": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "folder",
                    "name": ".github",
                    "content": [
                        {
                            "type": "folder",
                            "name": "workflows",
                            "content": [
                                {
                                    "type": "file",
                                    "name": "create-pr.yml",
                                    "content": "name: Create Pull Request\n\n\non:\n  push:\n    branches-ignore:\n      - main\n\npermissions:\n  contents: write\n  pull-requests: write\n\njobs:\n  create_pull_request:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v3\n        with:\n          persist-credentials: false\n        continue-on-error: true\n\n      - name: Set up Node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n        continue-on-error: true\n\n      - name: Authenticate with GitHub\n        run: echo \"${{ secrets.GITHUB_TOKEN }}\" | gh auth login --with-token\n        continue-on-error: true\n\n      - name: Set up Git\n        run: |\n          git config --global user.name \"${{ github.actor }}\"\n          git config --global user.email \"${{ github.actor }}@users.noreply.github.com\"\n        continue-on-error: true\n\n      - name: Create Pull Request\n        uses: peter-evans/create-pull-request@v4\n\n        with:\n          token: ${{ secrets.GITHUB_TOKEN }}\n\n          commit-message: 'Auto-generated PR from push'\n          base: main\n          branch: auto/pr-${{ github.actor }}-${{ github.run_id }}\n          delete-branch: false\n          team-reviewers: MizzyMi-Studios/developer-team\n          author: '${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>'\n          assignees: ${{ github.actor }}\n          body: |\n            # Pull Request Description\n\n            ## Short Description\n            [Put some short details about your changes and addons.]\n\n            ## Additional Notes\n            [Something extra about the PR]\n        continue-on-error: true\n"
                                },
                                {
                                    "type": "file",
                                    "name": "delete-merged-branch.yml",
                                    "content": "name: Delete merged branch\n\non:\n  pull_request:\n    types:\n      - closed\n\npermissions:\n  contents: write\n  pull-requests: write\n\njobs:\n  delete-branch:\n    if: github.event.pull_request.merged == true\n    runs-on: ubuntu-latest\n    steps:\n      - name: Delete branch\n        uses: dawidd6/action-delete-branch@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          branches: ${{ github.event.pull_request.head.ref }}\n"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "file",
                    "name": ".env",
                    "content": "MONGODB_URI=mongodb+srv://ExampleUri"
                },
                {
                    "type": "file",
                    "name": ".gitignore",
                    "content": "# Logs\nlogs\n*.log\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\nlerna-debug.log*\n.pnpm-debug.log*\n\n# Diagnostic reports (https://nodejs.org/api/report.html)\nreport.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json\n\n# Runtime data\npids\n*.pid\n*.seed\n*.pid.lock\n\n# Directory for instrumented libs generated by jscoverage/JSCover\nlib-cov\n\n# Coverage directory used by tools like istanbul\ncoverage\n*.lcov\n\n# nyc test coverage\n.nyc_output\n\n# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)\n.grunt\n\n# Bower dependency directory (https://bower.io/)\nbower_components\n\n# node-waf configuration\n.lock-wscript\n\n# Compiled binary addons (https://nodejs.org/api/addons.html)\nbuild/Release\n\n# Dependency directories\nnode_modules/\njspm_packages/\n\n# Snowpack dependency directory (https://snowpack.dev/)\nweb_modules/\n\n# TypeScript cache\n*.tsbuildinfo\n\n# Optional npm cache directory\n.npm\n\n# Optional eslint cache\n.eslintcache\n\n# Optional stylelint cache\n.stylelintcache\n\n# Microbundle cache\n.rpt2_cache/\n.rts2_cache_cjs/\n.rts2_cache_es/\n.rts2_cache_umd/\n\n# Optional REPL history\n.node_repl_history\n\n# Output of 'npm pack'\n*.tgz\n\n# Yarn Integrity file\n.yarn-integrity\n\n# dotenv environment variable files\n.env\n.env.development.local\n.env.test.local\n.env.production.local\n.env.local\n\n# parcel-bundler cache (https://parceljs.org/)\n.cache\n.parcel-cache\n\n# Next.js build output\n.next\nout\n\n# Nuxt.js build / generate output\n.nuxt\ndist\n\n# Gatsby files\n.cache/\n# Comment in the public line in if your project uses Gatsby and not Next.js\n# https://nextjs.org/blog/next-9-1#public-directory-support\n# public\n\n# vuepress build output\n.vuepress/dist\n\n# vuepress v2.x temp and cache directory\n.temp\n.cache\n\n# Docusaurus cache and generated files\n.docusaurus\n\n# Serverless directories\n.serverless/\n\n# FuseBox cache\n.fusebox/\n\n# DynamoDB Local files\n.dynamodb/\n\n# TernJS port file\n.tern-port\n\n# Stores VSCode versions used for testing VSCode extensions\n.vscode-test\n\n# yarn v2\n.yarn/cache\n.yarn/unplugged\n.yarn/build-state.yml\n.yarn/install-state.gz\n.pnp.*"
                },
                {
                    "type": "file",
                    "name": ".gitattributes",
                    "content": "# Auto detect text files and perform LF normalization\n* text=auto\n"
                },
                {
                    "type": "file",
                    "name": "package.json",
                    "content": "{\n    \"private\": true,\n    \"workspaces\": [\n        \"|SPECIAL|-backend\",\n        \"|SPECIAL|-frontend\"\n    ],\n    \"scripts\": {\n        \"start\": \"concurrently -n API,FRONT \\\"yarn workspace |SPECIAL|-backend start\\\" \\\"yarn workspace |SPECIAL|-frontend start\\\"\",\n        \"test\": \"yarn workspace |SPECIAL|-frontend test\"\n    },\n    \"devDependencies\": {\n        \"component-crafter\": \"^2.0.17\",\n        \"concurrently\": \"^9.2.0\",\n        \"madge\": \"^8.0.0\"\n    }\n}\n"
                },
                {
                    "type": "folder",
                    "name": "|SPECIAL|-backend",
                    "content": [
                        {
                            "type": "file",
                            "name": "package.json",
                            "content": "{\n  \"name\": \"|SPECIAL|-backend\",\n  \"private\": true,\n  \"version\": \"1.0.0\",\n  \"main\": \"src/index.ts\",\n  \"license\": \"MIT\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"compile\": \"tsc\",\n    \"start\": \"tsc && nodemon ./dist/index.js\"\n  },\n  \"dependencies\": {\n    \"@apollo/client\": \"^3.9.5\",\n    \"@apollo/server\": \"^4.10.0\",\n    \"@types/express\": \"^4.17.21\",\n    \"apollo-server\": \"^3.13.0\",\n    \"crypto\": \"^1.0.1\",\n    \"express\": \"^4.18.2\",\n    \"graphql\": \"^16.8.1\",\n    \"mongodb\": \"^6.3.0\",\n    \"mongoose\": \"^8.1.3\",\n    \"nodemailer\": \"^7.0.5\",\n    \"paypal-rest-sdk\": \"^1.8.1\",\n    \"typescript\": \"^5.3.3\",\n    \"uuid\": \"^9.0.1\"\n  },\n  \"devDependencies\": {\n    \"@types/dotenv\": \"^8.2.3\",\n    \"@types/mongoose\": \"^5.11.97\",\n    \"@types/node\": \"^20.11.19\",\n    \"nodemon\": \"^3.0.3\"\n  }\n}\n"
                        },
                        {
                            "type": "file",
                            "name": "tsconfig.json",
                            "content": "{\n    \"compilerOptions\": {\n        \"rootDirs\": [\"src\"],        \"outDir\": \"dist\",\n        \"lib\": [\"ES2020\"],\n        \"target\": \"ES2020\",\n        \"module\": \"ESNext\",\n        \"moduleResolution\": \"Node\",\n        \"esModuleInterop\": true,\n        \"types\": [\"node\"]\n    }\n}\n"
                        },
                        {
                            "type": "folder",
                            "name": "src",
                            "content": [
                                {
                                    "type": "file",
                                    "name": "index.ts",
                                    "content": "import { ApolloServer } from '@apollo/server';\nimport { startStandaloneServer } from '@apollo/server/standalone';\nimport { resolvers } from './Apollo/resolvers.js';\nimport { typeDefs } from './Apollo/typeDefs.js';\n\nconst server = new ApolloServer({typeDefs, resolvers});\n\nconst startServer = async () => {\n  const { url } = await startStandaloneServer(server, {\n    listen: { port: 4001 },\n  });\n  console.log('Server ready at ' + url + '!');\n};\n\nawait startServer();\n"
                                },
                                {
                                    "type": "folder",
                                    "name": "Apollo",
                                    "content": [
                                        {
                                            "type": "file",
                                            "name": "typeDefs.ts",
                                            "content": "export const typeDefs = ` #graphql\n\n`;\n"
                                        },
                                        {
                                            "type": "file",
                                            "name": "resolvers.ts",
                                            "content": "import 'dotenv/config';\nimport dotenv from 'dotenv';\nimport mongoose from 'mongoose';\nimport * as Resolvers from './resolvers/index.js';\n\ndotenv.config({ path: '../.env' });\n\nawait mongoose.connect(process.env.MONGODB_URI!, { dbName: '|SPECIAL|DataBase' });\n\ntype ResolverModel = { Query?: Record<string, any>; Mutation?: Record<string, any> };\nconst modules = Object.values(Resolvers) as ResolverModel[];\n\nconst merge = (key: 'Query' | 'Mutation') =>\n  modules.reduce((acc, m) => Object.assign(acc, m[key] ?? {}), {});\n\nexport const resolvers = {\n  Query: merge('Query'),\n  Mutation: merge('Mutation'),\n};\n"
                                        },
                                        {
                                            "type": "folder",
                                            "name": "models",
                                            "content": []
                                        },
                                        {
                                            "type": "folder",
                                            "name": "recipes",
                                            "content": [
                                                {
                                                    "type": "file",
                                                    "name": "index.ts",
                                                    "content": ""
                                                }
                                            ]
                                        },
                                        {
                                            "type": "folder",
                                            "name": "resolvers",
                                            "content": [
                                                {
                                                    "type": "file",
                                                    "name": "index.ts",
                                                    "content": ""
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "file",
                    "name": ".component-crafter-config.json",
                    "content": "{\n    \"showExtraDetails\": false,\n    \"specialProperty\": \"|PR0PS|\",\n    \"commands\": [\n        {\n            \"name\": \"component\",\n            \"description\": \"with this command you can create a component on the |SPECIAL|-frontend application.\",\n            \"startingPath\": [\n                \"|SPECIAL|-frontend\",\n                \"src\",\n                \"components\"\n            ],\n            \"scaffold\": [\n                {\n                    \"type\": \"folder\",\n                    \"name\": \"|PR0PS|\",\n                    \"content\": [\n                        {\n                            \"type\": \"file\",\n                            \"name\": \"|PR0PS|.css\",\n                            \"content\": \"\"\n                        },\n                        {\n                            \"type\": \"file\",\n                            \"name\": \"|PR0PS|.tsx\",\n                            \"content\": \"import { type FC } from 'react';çimport './|PR0PS|.css';çç/**ç * **PROPERTIES OF APP COMPONENT:**ç * ç * This interface currently have 0 properties but if you add any property ç * you must document it and type it correctly for the usability of the component.ç * ç */çinterface |PR0PS|Props {çç}çç/**ç * **DESCRIPTION:**ç * ç * Write something here about the |PR0PS| component.ç * ç * **EXAMPLE OF USE:**ç * @exampleç * return (ç *   <|PR0PS|/>ç * )ç */çexport const |PR0PS|: FC<|PR0PS|Props> = ({ }) => {çç  return (ç    <div data-testid='|PR0PS|-Component'>ç      Entry Point for |PR0PS| component. Good Luck!ç    </div>ç  )ç}ç\"\n                        },\n                        {\n                            \"type\": \"folder\",\n                            \"name\": \"__test__\",\n                            \"content\": [\n                                {\n                                    \"type\": \"file\",\n                                    \"name\": \"|PR0PS|.spec.tsx\",\n                                    \"content\": \"import { |PR0PS| } from '../|PR0PS|';çimport { render, screen } from '@testing-library/react';ççdescribe('Test for |PR0PS| component', () => {çç    test('1.- Renders the <|PR0PS|/> component', async () => {ç        render(<|PR0PS|/>);ç        const component = await screen.findByTestId('|PR0PS|-Component');ç        expect(component).toBeInTheDocument();ç    });çç});ç\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"name\": \"hook\",\n            \"description\": \"with this command you can create a custom hook on the |SPECIAL|-frontend application.\",\n            \"startingPath\": [\n                \"|SPECIAL|-frontend\",\n                \"src\",\n                \"hooks\"\n            ],\n            \"scaffold\": [\n                {\n                    \"type\": \"folder\",\n                    \"name\": \"use|PR0PS|\",\n                    \"content\": [\n                        {\n                            \"type\": \"file\",\n                            \"name\": \"use|PR0PS|.ts\",\n                            \"content\": \"/**ç * **DESCRIPTION:**ç * ç * With this interface we can represent the return of theç * custom hook of the use|PR0PS|, that this customç * hook will return only one property that an object of thisç * type.ç */çinterface Use|PR0PS|Return {çç}çç/** * **DESCRIPTION:**ç * ç * This interface currently have 0 properties but if you add any propertyç * you must document it and type it correctly for the usability of the custom hook.ç */çinterface Use|PR0PS|Props {çç}çç/**ç * **DESCRIPTION:**ç * ç * You need to write a description of what the use|PR0PS| do on here.ç * ç * **RETURNS:**ç * ç * @returns returns an object with the properties of: ç * * need to write itç * ç * **EXAMPLE OF USE:**ç * ç * @exampleç * const { } = use|PR0PS|({}); ç */çexport const use|PR0PS| = ({ }: Use|PR0PS|Props): Use|PR0PS|Return => {çç    return {çç    }çç}ç\"\n                        },\n                        {\n                            \"type\": \"folder\",\n                            \"name\": \"__test__\",\n                            \"content\": [\n                                {\n                                    \"type\": \"file\",\n                                    \"name\": \"use|PR0PS|.spec.ts\",\n                                    \"content\": \"import { use|PR0PS| } from '../use|PR0PS|';çimport { renderHook } from '@testing-library/react';çimport { getProviderRenderWrapper } from '../../../test-utils/getProviderRenderWrapper';çimport type { ProviderWrapperType } from '../../../types/ProviderWrapperType';çimport type { ProviderStoreType } from '../../../types/ProviderStoreType';ççdescribe('Test for use|PR0PS| custom hook', () => {ç    let store: ProviderStoreType;ç    let wrapper: ProviderWrapperType;ç    let result: { current: ReturnType<typeof use|PR0PS|> };çç    beforeEach(() => {ç        const { wrapper: Wrapper, store: Store } = getProviderRenderWrapper();ç        wrapper = Wrapper;ç        store = Store;ç        result = renderHook(() => use|PR0PS|({}), {ç            wrapper,ç        }).result;ç    });çç    test('1.- the custom hook return the correct properties', () => {ç        expect(result.current).toBeDefined();ç    });ç});ç\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"name\": \"ch\",\n            \"description\": \"with this command you can create a component with its hook on the |SPECIAL|-frontend application.\",\n            \"startingPath\": [\n                \"|SPECIAL|-frontend\",\n                \"src\",\n                \"components\"\n            ],\n            \"scaffold\": [\n                {\n                    \"type\": \"folder\",\n                    \"name\": \"|PR0PS|\",\n                    \"content\": [\n                        {\n                            \"type\": \"file\",\n                            \"name\": \"|PR0PS|.css\",\n                            \"content\": \"\"\n                        },\n                        {\n                            \"type\": \"file\",\n                            \"name\": \"|PR0PS|.tsx\",\n                            \"content\": \"import { use|PR0PS| } from '../../hooks/use|PR0PS|/use|PR0PS|';çimport { type FC } from 'react';çimport './|PR0PS|.css';çç/**ç * **PROPERTIES OF APP COMPONENT:**ç * ç * This interface currently have 0 properties but if you add any property ç * you must document it and type it correctly for the usability of the component.ç * ç */çinterface |PR0PS|Props {çç}çç/**ç * **DESCRIPTION:**ç * ç * Write something here about the |PR0PS| component.ç * ç * **EXAMPLE OF USE:**ç * @exampleç * return (ç *   <|PR0PS|/>ç * )ç */çexport const |PR0PS|: FC<|PR0PS|Props> = ({ }) => {çç  const { } = use|PR0PS|({});çç  return (ç    <div data-testid='|PR0PS|-Component'>ç      Entry Point for |PR0PS| component. Good Luck!ç    </div>ç  )ç}ç\"\n                        },\n                        {\n                            \"type\": \"folder\",\n                            \"name\": \"__test__\",\n                            \"content\": [\n                                {\n                                    \"type\": \"file\",\n                                    \"name\": \"|PR0PS|.spec.tsx\",\n                                    \"content\": \"import { |PR0PS| } from '../|PR0PS|';çimport { render, screen } from '@testing-library/react';ççdescribe('Test for |PR0PS| component', () => {çç    test('1.- Renders the <|PR0PS|/> component', async () => {ç        render(<|PR0PS|/>);ç        const component = await screen.findByTestId('|PR0PS|-Component');ç        expect(component).toBeInTheDocument();ç    });çç});ç\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n             \"commandsAfter\": [ \"yarn craft hook |PR0PS|\" ]\n        },\n        {\n            \"name\": \"method\",\n            \"description\": \"with this command you can create a method with its hook on the |SPECIAL|-frontend application.\",\n            \"startingPath\": [\n                \"|SPECIAL|-frontend\",\n                \"src\",\n                \"methods\"\n            ],\n            \"scaffold\": [\n                {\n                    \"type\": \"folder\",\n                    \"name\": \"|PR0PS|\",\n                    \"content\": [\n                        {\n                            \"type\": \"file\",\n                            \"name\": \"|PR0PS|.ts\",\n                            \"content\": \"/**ç * **DESCRIPTION:**ç * ç * With this interface we can define the properties that |PR0PS|ç * method need but for now it need no properties.ç */çinterface |PR0PS|Props {çç}çç/**ç * **DESCRIPTION:**ç * ç * You need to write a description of what the |PR0PS| do on here.ç * ç * ** PARAMETERS:**ç * ç * Right now you only need to pass an empty object.ç * ç * **EXAMPLE TO USE:**ç * ç * @exampleç * |PR0PS|({});ç */çexport const |PR0PS| = ({}: |PR0PS|Props) => {çç}ç\"\n                        },\n                        {\n                            \"type\": \"folder\",\n                            \"name\": \"__test__\",\n                            \"content\": [\n                                {\n                                    \"type\": \"file\",\n                                    \"name\": \"|PR0PS|.spec.ts\",\n                                    \"content\": \"import { |PR0PS| } from '../|PR0PS|';ççdescribe('Test for |PR0PS| method', () => {çç  çç});ç\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"name\": \"reducer\",\n            \"description\": \"with this command you can create a reducer with its hook on the |SPECIAL|-frontend application.\",\n            \"startingPath\": [\n                \"|SPECIAL|-frontend\",\n                \"src\",\n                \"redux\",\n                \"reducers\"\n            ],\n            \"scaffold\": [\n                {\n                    \"type\": \"folder\",\n                    \"name\": \"|PR0PS|\",\n                    \"content\": [\n                        {\n                            \"type\": \"file\",\n                            \"name\": \"|PR0PS|.ts\",\n                            \"content\": \"import type { WritableDraft } from 'immer';çimport type { AppSliceType } from '../../../types/AppSliceType';çimport type { ActionWithPayload } from '../../../types/ActionWithPayload';çç/**ç * **DESCRIPTION:**ç * ç * With this action we can change the property of 'you need to write what property of the state you gonna modify'.ç * ç * **PARAMETERS:**ç * ç * @param state With this property we need to pass the actual state of the redux,ç * this prop is needed only when you pass this reducer on the slice of the initialization.ç * @param action With this property we need to pass the action with payload with a payload typedç * as 'you need to put here what type have the action'. When you dipatch the reducer you only need to pass the payload but now whenç * we need to pass the Action for the slice to create it properlly.ç */çexport const |PR0PS| = (state: WritableDraft<AppSliceType>, action: ActionWithPayload<any>): void => {çç}ç\"\n                        },\n                        {\n                            \"type\": \"file\",\n                            \"name\": \"__test__\",\n                            \"content\": [\n\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}"
                }
            ],
            "commandsAfter": [
                "yarn install",
                "node -e \"const fs=require('fs'); let file='./.component-crafter-config.json'; let data=fs.readFileSync(file,'utf8'); data=data.replace(/ç/g,'\\\\n'); fs.writeFileSync(file,data);\""
            ]
        }
    ]
} as const