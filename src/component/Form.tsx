import React from "react";
import { useField, Field, FormikProps } from "formik";

type MyFieldProps = React.InputHTMLAttributes<any> & {
  // You can add more input types here
  as?: "input" | "select";
  name: string;
  formData?: FormikProps<any>;
};

export const MyField = (props: MyFieldProps) => {
  const [input] = useField<any>(props.name);

  return <Field {...props} {...input} value={input.value ?? ""} />;
};

interface TMySelectProps<T> extends React.SelectHTMLAttributes<any> {
  getValue: (option: T) => string;
  getName: (option: T) => string;
  options: T[];
  name: string;
  defaultName?: string;
}

export function MySelect<T>(props: TMySelectProps<T>) {
  const { getValue, getName, name, options, defaultName, ...restProps } = props;
  const [selectProps, meta, helpers] = useField<T>(name);

  return (
    <select
      {...restProps}
      {...selectProps}
      value={meta.value ? getValue(meta.value) : ""}
      onChange={(e) => {
        helpers.setTouched(true);
        helpers.setValue(
          options.find(
            (option) => `${getValue(option)}` === e.currentTarget.value
          )!
        );
        props.onChange?.(e);
      }}
    >
      <option disabled value="">
        {defaultName || restProps.placeholder || ""}
      </option>
      {options.map((option) => (
        <option
          key={getValue(option)}
          data-testid="select-options"
          value={getValue(option)}
        >
          {getName(option)}
        </option>
      ))}
    </select>
  );
}
