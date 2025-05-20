import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom"; // <-- Add this line

const CookiePolicyPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="pt-20"> {/* This div is for offsetting the fixed header */}
        <section className="py-20 px-6 md:px-12"> {/* Added section for consistent padding */}
          <div className="container mx-auto max-w-7xl"> {/* Standard container */}
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">
        This is the Cookie Policy for Our Company, accessible from https://valionai.com/.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">What Are Cookies</h2>
      <p className="mb-4">
        As is common practice with almost all professional websites, this site uses cookies, which are tiny
        files that are downloaded to your computer, to improve your experience. This page describes what
        information they gather, how we use it and why we sometimes need to store these cookies. We will
        also share how you can prevent these cookies from being stored however this may downgrade or 'break'
        certain elements of the sites functionality.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">How We Use Cookies</h2>
      <p className="mb-4">
        We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no
        industry standard options for disabling cookies without completely disabling the functionality and
        features they add to this site. It is recommended that you leave on all cookies if you are not sure
        whether you need them or not in case they are used to provide a service that you use.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">Disabling Cookies</h2>
      <p className="mb-4">
        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser
        Help for how to do this). Be aware that disabling cookies will affect the functionality of this and
        many other websites that you visit. Disabling cookies will usually result in also disabling certain
        functionality and features of this site. Therefore it is recommended that you do not disable
        cookies.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-6">The Cookies We Set</h2>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li className="mb-2">
          <strong>Account related cookies:</strong> If you create an account with us then we will use cookies
          for the management of the signup process and general administration. These cookies will usually
          be deleted when you log out however in some cases they may remain afterwards to remember your
          site preferences when logged out.
        </li>
        <li className="mb-2">
          <strong>Login related cookies:</strong> We use cookies when you are logged in so that we can
          remember this fact. This prevents you from having to log in every single time you visit a new
          page. These cookies are typically removed or cleared when you log out to ensure that you can
          only access restricted features and areas when logged in.
        </li>
        <li className="mb-2">
          <strong>Email newsletters related cookies:</strong> This site may offer newsletter or email
          subscription services and cookies may be used to remember if you are already registered and
          whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
        </li>
        <li className="mb-2">
          <strong>Orders processing related cookies:</strong> This site may offer e-commerce or payment
          facilities and some cookies are essential to ensure that your order is remembered between pages
          so that we can process it properly.
        </li>
        <li className="mb-2">
          <strong>Surveys related cookies:</strong> From time to time we may offer user surveys and
          questionnaires to provide you with interesting insights, helpful tools, or to understand our
          user base more accurately. These surveys may use cookies to remember who has already taken part
          in a survey or to provide you with accurate results after you change pages.
        </li>
        <li className="mb-2">
          <strong>Forms related cookies:</strong> When you submit data to through a form such as those found
          on contact pages or comment forms cookies may be set to remember your user details for future
          correspondence.
        </li>
        <li className="mb-2">
          <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this
          site we provide the functionality to set your preferences for how this site runs when you use
          it. In order to remember your preferences we need to set cookies so that this information can
          be called whenever you interact with a page is affected by your preferences.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 mt-6">Third Party Cookies</h2>
      <p className="mb-4">
        In some special cases we also use cookies provided by trusted third parties. The following section
        details which third party cookies you might encounter through this site.
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li className="mb-2">
          This site uses Google Analytics which is one of the most widespread and trusted analytics solution
          on the web for helping us to understand how you use the site and ways that we can improve your
          experience. These cookies may track things such as how long you spend on the site and the pages
          that you visit so we can continue to produce engaging content. For more information on Google
          Analytics cookies, see the official Google Analytics page.
        </li>
        <li className="mb-2">
          Third party analytics are used to track and measure usage of this site so that we can continue to
          produce engaging content. These cookies may track things such as how long you spend on the site
          or pages you visit which helps us to understand how we can improve the site for you.
        </li>
        <li className="mb-2">
          From time to time we test new features and make subtle changes to the way that the site is
          delivered. When we are still testing new features these cookies may be used to ensure that you
          receive a consistent experience whilst on the site whilst ensuring we understand which
          optimisations our users appreciate the most.
        </li>
        <li className="mb-2">
          As we sell products it's important for us to understand statistics about how many of the
          visitors to our site actually make a purchase and as such this is the kind of data that these
          cookies will track. This is important to you as it means that we can accurately make business
          predictions that allow us to monitor our advertising and product costs to ensure the best
          possible price.
        </li>
        <li className="mb-2">
          The Google AdSense service we may use to serve advertising uses a DoubleClick cookie to serve more
          relevant ads across the web and limit the number of times that a given ad is shown to you. For
          more information on Google AdSense see the official Google AdSense privacy FAQ.
        </li>
        <li className="mb-2">
          We use adverts to offset the costs of running this site and provide funding for further
          development. The behavioural advertising cookies used by this site are designed to ensure that
          we provide you with the most relevant adverts where possible by anonymously tracking your
          interests and presenting similar things that may be of interest.
        </li>
        <li className="mb-2">
          Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if
          our customers have come to the site through one of our partner sites so that we can credit them
          appropriately and where applicable allow our affiliate partners to provide any bonus that they
          may provide you for making a purchase.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 mt-6">More Information</h2>
      <p className="mb-4">
        Hopefully that has clarified things for you and as was previously mentioned if there is something
        that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it
        does interact with one of the features you use on our site.
      </p>
      <p className="mb-4">
        However if you are still looking for more information then you can contact us through one of our
        preferred contact methods:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Email: info@valionai.com</li>
        <li>By visiting this link: <Link to="/contact" className="text-blue-600 hover:underline">Contact Page</Link></li>
      </ul>

      <p className="mt-8 text-sm text-gray-600">
        This Cookie Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cookie Policy Generator</a>.
      </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;
