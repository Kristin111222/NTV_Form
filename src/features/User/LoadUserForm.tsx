import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

type Props = {
  email: string
  setEmail: (v: string) => void
  onLoad: () => void
  onCreate: () => void
}

export function LoadUserForm({ email, setEmail, onLoad, onCreate }: Props) {
  return (
    <Card className="my-4">

      <CardHeader>
        <CardTitle>Start</CardTitle>
      </CardHeader>

      <FieldSet>
        <FieldGroup>
          <Field>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </Field>
        </FieldGroup>
      </FieldSet>

      <div className="flex flex-col py-4 gap-4">

        <Button
          value="Load"
          type="button"
          onClick={onLoad}
          className="bg-green-500 p-4 rounded text-white uppercase"
        />

        <Button
          value="Create new"
          type="button"
          onClick={onCreate}
          className="bg-black p-4 rounded text-white uppercase"
        />

      </div>

    </Card>
  )
}