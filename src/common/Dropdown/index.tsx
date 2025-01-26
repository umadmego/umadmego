import Select, { StylesConfig } from 'react-select';
import { MultiValue, SingleValue } from 'react-select';

type SelectOption = { label: string; value: string | boolean | number };
type OnChangeValue = SingleValue<SelectOption> | MultiValue<SelectOption>;

const Dropdown = ({
                      containerStyle = {},
                      values,
                      isMulti = false,
                      formik,
                      label,
                      name,
                      placeholder = 'Enter Value',
                      useFormik = true,
                      className = '',
                      onChange,
                      showError,
                      error,
                      labelClass,
                      ...props
                  }: {
    containerStyle?: React.CSSProperties;
    values: SelectOption[];
    isMulti?: boolean;
    formik?: any; // Pode ser ajustado para o tipo do FormikInstance, se necessário.
    label?: string;
    name: string;
    placeholder?: string;
    showError?: boolean;
    error?: string;
    useFormik?: boolean;
    onChange?: (e: OnChangeValue) => void;
    className?: string;
    labelClass?: string;
    [x: string]: any;
}) => {
    const customStyles: StylesConfig<SelectOption, boolean> = {
        container: (provided) => ({
            ...provided,
            width: '100%',
            color: '#000',
            ...containerStyle,
        }),
        control: (provided) => ({
            ...provided,
            paddingBlock: 8,
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#CFCFCF',
            fontStyle: 'italic',
        }),
    };

    return (
        <div className={`w-full flex flex-col gap-[5px] ${className}`}>
            {useFormik ? (
                <>
                    {label && (
                        <label
                            htmlFor={name}
                            className={`dark:text-white ${
                                formik?.touched[name] && formik?.errors[name] ? 'errorText' : ''
                            } ${labelClass}`}
                        >
                            {label}
                        </label>
                    )}
                    <Select
                        options={values}
                        onChange={(e: OnChangeValue) =>
                            formik?.setFieldValue(name, e ? (e as SingleValue<SelectOption>)?.value : undefined)
                        }
                        onBlur={() => formik?.setFieldTouched(name, true)}
                        id={name}
                        styles={customStyles}
                        isClearable
                        placeholder={placeholder}
                        isMulti={isMulti}
                        {...props}
                    />
                    {formik?.touched[name] && formik?.errors[name] && (
                        <div className="error">{formik.errors[name]}</div>
                    )}
                </>
            ) : (
                <>
                    {label && (
                        <label
                            htmlFor={name}
                            className={`dark:text-white ${showError ? 'errorText' : ''} ${labelClass}`}
                        >
                            {label}
                        </label>
                    )}
                    <Select
                        options={values}
                        onChange={onChange}
                        id={name}
                        styles={customStyles}
                        isClearable
                        placeholder={placeholder}
                        isMulti={isMulti}
                        {...props}
                    />
                    {showError && <div className="error">{error}</div>}
                </>
            )}
        </div>
    );
};

export default Dropdown;
