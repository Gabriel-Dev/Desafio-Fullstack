import { Label } from "./styled";

export const Input = ({ type, name, label, placeholder, className, register, error, value, required}: any) => {
  return (
    <Label> <span>{label}</span>
      <input required={required} {...register} name={name} type={type} placeholder={placeholder} className={className} value={value} />
      {error}
    </Label>
  )
}
