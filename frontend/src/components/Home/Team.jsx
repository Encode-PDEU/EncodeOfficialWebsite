// import { TeamCard } from "../../pages/Team";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { useRef, useEffect, useState } from "react";
import insta from '../../images/instagram.webp';
import linkedin from '../../images/linkedin.webp';
import twitter from '../../images/white-twitter.png';

const executives = [
  {
    name: "Anoushka Aithal",
    position: "President",
    imgsrc: "/CommittePhotos/Execs/anoushka.jpg",
    type: "executives",
    links: ["", "", ""], 
    scale: 1.35,
  },
  {
    name: "Laksh Parekh",
    position: "Vice President",
    imgsrc: "/CommittePhotos/Execs/laksh.jpg",
    type: "executives",
    links: ["", "", ""],
  },
  {
    name: "Aarav Patel",
    position: "Treasurer",
    imgsrc: "/CommittePhotos/Execs/aarav.jpg",
    type: "executives",
    links: ["", "", ""],
    scale: 1.35,
  },
  {
    name: "Hitarth Bhatt",
    position: "Above Tech Co-Ordinator",
    imgsrc: "/CommittePhotos/Execs/Hitarth Bhatt.jpg",
    type: "executives",
    links: ["", "", ""],
  },
  {
    name: "Aditya Dalal",
    position: "Technical Co-Ordinator",
    imgsrc: "/CommittePhotos/Execs/aditya_techcoord.jpg",
    type: "executives",
    links: ["", "", ""],
  },
];

function flipCard(id) {
  const item = document.getElementById(id);
  item.classList.toggle("rotated");
}

export function TeamCard({
  imgsrc = "https://links.aryanranderiya.com/l/default_user",
  id,
  name,
  about = "No description available",
  links = [], // ✅ default empty array
  position,
  scale = 1.15,
}) {
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
      id={id}
      className={`card hover:translate-y-[-5px] hover:outline transition-all outline-[#00ff7b] outline-1 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      ref={cardRef}
    >
      <div className="card-inner bg-[#00ff7b] bg-opacity-15">
        {/* FRONT */}
        <div className="card-front" onClick={() => flipCard(id)}>
          <div className="w-[140px] h-[140px] min-w-[140px] min-h-[140px] max-h-[140px] rounded-full overflow-hidden flex justify-center items-center">
            <img
              src={imgsrc}
              style={{ imageRendering: "-webkit-optimize-contrast", transform: `translateZ(0) scale(${scale})` }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl helvetica">{name}</span>
            <span className="text-lg text-foreground-400 minecraft text-wrap w-[200px] text-center">
              {position}
            </span>
          </div>
        </div>

        {/* BACK */}
        <div className="card-back">
          <div className="card-descript" onClick={() => flipCard(id)}>
            {about}
          </div>
          <div className="card-links">
            {links?.[0] && (
              <a href={links[0]} target="_blank" rel="noreferrer">
                <img src={insta} />
              </a>
            )}
            {links?.[1] && (
              <a href={links[1]} target="_blank" rel="noreferrer">
                <img src={linkedin} />
              </a>
            )}
            {links?.[2] && (
              <a href={links[2]} target="_blank" rel="noreferrer">
                <img src={twitter} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
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

  const groupedMembers = groupByType(executives);

  return (
    <section className="min-h-screen justify-center h-fit w-full flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="font-semibold text-5xl">The Executives</span>
        <span className="font-normal text-md text-foreground-500">
          Meet the faces behind the club!
        </span>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-3 md:max-w-[90vw] w-full justify-center mb-4">
        {executives.map((member, index) => (
          <TeamCard
            key={index}
            id={index}
            name={member.name}
            position={member.position}
            imgsrc={member.imgsrc}
            type={member.type}
            about={member.about}
            links={member.links}
            scale={member.scale}
          />
        ))}
      </div>

      <Link to={"team"}>
        <Button
          color="success"
          radius="none"
          size="lg"
          className="font-semibold text-lg"
        >
          View All Members
        </Button>
      </Link>
    </section>
  );
}
