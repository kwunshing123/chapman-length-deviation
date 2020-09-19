interface Options {
    returnPercentage: boolean; 
}

/**
 * This function used to calculate string length deviation
 * 
 * @param str1  A string used for compare.
 * @param str2  A string used for compare.
 * @param options option to control return
 * 
 * @return Number or percentage of string length deviation
 */

export default (str1: string, str2: string, options?: Options) : number => {
    const lenOfStr1: number = str1.length;
    const lenOfStr2: number = str2.length;

    let answer: number = 0;

    if (lenOfStr1 === 0 && lenOfStr2 === 0) {
        return answer;
    } else if (lenOfStr1 >= lenOfStr2) {
        answer = lenOfStr2 / lenOfStr1;
    } else {
        answer = lenOfStr1 / lenOfStr2;
    }

    if (options && options.returnPercentage) {
        answer *= 100;
    }

    return answer;
};
