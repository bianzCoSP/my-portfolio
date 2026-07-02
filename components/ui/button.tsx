import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"cursor-pointer active:scale-99 duration-150 font-mono font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:brightness-110",
				neutral: "bg-foreground text-background hover:brightness-95",
				destructive:
					"bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90",
				outline:
					"border border-border bg-card text-foreground hover:border-core hover:text-core shadow-sm shadow-black/10 duration-150",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-foreground/5 text-foreground/75 hover:text-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				terminal:
					"bg-transparent text-core border border-core/40 hover:bg-core/10 before:content-['$_'] before:opacity-60",
			},
			size: {
				default: "h-8 px-3 py-2",
				sm: "h-7 px-2.5 text-sm",
				lg: "h-11 px-6 font-medium text-base",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	nativeButton?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
