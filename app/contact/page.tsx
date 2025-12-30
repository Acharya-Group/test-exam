import Navbar from "@/components/layout/Navbar";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
        <Navbar/>
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-8">
            For any queries related to Yoga certification or demo exams, feel free
            to contact us.
          </p>
          <div className="space-y-4 text-lg text-gray-800">
            <p>
              📧 <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:yogacertificationbody@gmail.com"
                className="text-blue-600 hover:underline"
              >
                yogacertificationbody@gmail.com
              </a>
            </p>
            <p>
              📞 <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+918930300615"
                className="text-blue-600 hover:underline"
              >
                +91 89303-00615
              </a>
            </p>
          </div>
        </section>
    </div>
  );
};

export default ContactUsPage;
