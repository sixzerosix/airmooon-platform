import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const mainVariants = cva("flex-1", {
	variants: {},
	defaultVariants: {},
});

function Main({
	className,
	children,
	...props
}: React.ComponentProps<"main"> & VariantProps<typeof mainVariants>) {
	return (
		<main className={cn("", mainVariants({ className }))} {...props}>
			{children}
		</main>
	);
}

export { Main };
