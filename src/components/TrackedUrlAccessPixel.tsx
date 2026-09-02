'use client';
import { useEffect, useState } from 'react';

// Lê os UTMs (e o fbclid, quando veio de anúncio do Meta) da URL atual e os
// repassa para o link da Hotmart.
const HOTMART_BASE = 'https://pay.hotmart.com/R106904683K';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const CRM_API = 'https://trafego-pago-analytcs-crm-backend.onrender.com';
const CRM_CUSTOMER_ID = 'meta-fabiana-damiani-ddd27a';

export function useHotmartUrl() {
  const [url, setUrl] = useState(HOTMART_BASE);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms = new URLSearchParams();
    UTM_KEYS.forEach(key => {
      const val = params.get(key);
      if (val) utms.set(key, val);
    });

    const buildUrl = (src?: string) => {
      const query = new URLSearchParams(utms);
      // "src" é o campo de rastreio da própria Hotmart (não um UTM) — é o
      // que volta no aviso de venda aprovada, por isso é curto (código de
      // referência, não o fbclid inteiro, que não caberia).
      if (src) query.set('src', src);
      const q = query.toString();
      setUrl(q ? `${HOTMART_BASE}?${q}` : HOTMART_BASE);
    };

    const fbclid = params.get('fbclid');
    if (!fbclid) {
      buildUrl();
      return;
    }

    // Guarda o fbclid no CRM e troca por um código curto — se a chamada
    // falhar (rede lenta, backend fora), a pessoa ainda consegue comprar
    // normal, só sem o rastreio de qual clique gerou a venda.
    fetch(`${CRM_API}/hotmart/${CRM_CUSTOMER_ID}/click`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fbclid }),
    })
      .then(r => r.ok ? r.json() : null)
      .then(data => buildUrl(data?.ref))
      .catch(() => buildUrl());
  }, []);
  return url;
}
