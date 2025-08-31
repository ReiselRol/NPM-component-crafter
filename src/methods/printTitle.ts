/**
 * With this function you can print on the terminal the title
 * of the product with some art. it reset the colors of the
 * terminal too.
 * 
 * @example
 * printTitle();
 */
export const printTitle = () => {
    console.log('\x1b[0m', "");
    console.log('\x1b[0m', "");
    console.log("____________________________________________________________________________________");
    console.log("|_|                                                                              |_|");
    console.log("|    _____                                   __      _____         _____           |");
    console.log("|   / ___/__  __ _  ___  ___  ___  ___ ___  / /_____/ ___/______ _/ _/ /____ ____  |");
    console.log("|  / /__/ _ \\/  ' \\/ _ \\/ _ \\/ _ \\/ -_) _ \\/ __/___/ /__/ __/ _ `/ _/ __/ -_) __/  |");
    console.log("|  \\___/\\___/_/_/_/ .__/\\___/_//_/\\__/_//_/\\__/    \\___/_/  \\_,_/_/ \\__/\\__/_/     |");
    console.log("|_               /_/                                                            ___|");
    console.log("|_|____________________________________________________________________________|RR7|");
    console.log("");
}