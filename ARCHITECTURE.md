# Panetario - Arquitectura del Proyecto

## 📁 Estructura del Proyecto

Este proyecto sigue las mejores prácticas de arquitectura frontend basado en **Feature-Sliced Design** y principios de **Clean Architecture**.

```
panetario/
├── app/                      # Next.js App Router
│   ├── (public)/            # Rutas públicas (sin autenticación)
│   │   └── catalog/         # Página de catálogo
│   ├── layout.tsx           # Layout raíz
│   ├── page.tsx             # Página principal (redirect)
│   └── globals.scss         # Estilos globales
│
├── features/                # Features - Módulos de negocio
│   └── catalog/            # Feature de catálogo
│       ├── index.ts        # Barrel export del feature
│       ├── data/           # Datos y mocks
│       ├── model/          # Tipos y lógica de negocio
│       └── ui/             # Componentes UI del feature
│
├── components/             # Componentes compartidos
│   ├── layout/            # Componentes de layout (Header, Footer)
│   ├── ui/                # Componentes UI reutilizables
│   └── icons/             # Iconos SVG
│
├── lib/                   # Utilidades y helpers
│   └── money.ts          # Formateo de moneda
│
├── types/                # Tipos compartidos globales
│   └── index.ts         # Tipos base (Currency, BaseEntity, etc)
│
├── styles/              # Sistema de diseño SCSS
│   ├── _tokens.scss    # Design tokens (colores, espaciado, etc)
│   ├── _mixins.scss    # Mixins reutilizables
│   └── _globals.scss   # Reset y estilos base
│
├── config/             # Configuración de la app
│   └── social.ts      # URLs y configs de redes sociales
│
└── public/            # Assets estáticos
    └── placeholders/  # Imágenes placeholder
```

## 🏗️ Principios de Arquitectura

### 1. **Feature-Sliced Design (FSD)**
Cada feature es autocontenido con:
- **data**: Fuente de datos (API, mocks)
- **model**: Tipos, selectores, lógica de negocio
- **ui**: Componentes visuales del feature

### 2. **Barrel Exports**
Cada carpeta importante tiene un `index.ts` que exporta sus elementos públicos:
```typescript
// ✅ Importación limpia
import { CatalogPage, CATALOG, type CatalogItem } from '@/features/catalog'

// ❌ Evitar importaciones profundas
import { CatalogPage } from '@/features/catalog/ui/CatalogPage/CatalogPage'
```

### 3. **Separación de Concerns**
- **UI Components**: Solo presentación y eventos
- **Business Logic**: En `model/` (selectores, validaciones)
- **Data**: En `data/` o `services/`

### 4. **CSS Modules + SCSS**
- **Tokens centralizados** en `styles/_tokens.scss`
- **Mixins reutilizables** en `styles/_mixins.scss`
- **Anidación BEM-style** en módulos
- **Media queries co-ubicadas** con sus selectores

### 5. **TypeScript Strict**
- Tipos explícitos para props
- Tipos compartidos en `types/`
- Tipos específicos de feature en su `model/`

## 📦 Convenciones

### Nombres de Archivos
- **Componentes**: `PascalCase.tsx` (ej: `CatalogPage.tsx`)
- **Estilos**: `ComponentName.module.scss`
- **Utilidades**: `camelCase.ts` (ej: `money.ts`)
- **Tipos**: `*.types.ts`
- **Configuración**: `*.config.ts`

### Importaciones SCSS
```scss
// ✅ Usar rutas relativas en SCSS
@use '../../../../styles/tokens' as *;

// ❌ Los alias @/ NO funcionan en SCSS
@use '@/styles/tokens' as *;
```

### Estructura de Componente
```tsx
// Imports de librerías
import { useState } from 'react'
import styles from './Component.module.scss'

// Imports de types
import type { Props } from './types'

// Imports internos (ordenados por proximidad)
import { helper } from '@/lib/helper'
import { Button } from '@/components/ui'
import { useFeature } from '../hooks/useFeature'

// Componente
export function Component({ prop }: Props) {
  // ...
}
```

### SCSS con Anidación
```scss
.card {
  padding: 12px;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &Active {
    @extend .card;
    background: $accent;
  }
  
  @media (min-width: 768px) {
    padding: 16px;
  }
}

.cardTitle {
  font-size: 14px;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
}
```

## 🎨 Sistema de Diseño

### Tokens (`styles/_tokens.scss`)
- **Colores**: `$bg`, `$text`, `$brand`, `$accent`
- **Espaciado**: `$space-1` a `$space-6`
- **Bordes**: `$r-xs` a `$r-lg`
- **Sombras**: `$shadow`, `$shadow-soft`

### Mixins (`styles/_mixins.scss`)
- `@include container`: Contenedor responsivo
- `@include glass($color)`: Efecto glassmorphism
- `@include focusRing($color)`: Focus ring accesible
- `@include truncate`: Truncar texto con ellipsis

## 🚀 Escalabilidad

### Agregar un Nuevo Feature
1. Crear carpeta en `features/new-feature/`
2. Estructura interna: `data/`, `model/`, `ui/`
3. Crear `index.ts` con exports públicos
4. Agregar tipos en `model/types.ts`
5. Implementar UI components en `ui/`

### Agregar un Componente Compartido
1. Crear en `components/ui/NewComponent/`
2. Implementar con `NewComponent.tsx` y `NewComponent.module.scss`
3. Exportar en `components/ui/index.ts`
4. Usar desde `@/components/ui`

### Agregar un Tipo Compartido
1. Agregar en `types/index.ts`
2. Exportar correctamente
3. Usar desde `@/types`

## 🔧 Herramientas

- **Next.js 16** con App Router
- **React 19**
- **TypeScript 5** (strict mode)
- **SCSS Modules**
- **ESLint** (Next.js config)

## 📝 Notas Importantes

1. **SCSS no soporta alias**: Siempre usar rutas relativas
2. **Barrel exports**: Actualizar `index.ts` al agregar exports
3. **TypeScript paths**: Configurado `@/` para imports de TS/TSX
4. **CSS Modules**: Todos los estilos son locales por defecto
5. **Server vs Client**: Marcar con `'use client'` cuando sea necesario

---

**Mantenido por**: El equipo de desarrollo de El Panetario
**Última actualización**: Enero 2026
