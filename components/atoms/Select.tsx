'use client';

import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string; }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  className,
  options,
  ...props
}, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        'w-full rounded-md border border-input bg-background px-3 py-2',
        'text-sm ring-offset-background appearance-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;