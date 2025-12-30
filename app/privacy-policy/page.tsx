import Navbar from "@/components/layout/Navbar";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div>
        <Navbar/>
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mb-4">
            At <strong>YCB Demo Exam Portal</strong>, operated in association with
            <strong> MSPL Personnel Certification Body (PRCB)</strong>, we respect
            your privacy and are committed to protecting your personal information.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We may collect basic details such as name, email address, and usage data
            when you interact with our website. This information is collected only
            to improve user experience and provide better services.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Use of Information
          </h2>
          <p className="text-gray-700 mb-4">
            The collected information is used for providing demo exams, improving
            website functionality, responding to queries, and ensuring smooth
            operation of our services.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Cookies & Advertising
          </h2>
          <p className="text-gray-700 mb-4">
            We use Google AdSense to display advertisements. Google may use cookies
            to show relevant ads based on user visits. Users can manage ad
            preferences through Google Ads settings.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Third-Party Services
          </h2>
          <p className="text-gray-700 mb-4">
            We may use third-party services such as analytics and advertising tools
            that follow their own privacy policies.
          </p>
          <p className="text-gray-700 mt-6">
            By using our website, you agree to this Privacy Policy.
          </p>
        </section>
    </div>
  );
};

export default PrivacyPolicyPage;
