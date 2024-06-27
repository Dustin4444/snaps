/**
 * The props of the {@link Input} component.
 *
 * @property name - The name of the input field. This is used to identify the
 * input field in the form data.
 * @property type - The type of the input field. Defaults to `text`.
 * @property value - The value of the input field.
 * @property placeholder - The placeholder text of the input field.
 */
export declare type InputProps = {
    name: string;
    type?: 'text' | 'password' | 'number' | undefined;
    value?: string | undefined;
    placeholder?: string | undefined;
};
/**
 * An input component, which is used to create an input field.
 *
 * @param props - The props of the component.
 * @param props.name - The name of the input field. This is used to identify the
 * input field in the form data.
 * @param props.type - The type of the input field.
 * @param props.value - The value of the input field.
 * @param props.placeholder - The placeholder text of the input field.
 * @returns An input element.
 * @example
 * <Input name="username" type="text" />
 */
export declare const Input: import("../../component").SnapComponent<InputProps, "Input">;
/**
 * An input element.
 *
 * @see Input
 */
export declare type InputElement = ReturnType<typeof Input>;
