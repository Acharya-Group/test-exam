import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://test-exam-nu.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://test-exam-nu.vercel.app/about-us",
      lastModified: new Date(),
    },
    {
      url: "https://test-exam-nu.vercel.app/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://test-exam-nu.vercel.app/terms-conditions",
      lastModified: new Date(),
    },
    {
      url: "https://test-exam-nu.vercel.app/contact-us",
      lastModified: new Date(),
    },
  ];
}
