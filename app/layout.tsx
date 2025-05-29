export const metadata = {
  title: 'Roleta Punk',
  description: 'A roleta cyberpunk insana'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}