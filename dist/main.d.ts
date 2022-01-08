interface Props {
    /**
     * Regex to match file, like /\.svg$/
     */
    match: RegExp | RegExp[];
    /**
     * exclude file
     */
    exclude?: RegExp | RegExp[];
}
interface ReturnValue {
    code?: string;
}
export default function ({ match, exclude }: Props): {
    name: string;
    transform(_: string, id: string): Promise<ReturnValue>;
};
export {};
