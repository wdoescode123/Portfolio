import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Database, 
  Briefcase, 
  GraduationCap, 
  Cpu,
  User,
  Download,
  Menu,
  X
} from 'lucide-react';

import { 
  PERSONAL_INFO, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  SKILLS_DATA, 
  REFERENCES_DATA 
} from './constants';
import CircuitBackground from './components/CircuitBackground';
import SkillsChart from './components/SkillsChart';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: any }) => (
    <a 
      href={href} 
      className="flex items-center space-x-2 text-slate-600 hover:text-babyblue-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-babyblue-50"
      onClick={() => setMobileMenuOpen(false)}
    >
      <Icon size={18} />
      <span>{label}</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-babyblue-200 selection:text-babyblue-900">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-mono text-babyblue-600 flex items-center gap-2">
            <Terminal className="text-babyblue-500" />
            <span>WJ<span className="text-slate-400">.dev</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-2">
            <NavLink href="#about" label="About" icon={User} />
            <NavLink href="#experience" label="Experience" icon={Briefcase} />
            <NavLink href="#skills" label="Skills" icon={Cpu} />
            <NavLink href="#education" label="Education" icon={GraduationCap} />
            <NavLink href="#contact" label="Contact" icon={Mail} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
           <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col space-y-2">
              <NavLink href="#about" label="About" icon={User} />
              <NavLink href="#experience" label="Experience" icon={Briefcase} />
              <NavLink href="#skills" label="Skills" icon={Cpu} />
              <NavLink href="#education" label="Education" icon={GraduationCap} />
              <NavLink href="#contact" label="Contact" icon={Mail} />
           </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-babyblue-100 text-babyblue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                Data Science & Software Development
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-babyblue-500 to-babyblue-700">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-babyblue-500 hover:bg-babyblue-600 text-white rounded-lg font-semibold shadow-lg shadow-babyblue-300/50 transition-all flex items-center gap-2 transform hover:-translate-y-1"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:border-babyblue-400 hover:text-babyblue-600 rounded-lg font-semibold shadow-sm transition-all flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Tech Rings */}
                <div className="absolute inset-0 border-2 border-dashed border-babyblue-200 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute -inset-4 border border-babyblue-100 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Profile Image with mask */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-babyblue-50">
                  <img 
                    src="/Portfolio/Will.jpg" 
                    alt="Will Jackson" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Decorative floating icons */}
                <div className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-lg animate-bounce text-babyblue-500 z-20">
                  <Database size={24} />
                </div>
                <div className="absolute bottom-10 -left-10 bg-white p-3 rounded-xl shadow-lg animate-bounce delay-700 text-slate-700 z-20">
                  <Terminal size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white relative">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Briefcase size={200} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-babyblue-100 rounded-lg text-babyblue-600">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {EXPERIENCE_DATA.map((job, index) => (
              <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-babyblue-100 group-hover:bg-babyblue-500 text-babyblue-500 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-current" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{job.role}</h3>
                      <h4 className="text-babyblue-600 font-medium">{job.company}</h4>
                    </div>
                    <time className="text-sm font-mono text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 mt-2 md:mt-0 inline-block">
                      {job.period}
                    </time>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-babyblue-400 rounded-full shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Data Viz Section */}
      <section id="skills" className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
             <div className="p-3 bg-babyblue-100 rounded-lg text-babyblue-600">
              <Cpu size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Expertise & Skills</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-babyblue-100 relative order-2 lg:order-1">
              <div className="absolute top-4 left-4 text-xs font-mono text-babyblue-400">
                DATA_VISUALIZATION.exe
              </div>
              <h3 className="text-center font-bold text-slate-700 mb-4">Technical Proficiency Radar</h3>
              <SkillsChart />
            </div>

            {/* Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
              {SKILLS_DATA.map((category) => (
                <div key={category.category} className="bg-white p-6 rounded-xl border-l-4 border-babyblue-400 shadow-sm hover:translate-x-1 transition-transform">
                  <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
                    {category.category === "Programming" && <Terminal size={18} className="text-babyblue-500"/>}
                    {category.category === "Tools & Automation" && <Database size={18} className="text-babyblue-500"/>}
                    {category.category === "Soft Skills" && <User size={18} className="text-babyblue-500"/>}
                    {category.category === "Languages" && <Briefcase size={18} className="text-babyblue-500"/>}
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-babyblue-50 hover:text-babyblue-700 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & References Grid */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Education Column */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-babyblue-100 rounded-lg text-babyblue-600">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Education</h2>
              </div>
              
              <div className="space-y-6">
                {EDUCATION_DATA.map(edu => (
                  <div key={edu.id} className="border border-slate-200 rounded-xl p-6 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <GraduationCap size={60} />
                     </div>
                     <time className="text-xs font-bold text-babyblue-600 uppercase tracking-wider block mb-2">{edu.period}</time>
                     <h3 className="text-xl font-bold text-slate-800 mb-1">{edu.degree}</h3>
                     <p className="text-slate-600 font-medium">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* References Column */}
            <div>
               <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-babyblue-100 rounded-lg text-babyblue-600">
                  <User size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Reference</h2>
              </div>

              <div className="grid gap-6">
                {REFERENCES_DATA.map(ref => (
                  <div key={ref.id} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-babyblue-200 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{ref.name}</h3>
                        <p className="text-babyblue-600 text-sm font-medium mb-3">{ref.role}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-slate-400" />
                        <span>{ref.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-slate-400" />
                        <a href={`mailto:${ref.email}`} className="hover:text-babyblue-600 underline decoration-dotted">{ref.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
                <Terminal className="text-babyblue-400" />
                <span>WJ.dev</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Passionate about bridging the gap between Data Science and Software Engineering. Available for immediate opportunities.
              </p>
              <a 
                href="/Portfolio/Will_Jackson_CV.pdf" 
                download="Will_Jackson_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-babyblue-600 hover:bg-babyblue-500 text-white rounded-lg font-medium transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="hover:text-babyblue-400 transition-colors">About Me</a></li>
                <li><a href="#experience" className="hover:text-babyblue-400 transition-colors">Experience</a></li>
                <li><a href="#skills" className="hover:text-babyblue-400 transition-colors">Expertise</a></li>
                <li><a href="#contact" className="hover:text-babyblue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-babyblue-400 shrink-0 mt-1" size={20} />
                  <span>{PERSONAL_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-babyblue-400 shrink-0" size={20} />
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PERSONAL_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-babyblue-400 shrink-0" size={20} />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">{PERSONAL_INFO.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="text-babyblue-400 shrink-0" size={20} />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn Profile</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Will Jackson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
