'use client';
import { useEffect } from 'react';

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
    fetch('https://trafego-pago-analytcs-crm-backend.onrender.com/t/fabi-damiani-650739be/access?vid=' + getVisitorId(),
    { keepalive: true }).catch(() => {});
  }, []);
  return null;
}

// Chame no onClick de cada botão que quiser medir — dê um nome diferente pra cada um
export function trackButtonClick(label: string) {
  fetch('https://trafego-pago-analytcs-crm-backend.onrender.com/t/fabi-damiani-650739be/click?label=' + encodeURIComponent(label),
  { keepalive: true }).catch(() => {});
}
