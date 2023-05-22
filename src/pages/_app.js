import { Modal } from "@redq/reuse-modal";
import { useEffect } from "react";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import SentryRRWeb from "@sentry/rrweb";
import markerSDK from "@marker.io/browser";

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    // Sentry.init({
    //   dsn: `https://a0fa52f3582041b4adeb1ac3fa64f91b@o1432500.ingest.sentry.io/${process.env.NEXT_PUBLIC_SENTRY}`,
    //   integrations: [new BrowserTracing(), new SentryRRWeb({})],
    //   tracesSampleRate: 1.0,
    // });
    // markerSDK.loadWidget({
    //   destination: `${process.env.NEXT_PUBLIC_MARKER}`,
    //   reporter: {
    //     email: 'frontend@aut.id',
    //     fullName: 'Dao Hacker',
    //   },
    // });
  }, []);
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}
