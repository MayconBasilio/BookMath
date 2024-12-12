'use client';

import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef, useState } from "react";

interface MultiSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}

const MultiSelect = forwardRef<HTMLSelectElement, MultiSelectProps>(({
  className,
  options,
  value,
  onChange,
  ...props
}, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    onChange(selectedOptions);
  };

  return (
    <select
      ref={ref}
      multiple
      className={cn(
        'w-full rounded-md border border-input bg-background px-3 py-2',
        'text-sm ring-offset-background min-h-[120px]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      value={value}
      onChange={handleChange}
      {...props}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
});

MultiSelect.displayName = 'MultiSelect';

export default MultiSelect;