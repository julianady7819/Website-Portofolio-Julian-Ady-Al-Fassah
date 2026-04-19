import DataImage from "./data"
import { listProyek, skillsData } from "./data"
import { useState } from "react";
import ProjectCard from "./components/ProjectCard"


function App() {

  // ✅ PINDAHKAN KE SINI (BUKAN DI Project)
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(listProyek.map((p) => p.category)),
  ];


  return (
    <>

      {/* Hero */}
      <div className="hero grid grid-cols-1 md:grid-cols-2 pt-10 items-center gap-6 lg:gap-10">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3mb6 bg-white/20 text-white w-fit p-6 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <h1 className="p-2">“Take The Risk or Lost the Chance”</h1>
          </div>
          <h1 className="text-5xl/tight text-white font-bold mb-6">Hi, I am Julian Ady Al Fassah</h1>
          <p className="text-base/loose text-white mb-6 text-justify opacity-100">Engineering student at the Sepuluh Nopember Institute of Technology (ITS), specializing in water infrastructure and construction management. Expert in integrating computational analysis with technical drawing to produce accurate engineering designs. Proven track record of fast adaptation to new work environments and a high motivation for technical competency development. Focused on work efficiency, discipline, innovation, and systematic project execution.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href={`${import.meta.env.BASE_URL}CV ATS_Julian Ady Al Fassah.pdf`}
              download
              className="bg-[#0759a6] p-4 rounded-2xl hover:bg-blue-500 text-white"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-white/20 p-4 rounded-2xl hover:bg-white/50 text-white">
              Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div className="w-full max-w-[500px] md:ml-auto">
          <div className="relative rounded-2xl aspect-square overflow-hidden group">

            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="animate__animated animate__fadeInUp animate__delay-3s block w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" sizes="1000" loading="lazy"
            />

          </div>
        </div>
      </div>
      {/* Hero */}


      {/* tentang */}

      <div className="container mx-auto mt-20 mb-10 px-4 sm:px-6 lg:px-8" id="tentang">

        {/* Header */}
        <div className="text-center mb-12 " data-aos="fade-up" data-aos-duration="1000" data-aos-one="true">
          <h1 className="text-4xl text-white font-bold mb-2">About</h1>
          <p className="text-white ">
            A concise overview of my background, technical focus, and professional direction.
          </p>
        </div>

        {/* Grid 2 container */}
        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-duration="1000" data-aos-one="true"   >

          {/* LEFT CARD */}
          <div className="w-full bg-white/20 p-8 rounded-2xl shadow-sm flex flex-col">
            <h2 className="text-xl text-white text-center font-semibold mb-4">Profile</h2>
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
            <p className="text-base/loose text-white font-extrabold mb-6 text-center opacity-100 leading-relaxed">
              I am Diploma in Civil Engineering · Started in August 2022 · GPA 3.07 / 4.00
            </p>
            <p className="text-base/loose mb6 text-center text-white leading-relaxed">
              Engineering student at ITS specializing in water infrastructure and construction management, with strong skills in integrating computational analysis and technical drawing to produce accurate designs. Known for quick adaptability, high motivation to develop technical competence, and a disciplined, efficient, and systematic approach to project execution, with a focus on innovation.
            </p>
            <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:gap-8">
              <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
              <div className="grid grid-cols-2 gap-4 text-center">

                <div>
                  <h1 className="text-2xl sm:text-4xl mb-1 text-white">
                    5 <span className="text-[#0759a6] ">+</span>
                  </h1>
                  <p className="text-white">Project completed</p>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-4xl mb-1 text-white">
                    3 <span className="text-[#0759a6] ">+</span>
                  </h1>
                  <p className="text-white">Years Experience</p>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/20 p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl text-white  text-center font-semibold mb-4">Personal Information</h2>

            <div className="space-y-3 text-base/loose mb-6 text-justify">

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium">Name</span>
                <span>Julian Ady Al Fassah</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium">Email</span>
                <span>agendabimapp@gmail.com</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium">Phone</span>
                <span>089507468578</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium">Location</span>
                <span>Tulungagung, Jawa Timur, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3 - PERSONAL EXPERIENCE */}
      <div className="bg-white/20 p-8 rounded-2xl shadow-sm md:col-span-2" data-aos="fade-up" data-aos-duration="1000" data-aos-one="true">
        <h2 className="text-xl text-white font-semibold mb-4">Professional Experience</h2>

        <div className="space-y-6 text-base/loose">

          <hr className="border-[#0759a6]" />
          {/* Experience 1 */}
          <div>
            <h3 className="font-semibold text-white">
              Trainer – Bricklaying Competition (LKS SMK)
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              SMKN 3 Boyolangu, Tulungagung · 2022 – 2023
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Mentoring for Provincial and National Level Vocational Skills Competition</li>
              <li>Technical Training in Masonry and Bricklaying Excellence</li>
              <li>Establishing a fast and efficient workflow</li>
            </ul>
          </div>


          <hr className="border-[#0759a6]" />
          {/* Experience 1 */}
          <div>
            <h3 className="font-semibold text-white">
              Staff of Entrepreneurship Division – HMDS ITS
            </h3>
            <p className="text-white opacity-100 text-sm mb-2">
              Surabaya, Indonesia · 2024 – 2025
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Business Process Planning and Execution </li>
              <li>Organizational Management & Analytical Thinking </li>
              <li>Strategic Support for Departmental Programs</li>
            </ul>
          </div>


          <hr className="border-[#0759a6]" />
          {/* Experience 3 */}
          <div>
            <h3 className="font-semibold text-white">
              Trainer – Bricklaying Competition (LKS SMK)
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              SMKN 3 Boyolangu, Tulungagung · 2022 – 2023
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Mentoring for Provincial and National Level Vocational Skills Competition</li>
              <li>Technical Training in Masonry and Bricklaying Excellence</li>
              <li>Establishing a fast and efficient workflow</li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
          <div>
            <h3 className="font-semibold text-white">
              Staff of Publication and Documentation – Ini Lho ITS! Forda Tulungagung
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Tulungagung, Indonesia · 2023
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Digital Content Creation & Media Documentation </li>
              <li>Public Relations & Information Distribution </li>
              <li>Strategic Branding for Regional Outreach Programs </li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
          <div>
            <h3 className="font-semibold text-white">
              Head of Liaison Officer Division – Dvillage 13th Edition
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Surabaya, Indonesia · 2024
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Division Leadership & Stakeholder Management  </li>
              <li>Strategic Communication & Coordination for National Events  </li>
              <li>Operational Execution & Team Supervision </li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
          <div>
            <h3 className="font-semibold text-white">
              Facade Design and Build Staff – National KJI KBGI Competition
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              ITS Team, Indonesia · 2024
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Structural Facade Design for National Bridge and Building Competition  </li>
              <li>Integration of Architectural Aesthetics with Engineering Stability  </li>
              <li>Material Selection and Construction Execution Planning </li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
          <div>
            <h3 className="font-semibold text-white">
              Internship – PT. Samudra Agung Reality
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Tulungagung, Indonesia · 2024
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>JLS Construction Lot 1A Project Execution  </li>
              <li>Topographic Survey & Field Data Collection  </li>
              <li>Construction Documentation & Progress Monitoring </li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
          <div>
            <h3 className="font-semibold text-white">
              Internship – PT. Globetek Glory Konsultant
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Ponorogo and Madiun, Indonesia · Januari 2025 – Present
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Analysis and calculation of the planting index (IP) DI Asin Bawah </li>
              <li>Technical Planning & Hydraulic Infrastructure Analysis  </li>
              <li>Drafter : Handled AS Build Drawing </li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
        </div>
      </div>
      {/* tentang */}

      {/* project */}
      <div className="proye mt-32 py-10" id="proyek">
        <h1
          className="text-center text-white text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Project
        </h1>

        <p
          className="text-base/loose text-white text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Practical project experience across engineering, surveying, drafting, and supervision.
        </p>

        {/* ✅ FILTER BUTTON */}
        <div
          className="flex justify-center gap-3 mt-6 flex-wrap"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full capitalize transition ${category === cat
                ? "bg-[#0759a6] text-white"
                : "bg-white text-black hover:bg-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ PROJECT GRID */}
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" >
             {listProyek
            .filter((proyek) =>
              category === "all" ? true : proyek.category === category
            )
            .map((proyek) => (
              <ProjectCard key={proyek.id} proyek={proyek} />
            ))}
        </div>

        {/* project */}

        {/* Skills */}
        <div className="mt-48 px-4" id="skills">

          {/* Header (TANPA AOS biar tidak trigger duluan) */}
          <div className="text-center mb-12">
            <h1 className="text-4xl text-white font-bold mb-2" data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1500" data-aos-one="true">
              Skills
            </h1>
            <p className="text-white" data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1500" data-aos-one="true">
              Competencies that support reliable performance in engineering and construction environments.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* TECHNICAL */}
            <div
              className="bg-white/10 p-8 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic" data-aos-one="true"
            >
              <h2 className="text-xl text-white font-semibold mb-6">Technical skills</h2>

              <div className="flex flex-wrap gap-3">
                {skillsData.technical.map((skill, index) => (
                  <span
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium 
                       hover:bg-[#0759a6] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* PROFESSIONAL */}
            <div
              className="bg-white/10 p-8 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic" data-aos-one="true"
            >
              <h2 className="text-xl text-white font-semibold mb-6">Professional skills</h2>

              <div className="flex flex-wrap gap-3">
                {skillsData.professional.map((skill, index) => (
                  <span
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                    data-aos-one="true"
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium 
                       hover:bg-[#0759a6] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
        {/* Skills */}


        {/* KONTAK */}
        <div className="kontak mt-48 px-4" id="kontak">

          {/* Header (TANPA AOS) */}
          <h1 className="text-4xl mb-2 font-bold text-center text-white" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" data-aos-one="true">Contact</h1>
          <p className="text-base/loose text-center text-white mb-10" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" data-aos-one="true">
            Open to collaboration, internships, freelance drafting work, and project-based engineering support.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* LEFT - CONTACT INFO */}
            <div
              className="bg-white/20 p-8 rounded-2xl h-full flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="2200"
              data-aos-easing="ease-out-cubic"
              data-aos-one="true"
            >
              <div>
                <h2 className="text-xl text-white font-semibold mb-6">
                  Contact Information
                </h2>

                <div className="grid grid-cols-[120px_1fr] gap-y-6 gap-x-4 text-base text-white flex-1">

                  <span className="font-semibold">Email</span>
                  <span className="break-all">
                    julianady746@gmail.com
                  </span>

                  <span className="font-semibold">Phone</span>
                  <span className="break-all">
                    089507468578
                  </span>

                  <span className="font-semibold">Location</span>
                  <span className=" break-all">
                    Tulungagung, Indonesia
                  </span>

                  <span className="font-semibold">Instagram</span>
                  <span className="break-all">
                    instagram.com/julianady7819
                  </span>

                </div>
              </div>

              <p className="text-xs text-white mt-6">
                Feel free to reach out anytime.
              </p>
            </div>

            {/* RIGHT - FORM */}
            <form
              action="https://formsubmit.co/julianady746@gmail.com"
              method="POST"
              autoComplete="off"
              className="bg-white/20 p-8 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="2200"
              data-aos-easing="ease-out-cubic"
              data-aos-one="true"
            >

              {/* IMPORTANT SETTINGS */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:5173/" />

              <h2 className="text-xl text-white font-semibold mb-4">Send Message</h2>

              <div className="flex flex-col text-black gap-5">

                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Input Name..."
                    className="border border-zinc-600 bg-white p-2 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Input Email..."
                    className="border border-zinc-600 bg-white p-2 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Input Message..."
                    className="border border-zinc-600 bg-white p-2 rounded-md"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer p-3 rounded-md bg-[#0759a6] hover:bg-[#106cc2] transition"
                >
                  Send Message
                </button>

              </div>
            </form>

          </div>
        </div>
        {/* KONTAK */}
      </div>


    </>

  )

}

export default App
