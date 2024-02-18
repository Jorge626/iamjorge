import classcat from "classcat";
import { twMerge } from "tailwind-merge";

const buildClassName = (
    ...props: Array<
    | Record<string, boolean | undefined>
    | { className: string; selector: string }
    | string
    | undefined
    >
) : string => {
    const className = twMerge(
        props.map((item) => {
            if (typeof item === 'object') {
                if ('className' in item && 'selector' in item) {
                    return item.toString();
                }
            }
            return classcat(item)
        })
    );

    return className;
}

export { buildClassName }