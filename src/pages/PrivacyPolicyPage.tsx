import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="pt-20"> {/* This div is for offsetting the fixed header */}
        <section className="py-20 px-6 md:px-12"> {/* Added section for consistent padding */}
          <div className="container mx-auto max-w-7xl"> {/* Standard container */}
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. It is Our Company's policy to respect your privacy regarding any
        information we may collect from you across our website, https://valionai.com/, and other sites we own and
        operate.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">1. Information We Collect</h2>
      <p className="mb-4">
        We only ask for personal information when we truly need it to provide a service to you. We collect it
        by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting
        it and how it will be used.
      </p>
      <p className="mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Log data: When you visit our website, our servers may automatically log the standard data provided by your web browser. This may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</li>
        <li>Device data: We may also collect data about the device you’re using to access our website. This data may include the device type, operating system, unique device identifiers, device settings, and geo-location data.</li>
        <li>Personal information: We may ask for personal information, such as your name, email address, social media profiles, phone/mobile number, home/mailing address, and payment information.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 mt-6">2. How We Use Your Information</h2>
      <p className="mb-4">
        We may use the information we collect for various purposes, including to:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 mt-6">3. Sharing Your Information</h2>
      <p className="mb-4">
        We only retain collected information for as long as necessary to provide you with your requested
        service. What data we store, we’ll protect within commercially acceptable means to prevent loss and
        theft, as well as unauthorized access, disclosure, copying, use or modification.
      </p>
      <p className="mb-4">
        We don’t share any personally identifying information publicly or with third-parties, except when
        required to by law.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">4. Cookies</h2>
      <p className="mb-4">
        Our website may use cookies to enhance your experience. For more information, please see our Cookie Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">5. Third-Party Links</h2>
      <p className="mb-4">
        Our website may link to external sites that are not operated by us. Please be aware that we have no
        control over the content and practices of these sites, and cannot accept responsibility or liability
        for their respective privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">6. Your Rights</h2>
      <p className="mb-4">
        You are free to refuse our request for your personal information, with the understanding that we may
        be unable to provide you with some of your desired services.
      </p>
      <p className="mb-4">
        Your continued use of our website will be regarded as acceptance of our practices around privacy and
        personal information. If you have any questions about how we handle user data and personal information,
        feel free to contact us.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
        new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        This policy is effective as of May 21, 2025.
      </p>

          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
