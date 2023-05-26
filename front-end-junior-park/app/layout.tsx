export const metadata = {
  title: 'Junior park',
  description: 'Настольные игры для детей и взрослых',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
