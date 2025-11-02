import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva(
	"mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 w-full",
	{
		variants: {
			size: {
				default: "max-w-7xl",
				"2xs": "max-w-lg",
				xs: "max-w-3xl",
				sm: "max-w-5xl",
				lg: "max-w-9xl",
				full: "max-w-full",
			},
		},
		defaultVariants: {
			size: "default",
		},
	}
);

function Container({
	className,
	size,
	children,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
	return (
		<div className={cn(containerVariants({ size, className }))} {...props}>
			{children}
		</div>
	);
}

export { Container };
