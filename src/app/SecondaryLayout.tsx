export default function SecondaryLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <div className="h-full w-full flex flex-col justify-center align-center">
            <button onClick={() => window.history.back()} className="absolute top-0 left-0 pt-2 pb-2 pl-4 pr-4 rounded-xl m-4 bg-gray-50 shadow-md hover:shadow-none">Back</button>
            {children}
        </div>
    );
}