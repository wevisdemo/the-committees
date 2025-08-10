import Head from "next/head";

function MetaHead() {
  let og_image = "og_default.jpg";
  const og_url = "https://wevisdemo.github.io/the-committees/";
  const title = " BKK Follow Up สำรวจปัญหากวนใจชาว กทม.";
  const description =
    "เปิดข้อมูลย้อนหลัง ฝุ่น น้ำท่วม ขยะ มลพิษ และสิ่งที่ติดค้างใจคน กทม.";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={og_url + og_image} />
      <meta property="og:url" content={og_url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={og_url + og_image} />
      <meta property="twitter:url" content={og_url} />
      <link
        rel="stylesheet"
        href="https://design-systems.wevis.info/typography.css"
      />
    </Head>
  );
}

export default MetaHead;
