'use client';
import { useEffect, useState } from 'react';

// Lê os UTMs (e o fbclid, quando veio de anúncio do Meta) da URL atual e os
// repassa para o link da Hotmart.
const HOTMART_BASE = 'https://pay.hotmart.com/R106904683K';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const CRM_API = 'https://trafego-pago-analytcs-crm-backend.onrender.com';
const CRM_CUSTOMER_ID = 'meta-fabiana-damiani-ddd27a';

/** "Instagram" + "bio" → "instagram-bio" — só letras/números/hífen, curto o
 * suficiente pro campo "src" da Hotmart (que não é feito pra texto grande). */
function slugify(...parts: (string | null)[]): string {
  return parts
    .filter(Boolean)
    .join('-')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // remove acento
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 30);
}

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
      // referência ou uma marcação tipo "instagram-bio", não o fbclid
      // inteiro, que não caberia).
      if (src) query.set('src', src);
      const q = query.toString();
      setUrl(q ? `${HOTMART_BASE}?${q}` : HOTMART_BASE);
    };

    const fbclid = params.get('fbclid');
    if (fbclid) {
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
      return;
    }

    // Sem fbclid (não veio de anúncio) — se o link tinha utm_source/medium
    // marcado (ex: o link da bio do Instagram leva "utm_source=instagram&
    // utm_medium=bio"), usa isso como origem legível. Sem nenhuma marcação,
    // fica sem "src" mesmo — acesso direto/orgânico não identificável.
    const readableSrc = slugify(params.get('utm_source'), params.get('utm_medium'));
    buildUrl(readableSrc || undefined);
  }, []);
  return url;
}
