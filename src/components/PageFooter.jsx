import React from 'react'
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";


function PageFooter() {
  return (
    <div className="w-full">
      
        <Footer container className="bg-gray-400 text-black">
        <FooterCopyright href="#" by="E-kart™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
         </FooterLinkGroup>
        </Footer>
      
      
    </div>
  
  )
}

export default PageFooter




