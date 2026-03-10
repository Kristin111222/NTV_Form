import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

type Props = {
  onLoad: () => void
  //loadEmailRef: React.RefObject<HTMLInputElement>
    loadEmailRef: any
}

export function LoadUserForm({ onLoad, loadEmailRef }: Props) {

  return (
    <Card className="my-4">

      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="grow border h-0"></div>
          <CardTitle>Already filled out form?</CardTitle>
          <div className="grow border h-0"></div>
        </div>
      </CardHeader>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          onLoad()
        }}
        className="w-full"
      >

        <FieldSet>

          <FieldGroup>

            <Field>

              <Input
                className="bg-white"
                id="email"
                autoComplete="off"
                type="email"
                ref={loadEmailRef}
                placeholder="asdf@ntv.is"
              />

            </Field>

          </FieldGroup>

        </FieldSet>

        <div className="flex flex-col py-4 gap-4">

          <Button
            value="load"
            type="submit"
            className="bg-green-500 p-4 rounded text-white uppercase"
          />

          <Button
            value="create new"
            type="submit"
            className="bg-green-500 p-4 rounded text-white uppercase"
          />

        </div>

      </form>

    </Card>
  )
}