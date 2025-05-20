
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-blue-400">Valion</span>AI
            </Link>
            <p className="text-gray-400 max-w-xs">
              AI-powered automation solutions for businesses and agencies seeking measurable impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Workflow Automation</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">AI Content Generation</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Data Integration</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Custom Chatbots</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:text-left">
          <p className="text-gray-500">
            &copy; {currentYear} ValionAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
