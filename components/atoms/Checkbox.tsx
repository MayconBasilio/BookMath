'use client';

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  className,
  label,
  ...props
}, ref) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          'rounded border-input text-primary focus:ring-primary',
          className
        )}
        {...props}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;