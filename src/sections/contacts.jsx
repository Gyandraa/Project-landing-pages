export default function Contacts() {
    const contacts = {
      instagram: {
        id: 1,
        name: "Instagram",
        url: "https://www.instagram.com/browsun_brownies/",
        image: "/images/instagram.png",
      },
      peta: {
        id: 2,
        name: "Lokasi Toko",
        image: "/images/peta.jpg",
        desc: "Jalan Soekarno-Hatta Nomor 752, Bandung",
      },
      whatsapp: {
        id: 3,
        name: "Whatsapp",
        image: "/images/telepom.jpg",
        desc: "Hubungi kami di +62 812-3456-7890",
      },
      email: {
        id: 4,
        name: "Email",
        image: "/images/email.jpg",
        desc: "Hubungi kami di browsunbrownies@gmail.com",
      },
    };
  
    return (
      <section id="contacts" className="py-12 px-6 text-black">
        <h2 className="text-2xl font-semibold font-serif mb-8 text-amber-600 text-center">
          Hubungi Kami
        </h2>
  
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">
  
          <div className="flex flex-col items-start space-y-6 w-full md:w-1/2">
          
            <div className="flex items-center gap-3">
              <img
                src={contacts.peta.image}
                alt="Peta"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg text-black">Lokasi Kami</h3>
                <p className="text-sm text-gray-700">{contacts.peta.desc}</p>
              </div>
            </div>
  
            <div className="flex items-center gap-3">
              <img
                src={contacts.whatsapp.image}
                alt="Whatsapp"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg text-black">Whatsapp</h3>
                <p className="text-sm text-gray-700">{contacts.whatsapp.desc}</p>
              </div>
            </div>
  
            <div className="flex items-center gap-3">
              <img
                src={contacts.email.image}
                alt="Email"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg text-black">Email</h3>
                <p className="text-sm text-gray-700">{contacts.email.desc}</p>
              </div>
            </div>
  
            <div className="flex items-center gap-3">
              <img
                src={contacts.instagram.image}
                alt="Instagram"
                className="w-7 h-auto rounded-lg shadow hover:scale-105 transition-transform duration-300 ml-2"
              />
              <div>
                <a
                  href={contacts.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:underline"
                >
                <h3 className="font-semibold text-lg text-black">{contacts.instagram.name}</h3>
                </a>
              </div>
            </div>
          </div>
  
          <div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.147378511217!2d107.70596742454113!3d-6.936915717904055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2da493938df%3A0xcbbe13ea010a700a!2sJl.%20Soekarno-Hatta%20No.752%2C%20Cipadung%20Kidul%2C%20Kec.%20Panyileukan%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040614!5e1!3m2!1sid!2sid!4v1764581424543!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Toko"
            ></iframe>
          </div>
  
        </div>
      </section>
    );
  }
  