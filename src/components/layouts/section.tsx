import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("", {
	variants: {
		size: {
			default: "py-10",
			xs: "py-6",
			sm: "py-16",
			lg: "py-20",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

function Section({
	className,
	size,
	children,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof sectionVariants>) {
	return (
		<section
			className={cn(sectionVariants({ size, className }))}
			{...props}
		>
			{children}
		</section>
	);
}

export { Section };
