import React from 'react'

const lifeSegCards = [
  {
    image: "/gallery/event-conference-room.jpeg",
    title: "Black Apple Technologies Placement Drive",
    description: "Black Apple Technologies visited SITM campus on 24th April 2026. Students from B.Tech CS, IT, AI, BCA, MCA and Diploma participated with packages up to 6 LPA."
  },
  {
    image: "/gallery/event-placement-drive.jpeg",
    title: "Campus Placement Drive Event",
    description: "Students actively participating in the campus placement drive held at SITM Conference Room. Multiple companies visited for recruitment."
  },
  {
    image: "/workshop.jpeg",
    title: "White Soft Info Workshop",
    description: "White Soft Info conducted a career guidance & placement readiness workshop for BTech, MBA, MCA, and Diploma students in the conference hall."
  },
  {
    image: "/Magazine.jpeg",
    title: "Inauguration of Saroj Times",
    description: "Our Honourable Chairman officially released the first issue of Saroj Times magazine and extended his congratulations to all contributors."
  },
  {
    image: "/CarrerCounselling.jpeg",
    title: "Career Counseling & Expert Talk",
    description: "Expert Talk delivered by Mr. Satish Anand, CEO of Sikho India Group, providing valuable industry insights and career guidance to students."
  },
  {
    image: "/gallery/event-photo1.jpeg",
    title: "Placement Success Celebration",
    description: "Celebrating the successful placement of our students at top companies. SEG continues to maintain an excellent placement record year after year."
  },
];

export default function LifeSeg() {
  return (
    <div className='w-full bg-[#fff9f2]'>
      <div className='max-w-7xl mx-auto text-center py-4'>
        <h1 className='text-5xl'>Life @ SEG</h1>
        <div className="flex items-center justify-center p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {lifeSegCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-[#354b87]">{card.title}</h2>
                  <p className="text-gray-600 mt-2">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
