import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => (
  <Link href="/" className="flex items-center gap-4">
    <Image src="/assets/logo.png" width={35} height={35} alt="Logo" priority quality={100} />
    <div>
      <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
      <p className="text-sm leading-3 text-gray-400">смачніше як ніколи</p>
    </div>
  </Link>
)
