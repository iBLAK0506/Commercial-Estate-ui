import "./AgentsPage.scss";

const agents = [
  {
    id: 1,
    name: "Chinedu Okafor",
    role: "Senior Real Estate Agent",
    phone: "+234 801 234 5678",
    email: "chinedu@iblakestate.com",
    image: "/Senior-REA.jpg",
  },
  {
    id: 2,
    name: "Amina Bello",
    role: "Property Consultant",
    phone: "+234 802 345 6789",
    email: "amina@iblakestate.com",
    image: "/Property-Consult.jpg",
  },
  {
    id: 3,
    name: "Tunde Adewale",
    role: "Investment Specialist",
    phone: "+234 803 456 7890",
    email: "tunde@iblakestate.com",
    image: "/Investment-Specialist.webp",
  },
];

export default function AgentsPage() {
  return (
    <div className="agentsPage">
      <h1>Meet Our Agents</h1>
      <p>
        Our professional team is ready to guide you through buying, selling, or
        renting properties across Nigeria. Get in touch with any of our trusted
        agents below.
      </p>

      <div className="agentsGrid">
        {agents.map((agent) => (
          <div className="agentCard" key={agent.id}>
            <img src={agent.image} alt={agent.name} />
            <h2>{agent.name}</h2>
            <p>{agent.role}</p>
            <div className="contactButtons">
              <a href={`tel:${agent.phone}`} className="btn">
                Call
              </a>
              <a href={`mailto:${agent.email}`} className="btn secondary">
                Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
