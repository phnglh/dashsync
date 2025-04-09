export default async function Page() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/info`, {
        cache: "no-store",
        next: {
        revalidate: 0,
        },
    })
    
    const { name,version,description } = await response.json()
    
    return (
        <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg text-amber-600">Version: {version}</p>
                <p className="text-lg">{description}</p>
        </div>
        </div>
    )
}