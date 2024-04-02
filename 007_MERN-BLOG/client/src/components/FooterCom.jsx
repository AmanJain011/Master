import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs'

const FooterCom = () => {
  return (
    <Footer container className="border border-teal-500 border-t-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full grid justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="whitespace-nowrap self-center text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span
                className="px-2 py-1 bg-gradient-to-r 
            from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"
              >
                Aman's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title="About"/>
            <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">100 JS Project</Footer.Link>
                <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">Aman's Blog</Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">100 JS Project</Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="FOLLOW US"/>
            <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">Github</Footer.Link>
                <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">Aman's Blog</Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">100 JS Project</Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="LEGAL"/>
            <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</Footer.Link>
                <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright 
             href="#"
             by="Aman's Blog"
             year={new Date().getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsTwitterX}/>
                <Footer.Icon href="#" icon={BsGithub}/>
                <Footer.Icon href="#" icon={BsDribbble}/>
            </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
