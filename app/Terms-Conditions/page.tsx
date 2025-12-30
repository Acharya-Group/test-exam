import Navbar from "@/components/layout/Navbar";
import React from "react";

const TermsConditionsPage = () => {
  return (
    <div>
        <Navbar/>
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-700 mb-4">
            Welcome to <strong>YCB Demo Exam Portal</strong>. By accessing or using
            this website, you agree to comply with and be bound by the following
            terms and conditions.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Use of Website
          </h2>
          <p className="text-gray-700 mb-4">
            This platform provides demo exams and informational content related to
            Yoga certification. The content is for educational and practice
            purposes only.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            No Official Certification
          </h2>
          <p className="text-gray-700 mb-4">
            YCB Demo Exam Portal does not issue official certificates. All official
            certifications are governed by the Yoga Certification Board (YCB),
            Ministry of AYUSH, Government of India.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Intellectual Property
          </h2>
          <p className="text-gray-700 mb-4">
            All content on this website, including text and design, is the property
            of MSPL PRCB and may not be copied or reused without permission.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-4">
            We are not responsible for any loss or damage arising from the use of
            this website or reliance on its content.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Changes to Terms
          </h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to update these terms at any time without prior
            notice. Continued use of the website signifies acceptance of updated
            terms.
          </p>
          <p className="text-gray-700 mt-6">
            If you do not agree with these terms, please discontinue use of the
            website.
          </p>
        </section>
    </div>
  );
};

export default TermsConditionsPage;
