import { forwardRef } from "react";

import * as Styles from "@/components/common/Typography/Text/index.style";

export interface TextProps extends React.ComponentProps<"span"> {
    children?: React.ReactNode;
    size?: "2xl" | "xl" | "l" | "m" | "s" | "xs" | "2xs" | SizeProp;
    weight?: "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    color?: "primary" | "secondary" | "point" | "red" | "darkgray" | "gray" | "lightgray" | string;
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...rest }, ref) => {
    return (
        <Styles.TextElement ref={ref} {...rest}>
            {children}
        </Styles.TextElement>
    );
});
