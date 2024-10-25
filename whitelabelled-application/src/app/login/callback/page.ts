'use client';
import { useEffect } from 'react';
import passportInstance from '../../passport';

export default function HandleCallback() {
  useEffect(() => {
    passportInstance.loginCallback();
  }, [passportInstance]);
}
