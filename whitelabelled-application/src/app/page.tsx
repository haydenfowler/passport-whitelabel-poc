'use client';
import {useCallback, useState} from "react";
import styles from "./page.module.css";
import passportInstance from './passport';
import { passport } from "@imtbl/sdk";

export default function Home() {
  const [user, setUser] = useState<passport.UserProfile>(null);
  const [message, setMessage] = useState<string>('');

  const login = useCallback(async () => {
    const user = await passportInstance.login();
    setUser(user);
  }, [passportInstance, setUser]);

  const logout = useCallback(async () => {
    setMessage('Logging out...');
    await passportInstance.logout();
    setUser(null);
    setMessage('');
  }, [passportInstance, setUser]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Passport - Whitelabel {process.env.NEXT_PUBLIC_WHITELABEL_ID}</h1>
        <div className={styles.ctas}>
          {
            user ?
              <button className={styles.secondary} onClick={logout}>Logout</button>:
              <button className={styles.primary} onClick={login}>Login</button>
          }
        </div>
        {
          !!message && <p>
            {message}
          </p>
        }
        {
        !!user && <p>
            {JSON.stringify(user)}
          </p>
        }
      </main>
    </div>
  );
}
