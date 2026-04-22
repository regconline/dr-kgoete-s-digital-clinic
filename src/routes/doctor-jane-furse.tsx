import { createFileRoute } from "@tanstack/react-router";

import { SeoLocationPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/doctor-jane-furse")({
  head: () => ({
    meta: [
      { title: "Doctor near Jane Furse — Dr Kgoete" },
      { name: "description", content: "Doctor near Jane Furse for consultations, testing, chronic care, women’s health, procedures, certificates, and referrals." },
      { property: "og:title", content: "Doctor near Jane Furse — Dr Kgoete" },
      { property: "og:description", content: "Professional medical care and appointment booking for Jane Furse communities." },
    ],
  }),
  component: () => <SeoLocationPage eyebrow="Doctor Jane Furse" title="Professional doctor consultations near Jane Furse." intro="Confidential, patient-centred medical support for individuals and families around Jane Furse." location="Jane Furse" service="doctor consultation" />,
});
