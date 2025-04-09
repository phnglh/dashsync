
export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  })

  const { message } = await response.json()
  
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <p className="text-lg text-amber-600">{message}</p>
        <p className="text-lg">This is a test of the new Next.js 13.4 app directory.</p>
      </div>
    </div>
  )
}
