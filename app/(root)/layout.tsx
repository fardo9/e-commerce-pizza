import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function HomeLayout({
  children
  //   modal
}: Readonly<{
  children: React.ReactNode
  //   modal: React.ReactNode
}>) {
  return <main className="min-h-screen">{children}</main>
}
