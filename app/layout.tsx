import ClientLayout from './ClientLayout'

export default function Document(
  {children}: {
    children: React.ReactNode
  }
  ) {
  
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
