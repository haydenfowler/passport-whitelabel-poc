'use client';
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";

export default function HandleCallback() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const whiteLabelId = searchParams.get('whitelabel-id');
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    if (whiteLabelId && code && state) {
      switch (whiteLabelId) {
        case '3005': {
          window.location.href = `http://localhost:3005/login/callback?code=${code}&state=${state}`;
          break;
        }
        case '3008': {
          window.location.href = `http://localhost:3008/login/callback?code=${code}&state=${state}`;
          break;
        }
        default: {
          throw new Error('Unrecognised whitelabel-id')
        }
      }
    }
  }, [searchParams]);
}