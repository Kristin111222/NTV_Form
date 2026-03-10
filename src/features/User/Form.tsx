import { useCallback, useRef, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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

  const dataRef = useRef<FormValuesType>({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    selectedFruit: '',
    radioButton: null,
  })

  const [values, setValues] = useState<FormValuesType>({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    selectedFruit: '',
    radioButton: null,
  })

  const onInputChange = useCallback((key: keyof FormValuesType, value: string) => {
    dataRef.current[key] = value

    setValues((prev) => ({
      ...prev,
      [key]: value
    }))
  }, [])

  const onSubmit = () => {
    const { firstName, email } = dataRef.current

    localStorage.setItem(email, JSON.stringify(dataRef.current))

    window.alert(`Hello ${firstName}; email address ${email}`)
  }

  const loadEmailRef = useRef<HTMLInputElement>(null)

  const onLoad = useCallback(() => {
    if (loadEmailRef.current && loadEmailRef.current.value) {

      const localStorageValue = localStorage.getItem(loadEmailRef.current.value)

      if (localStorageValue) {

        const parsedLocalStorageValue: FormValuesType = JSON.parse(localStorageValue)

        setValues(parsedLocalStorageValue)

        window.alert(parsedLocalStorageValue.firstName)

        loadEmailRef.current.value = ''

      } else {
        window.alert('Email not found')
      }

    } else {
      window.alert('Some bug was found!')
    }
  }, [])

  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)

  return (
    <div>

      <Card className="w-3/4 max-w-7xl bg-blue-950">

        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="grow border h-0"></div>
            <CardTitle className="text-white">Example</CardTitle>
            <div className="grow border h-0"></div>
          </div>
        </CardHeader>

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

      <LoadUserForm
        onLoad={onLoad}
        loadEmailRef={loadEmailRef}
      />

    </div>
  )
}