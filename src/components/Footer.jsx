import {Waves} from "lucide-react";
import {Footer as UiFooter} from "./ui/footer";

function Footer() {
  return (
    <div className="w-full">
      <UiFooter
        logo={<Waves />}
        brandName="Blue Escape"
        socialLinks={[
          {
            // icon: <RiTwitterFill className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            // icon: <RiGithubFill className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          {href: "/home", label: "Home"},
          {href: "/about", label: "About"},
          {href: "/Yachts", label: "Yachts"},
          {href: "/contact", label: "Contact"},
        ]}
        copyright={{
          text: "© 2024 Blue Escape",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

export default Footer;
