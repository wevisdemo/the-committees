import Script from "next/script";

export default function Analytics() {
  return (
    <Script
      defer
      data-domain="wevis.info/the-committees"
      src="https://analytics.punchup.world/js/script.js"
      strategy="afterInteractive"
    />
  );
}
