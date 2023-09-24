import Prvider from '@/Redux/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zag',
  description: 'Task 3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Sidebar>
        <Prvider>
        {children}
        </Prvider>
          </Sidebar>
      </body>
    </html>
  )
}
