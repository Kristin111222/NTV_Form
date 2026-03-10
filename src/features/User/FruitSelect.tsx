import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldGroup } from "@/components/ui/field";

type Props = {
  onInputChange: (key: any, value: string) => void
}

export function FruitSelect({ onInputChange }: Props) {
  return (
    <FieldGroup>
      <Select onValueChange={(e) => onInputChange("selectedFruit", e)}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </FieldGroup>
  );
}