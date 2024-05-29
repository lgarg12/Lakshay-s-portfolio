import leetcode from '../assets/LeetCode_Sharing.png';
import codeforces from '../assets/unnamed.png';
import codechef from '../assets/image_processing20210901-13617-10rk3th.png';


const About = () => {
    return (
      <div className="text-lg text-gray-800 font-roboto mt-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">
          As a Full Stack Developer based in Noida, India, I have a strong foundation in both frontend and backend technologies. Here's a glimpse of my tech stack:
        </p>

        <div className='flex-wrap md:flex justify-between my-10 space-y-10 md:space-y-0'
        >
            <div className="mb-4" >
              <h3 className="font-semibold mb-2">Frontend Technologies:</h3>
              <ul className="list-disc pl-5">
                <li>React.js</li>
                <li>Next.js</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                {/* Add more frontend technologies as needed */}
              </ul>
            </div>
            <div className="mb-4" >
              <h3 className="font-semibold mb-2">Backend Technologies:</h3>
              <ul className="list-disc pl-5">
                <li>Node.js</li>
                <li>Nest.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>GraphQl</li>
                <li>MongoDB</li>
                <li>Postgres</li>
                {/* Add more backend technologies as needed */}
              </ul>
            </div>
            <div className="mb-4" >
              <h3 className="font-semibold mb-2">Programming Languages:</h3>
              <ul className="list-disc pl-5">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>Golang</li>
                <li>Python</li>
                <li>C/C++</li>
    
                {/* Add more programming languages as needed */}
              </ul>
            </div>
            <div className="mb-4" >
                <h3 className="font-semibold mb-2">Competitive Programming:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className='flex gap-5 items-center'>
                    <a href="https://codeforces.com/profile/3Lucky12" target="_blank" rel="noopener noreferrer">
                      <img src={codeforces} width={'100px'} height={'100px'} alt="Codeforces"/>
                      Codeforces
                    </a>
                  </li>
                  <li className='flex gap-5 items-center'>
                    <a href="https://www.codechef.com/users/lakshayggarg20" target="_blank" rel="noopener noreferrer">
                      <img src={codechef} width={'100px'} height={'100px'} alt="Codechef"/>
                      CodeChef
                    </a>
                  </li>
                  <li className='flex gap-5 items-center'>
                    <a href="https://leetcode.com/u/lakshay1234/" target="_blank" rel="noopener noreferrer">
                      <img src={leetcode} width={'100px'} height={'100px'} alt="LeetCode"/>
                      LeetCode
                    </a>
                  </li> 
                  {/* Add icons and IDs for other platforms */}
                </ul>
            </div>
        </div>
        <p className="mb-4">
          In addition to my technical skills, I also have a passion for competitive programming. I actively participate in coding competitions on platforms like Codeforces and LeetCode, honing my problem-solving abilities and keeping myself updated with the latest algorithms and data structures.
        </p>
        <p>
          Let's connect and discuss how I can contribute to your projects!
        </p>
      </div>
    );
  };
  
  export default About;
  