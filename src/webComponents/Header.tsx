import { FaBars } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-scroll';

const Header = () => {
 
  return (
    <div className="flex justify-between items-center font-serif">
      <div>
        Lakshay
      </div>
      <div className="hidden md:flex gap-5 items-center">
        <Link to="work" smooth={true} duration={500}>Work</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="resume" smooth={true} duration={500}>Resume</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
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
              <Link to="work" smooth={true} duration={500}>Work</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link to="about" smooth={true} duration={500}>About</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>Resume</DropdownMenuItem>

            <DropdownMenuItem>              
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header;