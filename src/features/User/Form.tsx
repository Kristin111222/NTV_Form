import { useCallback, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { FieldSet } from "@/components/ui/field";
import { Button } from "@/components/Button";

import { UserInputs } from "./UserInputs";
import { FruitSelect } from "./FruitSelect";
import { YesNoRadio } from "./YesNoRadio";
import { LoadUserForm } from "./LoadUserForm";

import useDebounce from "@/hooks/useDebounce";

type FormValuesType = {
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  selectedFruit: string
  radioButton: string | null
}

export function Form() {


  const [mode, setMode] = useState<"start" | "form">("start")
  const [email, setEmail] = useState("")

  const onSubmit = () => {
  if (values.email) {
    localStorage.setItem(values.email, JSON.stringify(values))
    alert("Saved!")
  }
}

  const [values, setValues] = useState<FormValuesType>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    selectedFruit: "",
    radioButton: null
  })

  const onInputChange = useCallback((key: keyof FormValuesType, value: string) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }))
  }, [])

  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)


  useEffect(() => {
    if (values.email) {
      localStorage.setItem(values.email, JSON.stringify(values))
    }
  }, [debouncedSearchTerm])


  if (mode === "start") {
    return (
      <LoadUserForm
        email={email}
        setEmail={setEmail}
        onCreate={() => {
          setValues(prev => ({ ...prev, email }))
          setMode("form")
        }}
        onLoad={() => {
          const data = localStorage.getItem(email)
          if (data) {
            setValues(JSON.parse(data))
          } else {
            setValues(prev => ({ ...prev, email }))
          }
          setMode("form")
        }}
      />
    )
  }

        return (
    <Card className="w-3/4 max-w-7xl bg-blue-950">

      <form
  onSubmit={(e) => {
    e.preventDefault()
    onSubmit()
  }}
  className="w-full"
>

        <FieldSet>

          <UserInputs
            values={values}
            onInputChange={onInputChange}
            debouncedSearchTerm={debouncedSearchTerm}
            setSearchTerm={setSearchTerm}
          />

          <FruitSelect onInputChange={onInputChange} />
          <YesNoRadio onInputChange={onInputChange} />

        </FieldSet>

        <div className="flex flex-col py-4 gap-4">
          <Button
            type="submit"
            className="bg-pink-500 p-4 rounded text-white uppercase"
          />
        </div>

      </form>

    </Card>
  )
}