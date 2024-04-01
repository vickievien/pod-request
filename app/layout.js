export const metadata = {
    title: 'Pod Request',
  }

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
}