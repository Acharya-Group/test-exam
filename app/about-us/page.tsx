import Navbar from "@/components/layout/Navbar";
import React from "react";

const AboutUsPage = () => {
  return (
    
    <div>
        <Navbar/>
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            About MSPL Personnel Certification Body
          </h1>
          <p className="text-gray-700 mb-4">
            <strong>MSPL Personnel Certification Body (PRCB)</strong> is a
            professionally managed organization dedicated to promoting excellence,
            integrity, and authenticity in the field of Yoga certification.
            Functioning under the guidelines of the <strong>Yoga Certification Board
            (YCB)</strong>, Ministry of AYUSH, Government of India, MSPL PRCB plays a
            vital role in maintaining quality and standards in Yoga education.
          </p>
          <p className="text-gray-700 mb-4">
            MSPL PRCB is responsible for conducting examinations, assessments, and
            certifications for Yoga professionals across various levels. Our
            objective is to ensure that certified Yoga teachers, therapists, and
            evaluators meet the prescribed standards of competence, ethics, and
            professional knowledge.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            Our mission is to preserve the authenticity of Yoga while integrating
            traditional wisdom with modern educational methods. We strive to
            support professional development and promote Yoga as a respected and
            globally recognized discipline.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Our Objectives
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Maintain and promote Indian Yoga traditions</li>
            <li>Ensure quality and standardization in Yoga certification</li>
            <li>Support research and innovation in Yoga education</li>
            <li>Encourage ethical and professional Yoga practices</li>
            <li>Contribute to the vision of “Healthy India, Fit India”</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            About Yoga
          </h2>
          <p className="text-gray-700 mb-4">
            Yoga is a holistic practice that integrates physical, mental, and
            spiritual well-being. Originating in India over 5000 years ago, Yoga is
            recognized globally and celebrated every year on International Yoga
            Day, June 21.
          </p>
          <p className="text-gray-700 mt-6">
            Through transparent processes, standardized systems, and a commitment
            to excellence, MSPL PRCB continues to build a community of qualified and
            ethical Yoga professionals.
          </p>
        </section>
    </div>
  );
};

export default AboutUsPage;
