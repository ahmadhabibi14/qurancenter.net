import type { ServerLoadEvent } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event: ServerLoadEvent) => {
  event.setHeaders({
    'X-Content-Type-Options': 'nosniff',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), fullscreen=(), usb=(), autoplay=()',
    'Content-Security-Policy': "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com; " +
      "style-src 'self' 'unsafe-inline'; " +
      "font-src 'self'; " +
      "img-src 'self' data: http://localhost:8080 https://admin.qurancenter.net; " +
      "frame-src https://www.google.com https://maps.google.com 'self' http://localhost:8080 https://admin.qurancenter.net; " +
      "connect-src 'self' https://maps.googleapis.com http://localhost:8080 https://admin.qurancenter.net; " +
      "object-src 'none'; " +
      "base-uri 'none';"
  })

  return {}
}