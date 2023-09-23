import Prvider from '@/Redux/Prvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zag',
  description: 'Task 3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Prvider>
        {children}
        </Prvider>
      </body>
    </html>
  )
}
