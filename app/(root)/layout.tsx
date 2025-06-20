import type { Metadata } from 'next'

import { Header } from '@/src/features/header'

export const metadata: Metadata = {
  title: 'Home'
}

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <main className="min-h-screen">
      {modal}
      <Header />
      {children}
    </main>
  )
}
