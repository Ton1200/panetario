import { NextResponse } from 'next/server'

export async function GET() {
  const hasSheetId = Boolean(process.env.GOOGLE_SHEETS_ID)
  const hasEmail = Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  const hasKey = Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY)

  return NextResponse.json(
    {
      ok: true,
      message: 'catalog endpoint is running',
      env: {
        GOOGLE_SHEETS_ID: hasSheetId,
        GOOGLE_SERVICE_ACCOUNT_EMAIL: hasEmail,
        GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: hasKey,
      },
    },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}
