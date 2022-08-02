import { Modal } from "@redq/reuse-modal";

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}
