# Juan Cañas — notas de entrega (2026-09-01)

Sitio armado a partir del template de Ralphy Reguillo + el material de
`../` (brochure PDF, fotos de estudio, portadas del álbum).

## Cómo verlo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Qué quedó listo

- Toda la data en `src/data/artist.ts` (bio, formatos, reconocimientos, discografía,
  videos, redes, contacto, SEO).
- Imágenes procesadas en `public/images/` (hero y galería desde el PDF en alta,
  portadas de discografía, retrato de bio, foto del contacto, logo).
- Fuente display cambiada de **Anton → Oswald**: Anton no incluye la "ñ" y el nombre
  se veía "CAÑAS" → "CANAS". (`src/app/layout.tsx` + `src/app/globals.css`).
- `icon.png` / `apple-icon.png` regenerados con el logotipo.

## Pendiente antes de publicar (decisiones del artista/manager)

1. **Biografía**: entregada por el manager. Nota: la bio dice "oriundo de Santa Marta"
   y el campo `location` (que sale en el hero/footer) está en "Barranquilla, Atlántico"
   por instrucción del cliente — es intencional (nació en Santa Marta, radicado en
   Barranquilla). Confirmar que así se quiere mostrar.
2. **Cifras (`stats`)**: puse aproximados (10+ años, 10+ canciones, 11 músicos, 3
   formatos). Reemplazar con datos reales.
3. **Testimonios (`testimonials`)**: son de ejemplo. Poner testimonios reales de
   clientes o quitar la sección.
4. **Redes**: Instagram, YouTube, TikTok y Spotify (álbum). Confirmar si hay Facebook
   y el perfil de artista de Spotify/Apple Music. El brochure también lista
   Deezer, Tidal, Boomplay y Amazon Music — sus enlaces están guardados en los items
   de `discography` (no en `socialLinks` porque el template no trae esos iconos).
5. **Videos**: se usaron 7 de YouTube. Los 5 reels de Instagram del brochure NO se
   incluyeron (el componente solo embebe YouTube). Si se quieren, hay que ampliar
   `VideoItem` y `Videos.tsx`.
6. **IDs de video de los sencillos**: verifiqué que `O2X0V4nUQBw` reproduce un video
   real de Juan Cañas. Conviene revisar que los demás IDs
   (`fGHFpcsHfl4`, `SS16UFHdz7Q`, `A_O_BDn0ZZw`, `8aTfIdZUtn8`, `8c4Hr6jY6HU`,
   `QggTyFmGRZU`) sean los correctos.

## Deploy (ver ../PROCESO-NUEVO-ARTISTA.md, pasos 4-10)

- Repo privado en GitHub.
- Railway: deploy desde el repo.
- Dominio `juancanasmusic.portalvallenato.com` en Railway + registros DNS en Route53.
- Hoja de Google Sheets para la agenda → variable `GOOGLE_SHEET_EVENTS_URL` en Railway.
  Mientras no exista, se muestran las 3 fechas de ejemplo de `artist.ts`.
- Revisar en celular (Safari + Chrome) antes de entregar.
