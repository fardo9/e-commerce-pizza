import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="min-h-screen">{children}</main>
}
