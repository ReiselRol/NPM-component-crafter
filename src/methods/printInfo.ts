import { printTitle } from "./printTitle";

interface PrintInfoProps {
    message: string;
}

/**
 * With this function we can print some informational message on the terminal.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * - message: On this property you need to pass an string of what you want to print on console.
 * 
 * @example
 * printInfo({ message: "For more command help use --help" });
 */
export const printInfo = ({ message }: PrintInfoProps) => {
    printTitle()
    console.log("");
    console.log(message);
    console.log("");
    console.log('\x1b[36m', "____________________________________________________________________________________");
    console.log('\x1b[36m', "|_|                                                                              |_|");
    console.log('\x1b[36m', "|_                             I N F O R M A T I O N                              _|");
    console.log('\x1b[36m', "|_|______________________________________________________________________________|_|");
    console.log('\x1b[0m', "");
    console.log('\x1b[0m', "");
    console.log('\x1b[0m', "");
}