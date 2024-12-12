'use client';

import { ReactNode } from "react";
import FormField from "./FormField";

interface PreferenceFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
  description?: string;
}

export default function PreferenceField({
  label,
  error,
  children,
  description
}: PreferenceFieldProps) {
  return (
    <FormField label={label} error={error}>
      {children}
      {description && (
        <p className="text-sm text-muted-foreground mt-1">
          {description}
        </p>
      )}
    </FormField>
  );
}