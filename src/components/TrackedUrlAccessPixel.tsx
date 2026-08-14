'use client';
import { useEffect, useRef, useState } from 'react';

const VID_KEY = 'arion_vid';
function getVisitorId() {
  if (typeof window === 'undefined') return '';
  let vid = localStorage.getItem(VID_KEY);
  if (!vid) {
    vid = crypto.randomUUID();
    localStorage.setItem(VID_KEY, vid);
  }
  return vid;
}

export function TrackedUrlAccessPixel() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = new URLSearchParams({ vid: getVisitorId() });
    // Repassa as UTMs da URL do site (ex: ?utm_source=Instagram&utm_medium=Storys)
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(key => {
      const value = params.get(key);
      if (value) q.set(key, value);
    });
    fetch('https://trafego-pago-analytcs-crm-backend.onrender.com/t/fabi-damiani-650739be/access?' + q.toString(),
    { keepalive: true }).catch(() => {});
  }, []);
  return null;
}

// Chame no onClick de cada botão que quiser medir — dê um nome diferente pra cada um
export function trackButtonClick(label: string) {
  fetch('https://trafego-pago-analytcs-crm-backend.onrender.com/t/fabi-damiani-650739be/click?label=' + encodeURIComponent(label),
  { keepalive: true }).catch(() => {});
}

// Lê os UTMs da URL atual e os repassa para o link da Hotmart
const HOTMART_BASE = 'https://pay.hotmart.com/R106904683K';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

export function useHotmartUrl() {
  const [url, setUrl] = useState(HOTMART_BASE);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms = new URLSearchParams();
    UTM_KEYS.forEach(key => {
      const val = params.get(key);
      if (val) utms.set(key, val);
    });
    const query = utms.toString();
    setUrl(query ? `${HOTMART_BASE}?${query}` : HOTMART_BASE);
  }, []);
  return url;
}

// Registra quando o botão aparece na tela (impressão) — use o mesmo label do click pra calcular CTR
export function useButtonView(label: string) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const q = new URLSearchParams({ label, vid: getVisitorId() });
        fetch('https://trafego-pago-analytcs-crm-backend.onrender.com/t/fabi-damiani-650739be/view?' + q.toString(),
        { keepalive: true }).catch(() => {});
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [label]);
  return ref;
}
