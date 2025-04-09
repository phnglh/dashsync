'use client'
import { Button } from "@workspace/ui/components/button";
import {  useEffect, useState } from "react";

export default function Page() {
  const [value, setValue] = useState(false)

  useEffect(() => {
    console.log('value', value)
  }, [value])
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button
         onClick={() => setValue((pre) => !pre)}
          >value</Button>
      </div>
    </div>
  )
}
