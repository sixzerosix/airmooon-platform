import Image from "next/image";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const logoVariants = cva("relative inline-block", {
	variants: {
		size: {
			default: "h-12 w-auto",
			sm: "h-8 w-auto",
			lg: "h-16 w-auto",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

const Logo = ({
	src = "/vercel.svg",
	alt = "Air mooon",
	className,
	size,
	...props
}: {
	src?: string;
	alt?: string;
} & React.ComponentPropsWithoutRef<"div"> &
	VariantProps<typeof logoVariants>) => {
	return (
		<Image
			src={src}
			width={0}
			height={0}
			alt={alt}
			className={cn(logoVariants({ size }), className)}
			{...props}
		/>
	);
};

export { Logo };
