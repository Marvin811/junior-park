import { IField } from "./field.interface";
import cn from "clsx";
import { forwardRef } from "react";

const Field = forwardRef<HTMLInputElement, IField>(
  (
    { placeholder, error, className, Icon, type = "text", style, ...rest },
    ref
  ) => {
    return (
      <div className={cn("mb-4", className)} style={style}>
        <label>
          <span className="mb-1 block">
            {Icon && <Icon className="mr-3" />}
            {placeholder}
          </span>
          <input
            type={type}
            ref={ref}
            placeholder={placeholder}
            {...rest}
            className={cn(
              "px-4 py-2 w-full rounded-3xl transition-all outline-none border border-gray border-solid focus:border-secondary",
              { "border-red": !!error }
            )}
          />
        </label>
        {error && <div className="text-red mt-1 text-sm">{error}</div>}
      </div>
    );
  }
);
Field.displayName = "Field";

export default Field;
