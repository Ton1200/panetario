import { NextResponse } from 'next/server'
import { google } from 'googleapis'

type CatalogItem = {
  id: string
  name: string
  category: string
  price: number
  currency: string
  unit: string
  active: boolean
  order: number
}

const toBool = (value: unknown) => {
  const v = String(value ?? '').trim().toLowerCase()
  return v === 'true' || v === '1' || v === 'yes' || v === 'si'
}

const toNumber = (value: unknown) => {
  const raw = String(value ?? '').trim().replace(',', '.')
  const n = Number(raw)
  return Number.isFinite(n) ? n : 0
}

export async function GET() {
  const sheetId = process.env.GOOGLE_SHEETS_ID
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY

  if (!sheetId || !email || !privateKeyRaw) {
    return NextResponse.json(
      { error: 'Missing Google Sheets env vars' },
      { status: 500 }
    )
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, '\n')

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const range = 'Products!A1:H'
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range,
  })

  const values = res.data.values ?? []
  if (values.length < 2) {
    return NextResponse.json(
      { categories: ['Todo'], catalog: [] },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  }

  const headers = values[0].map(h => String(h).trim())
  const rows = values.slice(1)

  const idx = (key: string) => headers.findIndex(h => h === key)

  const data: CatalogItem[] = rows
    .map((r) => {
      const id = String(r[idx('id')] ?? '').trim()
      if (!id) return null

      return {
        id,
        name: String(r[idx('name')] ?? '').trim(),
        category: String(r[idx('category')] ?? '').trim(),
        price: toNumber(r[idx('price')]),
        currency: String(r[idx('currency')] ?? 'ARS').trim() || 'ARS',
        unit: String(r[idx('unit')] ?? 'unidad').trim() || 'unidad',
        active: toBool(r[idx('active')]),
        order: toNumber(r[idx('order')]),
      }
    })
    .filter(Boolean) as CatalogItem[]

  const catalog = data
    .filter(p => p.active)
    .sort((a, b) => {
      const cat = a.category.localeCompare(b.category)
      if (cat !== 0) return cat
      const ord = a.order - b.order
      if (ord !== 0) return ord
      return a.name.localeCompare(b.name)
    })

  const categoriesFromItems = Array.from(new Set(catalog.map(i => i.category)))
  const categories = ['Todo', ...categoriesFromItems]

  return NextResponse.json(
    { categories, catalog },
    { headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' } }
  )
}
