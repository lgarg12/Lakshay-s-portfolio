import Cart from "./Cart"
import HealthHub from '../assets/Screenshot 2024-05-29 195046.png'

const Work = () => {
  return (
    <div className="mt-10">
      <div className="text-2xl font-semibold mb-4">Work</div>
      <Cart
        title="HealthUB Project"
        image={HealthHub}
        GithubLink="https://github.com/lgarg12/HealthHub"
        description="HealthUB is a comprehensive health monitoring platform that facilitates seamless communication between clinics and patients. It empowers patients to track their fitness goals and health data, while enabling doctors to continuously monitor patient health reports. Built with React, TypeScript, Redux, and Material UI on the frontend, and TypeScript, Express.js, PostgreSQL, Sequelize ORM, and GraphQL on the backend, HealthUB ensures a robust and efficient healthcare management system."
        frontendTechStack={["React.js", "TypeScript", "Redux", "Material UI"]}
        backendTechStack={["TypeScript", "Express.js", "PostgreSQL", "Sequelize ORM", "GraphQL"]}
      />

    </div>
  )
}

export default Work
