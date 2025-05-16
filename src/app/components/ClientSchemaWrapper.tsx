'use client';

import React from 'react';
import { BreadcrumbSchema, ServiceSchema } from './JsonLdSchema';

export function ClientBreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return <BreadcrumbSchema items={items} />;
}

export function ClientServiceSchema({ service }: { service: any }) {
  return <ServiceSchema service={service} />;
} 