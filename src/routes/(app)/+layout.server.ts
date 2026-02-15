import type { ServerLoadEvent } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event: ServerLoadEvent) => {
  event.setHeaders({
    'X-Content-Type-Options': 'nosniff',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), fullscreen=(), usb=(), autoplay=()',
    'Content-Security-Policy': "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline'; " +
      "style-src 'self' 'unsafe-inline'; " +
      "font-src 'self'; " +
      "img-src 'self' data: ; " +
      "frame-src none; " +
      "connect-src 'self'; " +
      "object-src 'none'; " +
      "base-uri 'none';"
  })

  return {}
}