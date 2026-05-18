import {Footer as UiFooter} from "@/components/ui/footer";
import {Waves} from "lucide-react";

function Footer() {
  return (
    <div>
      <UiFooter
        logo={<Waves />}
        brandName="Blue Escape"
        socialLinks={[
          {
            // icon: InstagramIcon,
            href: "https://www.instagram.com/gaberuseff",
            label: "Instagram",
          },
          {
            // icon: FacebookIcon,
            href: "https://www.facebook.com/gaberuseff",
            label: "Facebook",
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
