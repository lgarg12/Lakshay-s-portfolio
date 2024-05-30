import { FaBars } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 cursor-pointer">
      <div className="flex justify-between items-center font-serif p-4">
        <div>
          Lakshay
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <ScrollLink to="work" smooth={true} duration={500}>Work</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
          <RouterLink to="pdf-viewer">Resume</RouterLink>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
        </div>
        <div className='border-none flex md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaBars />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ScrollLink to="work" smooth={true} duration={500}>Work</ScrollLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <RouterLink to="pdf-viewer">
                  Resume
                </RouterLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Header;
