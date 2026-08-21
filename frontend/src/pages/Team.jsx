import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Anoushka Aithal",
    position: "President",
    imgsrc: "/CommittePhotos/Execs/anoushka.jpg",
    type: "executives",
    scale: 1.35
  },
  {
    name: "Laksh Parekh",
    position: "Vice President",
    imgsrc: "/CommittePhotos/Execs/laksh.jpg",
    type: "executives"
  },
  {
    name: "Aarav Patel",
    position: "Treasurer",
    imgsrc: "/CommittePhotos/Execs/aarav.jpg",
    type: "executives",
    scale: 1.35
  },
  {
    name: "Hitarth Bhatt",
    position: "Above Tech Co-Ordinator",
    imgsrc: "/CommittePhotos/Execs/Hitarth Bhatt.jpg",
    type: "executives"
  },
  {
    name: "Aditya",
    position: "Technical Co-Ordinator",
    imgsrc: "/CommittePhotos/Execs/aditya_techcoord.jpg",
    type: "executives"
  },
  {
    name: "Deep Jani",
    position: "Cloud & DevOps Head",
    imgsrc: "/CommittePhotos/Cloud/DEEp.jpg",
    type: "Technical Heads"
  },
  {
    name: "Shreyansh",
    position: "Cloud & DevOps Head",
    imgsrc: "/CommittePhotos/Cloud/shreyansh .jpg",
    type: "Technical Heads"
  },
  {
    name: "Aayush Parekh",
    position: "Web Development Head",
    imgsrc: "/CommittePhotos/WebDev/aayush.png",
    type: "Technical Heads"
  },
  {
    name: "Preksha Patel",
    position: "Web Development Head",
    imgsrc: "/CommittePhotos/WebDev/Preksha_WebDev.jpeg",
    type: "Technical Heads"
  },
  {
    name: "Rudra",
    position: "Competitive Programming Head",
    imgsrc: "/CommittePhotos/CP/rudra cp.jpeg",
    type: "Technical Heads"
  },
  {
    name: "Jay Goti",
    position: "Competitive Programming Head",
    imgsrc: "/CommittePhotos/CP/jay goti.jpeg",
    type: "Technical Heads"
  },
  {
    name: "Vedant Bhalgama",
    position: "Cyber Security Head",
    imgsrc: "/CommittePhotos/CyberSec/vedant.jpeg",
    type: "Technical Heads"
  },
  {
    name: "Dhyey Mendpara",
    position: "Cyber Security Head",
    imgsrc: "/CommittePhotos/CyberSec/Dhyey_cybersec.jpeg",
    type: "Technical Heads"
  },
  {
    name: "Ansh Patel",
    position: "Game Development Head",
    imgsrc: "/CommittePhotos/GameDev/ansh.JPG",
    type: "Technical Heads"
  },
  {
    name: "Devdeep Chauhan",
    position: "Game Development Head",
    imgsrc: "/CommittePhotos/GameDev/devdeep.JPG",
    type: "Technical Heads"
  },
  {
    name: "Shatakshi",
    position: "Content & Documentation Head",
    imgsrc: "/CommittePhotos/CD/shatakshi_CnD.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Devarsh",
    position: "Content & Documentation Head",
    imgsrc: "/CommittePhotos/CD/devarsh.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Pratham",
    position: "Event Management & Logistics Head",
    imgsrc: "/CommittePhotos/EM/pratham.jpg",
    type: "non-Technical Heads",
    objectPosition: "center top"
  },
  {
    name: "Hanisha",
    position: "Event Management & Logistics Head",
    imgsrc: "/CommittePhotos/EM/hanisha.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Chintan",
    position: "Graphic Design Head",
    imgsrc: "/CommittePhotos/GD/chintan_gd.jpg",
    type: "non-Technical Heads",
    objectPosition: "center top"
  },
  {
    name: "Riya Shah",
    position: "Graphic Design Head",
    imgsrc: "/CommittePhotos/GD/riyashah.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Dhyanaa",
    position: "Coverage Head",
    imgsrc: "/CommittePhotos/COV/dhyanaa_cov.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Yashita",
    position: "Coverage Head",
    imgsrc: "/CommittePhotos/COV/yashita.JPG",
    type: "non-Technical Heads"
  },
  {
    name: "Swara",
    position: "Publicity Head",
    imgsrc: "/CommittePhotos/PR/swara.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Vaishvi",
    position: "Publicity Head",
    imgsrc: "/CommittePhotos/PR/Vaishvi_publicity_2.png",
    type: "non-Technical Heads"
  },
  {
    name: "Pranshu",
    position: "Video Editing Head",
    imgsrc: "/CommittePhotos/VE/Pranshu_VE.jpg",
    type: "non-Technical Heads"
  },
  {
    name: "Tejash",
    position: "Video Editing Head",
    imgsrc: "/CommittePhotos/VE/Tejash_VE.jpg",
    type: "non-Technical Heads"
  }
];
export { teamMembers };

export function TeamCard({ imgsrc = "https://links.aryanranderiya.com/l/default_user", name, position, scale = 1.15 }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col p-[2em] items-center gap-5 bg-[#00ff7b] bg-opacity-15 rounded-none z-[1] hover:translate-y-[-5px] w-full max-w-[260px] min-w-[150px] transition-all outline-1 hover:outline outline-[#00ff7b] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-[150px] h-[150px] min-w-[150px] min-h-[150px] max-h-[150px] rounded-full overflow-hidden flex justify-center items-center">
        <img
          src={imgsrc}
          style={{ imageRendering: "-webkit-optimize-contrast", transform: `translateZ(0) scale(${scale})` }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl helvetica text-center ">{name}</span>
        <span className="text-lg text-foreground-400 minecraft text-wrap w-[200px] text-center">
          {position}
        </span>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const groupByType = (members) => {
    return members.reduce((groups, member) => {
      const { type } = member;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(member);
      return groups;
    }, {});
  };

  const groupedMembers = groupByType(teamMembers);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="sm:min-h-[70vh] min-h-screen pt-[160px] justify-start h-fit w-full flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="font-semibold text-5xl">The Team</span>
        <span className="font-normal text-md text-foreground-500">Meet the team of encode!</span>
      </div>
      <div className="flex sm:w-fit w-full sm:p-0 p-[2em]">
        <Accordion
          variant="light"
          itemClasses={{
            heading: "md:min-w-[80vw] md:max-w-[80vw] justify-center mb-4"
          }}
          selectionMode="multiple"
          defaultExpandedKeys={["executives", "technicalheads", "non-technicalheads"]}
        >
          {Object.entries(groupedMembers).map(([type, members], index) => (
            <AccordionItem
              key={type.toLowerCase().replace(" ", "")}
              aria-label={`Accordion ${index + 1}`}
              title={`${type.charAt(0).toUpperCase() + type.slice(1)} `}
            >
              <div className={`flex gap-3 md:max-w-[80vw] justify-center mb-4 ${type === "executives" ? "flex-wrap sm:flex-nowrap" : "flex-wrap"}`}>
                {members.map((member, idx) => (
                  <TeamCard
                    key={idx}
                    name={member.name}
                    position={member.position}
                    imgsrc={member.imgsrc}
                    type={member.type}
                    scale={member.scale}
                  />
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
