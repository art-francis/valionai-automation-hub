import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="pt-20"> {/* This div is for offsetting the fixed header */}
        <section className="py-20 px-6 md:px-12"> {/* Added section for consistent padding */}
          <div className="container mx-auto max-w-7xl"> {/* Standard container */}
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        Welcome to Our Company! These terms and conditions outline the rules and regulations for the use of
        Our Company's Website, located at https://valionai.com/.
      </p>

      <p className="mb-4">
        By accessing this website we assume you accept these terms and conditions. Do not continue to use
        Our Company if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">1. Cookies</h2>
      <p className="mb-4">
        We employ the use of cookies. By accessing Our Company, you agreed to use cookies in agreement with
        the Our Company's Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s
        details for each visit. Cookies are used by our website to enable the functionality of certain areas
        to make it easier for people visiting our website. Some of our affiliate/advertising partners may
        also use cookies.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">2. License</h2>
      <p className="mb-4">
        Unless otherwise stated, Our Company and/or its licensors own the intellectual property rights for
        all material on Our Company. All intellectual property rights are reserved. You may access this from
        Our Company for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      <p className="mb-4">You must not:</p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Republish material from Our Company</li>
        <li>Sell, rent or sub-license material from Our Company</li>
        <li>Reproduce, duplicate or copy material from Our Company</li>
        <li>Redistribute content from Our Company</li>
      </ul>
      <p className="mb-4">This Agreement shall begin on the date hereof.</p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">3. User Comments</h2>
      <p className="mb-4">
        Parts of this website offer an opportunity for users to post and exchange opinions and information
        in certain areas of the website. Our Company does not filter, edit, publish or review Comments
        prior to their presence on the website. Comments do not reflect the views and opinions of Our
        Company,its agents and/or affiliates. Comments reflect the views and opinions of the person who
        post their views and opinions. To the extent permitted by applicable laws, Our Company shall not be
        liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result
        of any use of and/or posting of and/or appearance of the Comments on this website.
      </p>
      <p className="mb-4">
        Our Company reserves the right to monitor all Comments and to remove any Comments which can be
        considered inappropriate, offensive or causes breach of these Terms and Conditions.
      </p>
      <p className="mb-4">You warrant and represent that:</p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
        <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
        <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
        <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
      </ul>
      <p className="mb-4">
        You hereby grant Our Company a non-exclusive license to use, reproduce, edit and authorize others
        to use, reproduce and edit any of your Comments in any and all forms, formats or media.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">4. Hyperlinking to our Content</h2>
      <p className="mb-4">
        The following organizations may link to our Website without prior written approval:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
      </ul>
      <p className="mb-4">
        These organizations may link to our home page, to publications or to other Website information so
        long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship,
        endorsement or approval of the linking party and its products and/or services; and (c) fits within
        the context of the linking party’s site.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">5. iFrames</h2>
      <p className="mb-4">
        Without prior approval and written permission, you may not create frames around our Webpages that
        alter in any way the visual presentation or appearance of our Website.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">6. Content Liability</h2>
      <p className="mb-4">
        We shall not be hold responsible for any content that appears on your Website. You agree to protect
        and defend us against all claims that is rising on your Website. No link(s) should appear on any
        Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise
        violates, or advocates the infringement or other violation of, any third party rights.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">7. Reservation of Rights</h2>
      <p className="mb-4">
        We reserve the right to request that you remove all links or any particular link to our Website. You
        approve to immediately remove all links to our Website upon request. We also reserve the right to
        amend these terms and conditions and it’s linking policy at any time. By continuously linking to
        our Website, you agree to be bound to and follow these linking terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">8. Removal of links from our website</h2>
      <p className="mb-4">
        If you find any link on our Website that is offensive for any reason, you are free to contact and
        inform us any moment. We will consider requests to remove links but we are not obligated to or so
        or to respond to you directly.
      </p>
      <p className="mb-4">
        We do not ensure that the information on this website is correct, we do not warrant its completeness
        or accuracy; nor do we promise to ensure that the website remains available or that the material on
        the website is kept up to date.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">9. Disclaimer</h2>
      <p className="mb-4">
        To the maximum extent permitted by applicable law, we exclude all representations, warranties and
        conditions relating to our website and the use of this website. Nothing in this disclaimer will:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>limit or exclude our or your liability for death or personal injury;</li>
        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
      </ul>
      <p className="mb-4">
        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
        (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the
        disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
      </p>
      <p className="mb-4">
        As long as the website and the information and services on the website are provided free of charge,
        we will not be liable for any loss or damage of any nature.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        These terms will be governed by and interpreted in accordance with the laws of Japan,
        and you submit to the non-exclusive jurisdiction of the state and federal courts located in
        Japan for the resolution of any disputes.
      </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
