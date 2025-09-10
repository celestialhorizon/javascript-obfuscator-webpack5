export interface IEscapeSequenceEncoder {
    /**
     * @param {string} string
     * @param {boolean} encodeAllSymbols
     * @returns {string}
     */
    encode (string: string, encodeAllSymbols: boolean): string;

    /**
     * @param {string} string
     * @returns {string}
     */
    encode1 (string: string): string;
}
