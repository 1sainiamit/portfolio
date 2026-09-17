import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border-2 border-black bg-white px-3 py-2 text-base transition-all duration-150 outline-none placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:neo-brutal-shadow focus:-translate-x-[2px] focus:-translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive md:text-sm resize-y",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
