
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <span className="text-blue-600">Valion</span>AI
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/solutions" className="text-gray-700 hover:text-blue-600 font-medium">
                  Solutions
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="https://blog.valionai.com"
                  className="..."         // keep your styling
                  target="_blank"         // open in new tab (optional, but recommended for external)
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              <Link to="/" className="px-6 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
              <Link to="/solutions" className="px-6 py-2 text-gray-700 hover:bg-gray-100">Solutions</Link>
              <Link to="/about" className="px-6 py-2 text-gray-700 hover:bg-gray-100">About</Link>
              <Link to="/blog" className="px-6 py-2 text-gray-700 hover:bg-gray-100">Blog</Link>
              <Link to="/contact" className="px-6 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
