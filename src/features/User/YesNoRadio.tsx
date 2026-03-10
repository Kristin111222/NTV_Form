import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FieldGroup } from "@/components/ui/field";

type Props = {
  onInputChange: (key: any, value: string) => void
}

export function YesNoRadio({ onInputChange }: Props) {
  return (
    <FieldGroup>
      <RadioGroup
        className="w-fit flex"
        onValueChange={(e) => onInputChange("radioButton", e)}
      >
        <RadioGroupItem className="bg-white" value="yes" id="yes" />
        <Label className="text-white" htmlFor="yes">Yes</Label>

        <RadioGroupItem className="bg-white" value="no" id="no" />
        <Label className="text-white" htmlFor="no">No</Label>
      </RadioGroup>
    </FieldGroup>
  );
}