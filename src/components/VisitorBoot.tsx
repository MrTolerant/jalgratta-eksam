'use client';

import { useEffect } from 'react';
import { getVisitorId, touchVisitorVisit } from '@/lib/visitor';

/** Sets the visitor cookie and updates the daily streak on first client render. */
export function VisitorBoot() {
  useEffect(() => {
    getVisitorId();
    touchVisitorVisit();
  }, []);
  return null;
}
