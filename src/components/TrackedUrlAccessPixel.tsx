'use client';
import { useEffect, useState } from 'react';

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
