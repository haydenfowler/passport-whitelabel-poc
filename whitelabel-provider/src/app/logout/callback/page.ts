'use client';
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";

export default function HandleCallback() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const whiteLabelId = searchParams.get('whitelabel-id');

    if (whiteLabelId) {
      switch (whiteLabelId) {
        case '3005': {
          window.location.href = `http://localhost:3005/`;
          break;
        }
        case '3008': {
          window.location.href = `http://localhost:3008/`;
          break;
        }
        default: {
          throw new Error('Unrecognised whitelabel-id')
        }
      }
    }
  }, [searchParams]);
}