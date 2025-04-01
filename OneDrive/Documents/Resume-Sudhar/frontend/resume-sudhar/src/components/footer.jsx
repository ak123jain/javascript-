import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1626] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Section */}
          <div>
            <h4 className="text-red-400 font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Resume Builder</li>
              <li>Cover Letter Builder</li>
              <li>Resume Website Builder</li>
              <li>LinkedIn Resume Builder</li>
              <li>AI Resume Builder</li>
              <li>AI Cover Letter Writer</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-red-400 font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Resume Examples</li>
              <li>Cover Letter Examples</li>
              <li>Resume Guides</li>
              <li>Cover Letter Guides</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-red-400 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Ratings Section */}
          <div>
            <h4 className="text-red-400 font-semibold mb-3">Ratings</h4>
            <p className="text-sm">Google: ⭐⭐⭐⭐⭐ 4.7/5</p>
            <p className="text-sm">App Store: ⭐⭐⭐⭐⭐ 4.6/5</p>
            <img src="/trustpilot.png" alt="Trustpilot Rating" className="w-24 mt-2" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-5">
          <p className="text-sm">Made with ❤️ by Kickresume ©</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="/twitter.png" alt="Twitter" className="w-6 h-6" />
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
          </div>

          {/* App Store Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="/appstore.png" alt="App Store" className="w-24" />
            <img src="/googleplay.png" alt="Google Play" className="w-24" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
