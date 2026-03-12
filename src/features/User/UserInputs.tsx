import { Input } from "@/components/Input";
import { Field, FieldGroup } from "@/components/ui/field";

type Props = {
  values: any
  onInputChange: (key: any, value: string) => void
  debouncedSearchTerm: string
  setSearchTerm: (value: string) => void
}

export function UserInputs({ values, onInputChange, debouncedSearchTerm }: Props) {
  return (
    <FieldGroup>
      <Field>
        <p className="text-white">Search term: {debouncedSearchTerm}</p>
        <Input
          className="bg-white"
          placeholder="First name"
           // TODO: Set values to all input fields in the form
          value={values.firstName}
          onChange={(e) => onInputChange("firstName", e.target.value)}
        />
      </Field>

      <Field>
        <Input
          className="bg-white"
          placeholder="Last name"
          onChange={(e) => onInputChange("lastName", e.target.value)}
        />
      </Field>

      <Field>
        <Input
          className="bg-white"
          type="email"
          placeholder="email"
          disabled
          onChange={(e) => onInputChange("email", e.target.value)}
        />
      </Field>

      <Field>
        <Input
          className="bg-white"
          type="number"
          placeholder="Mobile number"
          onChange={(e) => onInputChange("mobileNumber", e.target.value)}
        />
      </Field>
    </FieldGroup>
  );
}