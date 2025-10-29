import Head from 'next/head';
import Image from 'next/image';

// Sample gallery images data (replace with your actual images)
const galleryImages = [

// 🏫 Campus Building
{ id: 1, src: '/gallery/building1.jpg', alt: 'Campus Building 1', category: 'campus' },
{ id: 3, src: '/gallery/building3.jpg', alt: 'Campus Building 3', category: 'campus' },
{ id: 4, src: '/gallery/building6.jpg', alt: 'Campus Building 6', category: 'campus' },
{ id: 5, src: '/gallery/building4.jpg', alt: 'Campus Building 4', category: 'campus' },
{ id: 6, src: '/gallery/building5.jpg', alt: 'Campus Building 5', category: 'campus' },
{ id: 7, src: '/gallery/building7.jpg', alt: 'Campus Building 7', category: 'campus' },
{ id: 9, src: '/gallery/building9.jpg', alt: 'Campus Building 9', category: 'campus' },
{ id: 10, src: '/gallery/building10.jpg', alt: 'Campus Building 10', category: 'campus' },
{ id: 11, src: '/gallery/building11.jpg', alt: 'Campus Building 11', category: 'campus' },
{ id: 12, src: '/gallery/building12.jpg', alt: 'Campus Building 12', category: 'campus' },
{ id: 13, src: '/gallery/building13.jpg', alt: 'Campus Building 13', category: 'campus' },
{ id: 14, src: '/gallery/building14.jpg', alt: 'Campus Building 14', category: 'campus' },
{ id: 15, src: '/gallery/building15.jpg', alt: 'Campus Building 15', category: 'campus' },
{ id: 16, src: '/gallery/building16.jpg', alt: 'Campus Building 16', category: 'campus' },
 
];


export default function Library() {
  return (
    <div className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Campus | Gallery</title>
        <meta name="description" content="Experience campus life through our gallery" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus</h1>
          <p className="text-xl text-gray-600">Explore our Campus through these moments</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-60">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}