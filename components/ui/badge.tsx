import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-sm border-2 border-black px-2 py-0.5 text-xs font-bold uppercase whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-0 [&>svg]:pointer-events-none [&>svg]:size-3! neo-brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-black [a]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-black [a]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-destructive-foreground [a]:hover:bg-destructive/90",
        outline:
          "bg-white text-black [a]:hover:bg-secondary [a]:hover:text-black",
        ghost:
          "border-transparent shadow-none bg-transparent hover:border-black hover:bg-white hover:neo-brutal-shadow-sm hover:-translate-x-[2px] hover:-translate-y-[2px]",
        link: "text-primary underline-offset-4 hover:underline shadow-none border-transparent hover:shadow-none hover:translate-x-0 hover:translate-y-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
