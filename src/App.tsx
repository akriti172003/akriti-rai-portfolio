/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ArrowRight,
  Code2,
  Cpu,
  Layout,
  MessageSquare,
  Terminal,
  Globe,
  Zap,
  Settings,
  Database,
  Award,
  GraduationCap,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const getEmbedUrl = (url: string | null) => {
    if (!url) return "";
    if (url.includes("drive.google.com")) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    return url;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const technicalSkills = [
    { 
      category: "Data & Analytics", 
      items: [
        { name: "Power BI", slug: "powerbi", color: "#F2C811", iconColor: "000000" },
        { name: "SQL", slug: "mysql", color: "#4479A1" },
        { name: "Python (Pandas)", slug: "pandas", color: "#150458", iconColor: "ffffff" },
        { name: "NumPy", slug: "numpy", color: "#013243", iconColor: "ffffff" },
        { name: "Excel (Pivot/Macros)", slug: "microsoftexcel", color: "#217346" }
      ] 
    },
    { 
      category: "Languages", 
      items: [
        { name: "Python", slug: "python", color: "#3776AB" },
        { name: "SQL", slug: "postgresql", color: "#4169E1" },
        { name: "JavaScript (ES6+)", slug: "javascript", color: "#F7DF1E", iconColor: "000000" },
        { name: "C++", slug: "cplusplus", color: "#00599C" }
      ] 
    },
    { 
      category: "Process & Systems", 
      items: [
        { name: "Workflow Automation", slug: "make", color: "#EB34E2" },
        { name: "REST APIs", slug: "postman", color: "#FF6C37" },
        { name: "SDLC & Agile", slug: "jira", color: "#0052CC" },
        { name: "AI Automation", slug: "google", color: "#4285F4" }
      ] 
    },
    { 
      category: "Tools & Platforms", 
      items: [
        { name: "Power BI", slug: "powerbi", color: "#F2C811", iconColor: "000000" },
        { name: "Git", slug: "git", color: "#F05032" },
        { name: "GitHub", slug: "github", color: "#181717" },
        { name: "VS Code", slug: "visualstudiocode", color: "#007ACC" },
        { name: "Postman", slug: "postman", color: "#FF6C37" }
      ] 
    },
    { 
      category: "Core Concepts", 
      items: [
        { name: "DBMS", slug: "postgresql", color: "#336791" },
        { name: "Statistics / A/B Testing", slug: "scipy", color: "#8CAAE6", iconColor: "000000" },
        { name: "Operating Systems", slug: "linux", color: "#FCC624", iconColor: "000000" },
        { name: "Object-Oriented Programming", slug: "devdotto", color: "#6366F1" }
      ] 
    }
  ];

  const projects = [
    {
      title: "Retail Analytics ETL & Business Intelligence",
      desc: "Engineered an end-to-end analytics pipeline processing 1,000+ retail transactions across customers, orders, and products. Automated data extraction, validation, transformation, and loading (ETL) using Python/Pandas, then performed statistical analysis using SciPy to conduct Welch's t-test comparing discount strategies.",
      category: "ETL & Retail Analytics",
      tags: ["Python", "SQL", "MySQL", "Power BI", "Statistics", "Pandas", "SciPy"],
      github: "https://github.com/akriti172003/shopease-retail-analytics-python",
      link: "https://github.com/akriti172003/shopease-retail-analytics-python",
      image: "/src/assets/images/retail_analytics_bi_1789326977557.jpg",
      deliverables: [
        "Built ETL pipeline with data quality validation (7 automated quality checks)",
        "Analyzed revenue and profit across 8+ dimensions (monthly, category, geography, customer segments)",
        "Developed rule-based risk scoring system flagging 208 suspicious transactions (20.8%)",
        "Conducted Welch's t-test comparing 10% vs 20% discount strategies (31.8% lower profit with aggressive discounting)",
        "Created interactive 4-page Power BI dashboard with KPIs, trend analysis, risk metrics, and A/B testing results"
      ],
      businessImpact: "Quantified discount impact on profitability; identified that moderate discounting (10%) outperforms aggressive strategies (20%) by ₹731 average profit per transaction."
    },
    {
      title: "Vendor Performance Analysis",
      desc: "Analyzed 30,000 vendor procurement transactions to identify high-risk suppliers and regional performance gaps. Cleaned raw data using SQL, performed multi-dimensional analysis with Python (Pandas, Matplotlib, Seaborn), and built an interactive Power BI dashboard for stakeholder decision-making.",
      category: "Procurement & Risk Analytics",
      tags: ["SQL", "Python", "Power BI", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/akriti172003/Vendor_Performance_Analysis",
      link: "https://github.com/akriti172003/Vendor_Performance_Analysis",
      image: "/src/assets/images/vendor_performance_bi_1789326991970.jpg",
      deliverables: [
        "Data validation: Identified and excluded 45 invalid records (zero-value/zero-quantity) from 30,000 transactions",
        "Vendor risk assessment: Ranked 100+ vendors by delivery performance and quality metrics",
        "Regional analysis: Identified underperforming regions and procurement cost-saving opportunities",
        "Built 4-page Power BI dashboard with vendor KPIs, risk matrix, delivery trends, quality analysis, and spend patterns",
        "Provided actionable recommendations for vendor optimization and contract review"
      ],
      businessImpact: "Enabled data-driven vendor selection; high-risk vendors quantified for contract review and cost reduction."
    },
    {
      title: "E-Commerce Sales Dashboard",
      desc: "Built an interactive Power BI dashboard from raw e-commerce transaction data (Flipkart/Amazon-style). Implemented data modeling, DAX formulas, and AI-assisted insights to enable real-time business exploration.",
      category: "Data Modeling & BI",
      tags: ["Power BI", "DAX", "Data Modeling", "AI Insights", "Copilot"],
      github: "https://github.com/akriti172003/pbi-dashboard",
      link: "https://github.com/akriti172003/pbi-dashboard",
      image: "/src/assets/images/ecommerce_sales_bi_1789327003495.jpg",
      deliverables: [
        "Data modeling: Connected multiple datasets (orders, products, customers) with proper relational schema integrity",
        "Interactive visualizations: Maps, donut charts, bar charts, and slicers for dynamic executive filtering",
        "AI-powered insights: Used Power BI Copilot and Q&A to auto-generate written summaries explaining trends and anomalies",
        "Executive dashboard: Real-time KPIs with drill-down capability by region, product, and customer segment"
      ],
      businessImpact: "Enabled non-technical stakeholders to explore data independently; AI-generated insights automated manual reporting."
    },
    {
      title: "Ally – AI Voice Receptionist",
      desc: "Built an AI-powered voice receptionist named Ally for SmileCare Dental Clinic using Vapi, OpenAI, Deepgram, and ElevenLabs. Ally engages in natural, human-like voice conversations, assists with appointment bookings, provides doctor availability, answers clinical FAQs, handles emergency redirections, and integrates with MCP workflows. Handled 9+ real-world process scenarios with built-in safeguards for sensitive information, similar to exception-handling in operational workflows.",
      category: "Voice AI & Agentic Systems",
      tags: ["Vapi", "OpenAI GPT", "Deepgram", "ElevenLabs", "Prompt Engineering", "MCP"],
      link: "https://drive.google.com/file/d/1z7M9J9U4jrD4Npq13JbPyuAvYgRzecRB/view?usp=drive_link",
      github: "https://github.com/akriti172003",
      image: "/src/assets/images/ally_dashboard_preview_1781203717504.jpg",
      isVideoDemo: true,
      deliverables: [
        "Full voice AI pipeline integrating Vapi telephony, OpenAI LLM reasoning, Deepgram STT, and ElevenLabs TTS",
        "Configured 9+ clinical appointment scenarios with real-time slot checking and emergency routing",
        "Integrated Model Context Protocol (MCP) workflows with data privacy guardrails for patient records"
      ],
      businessImpact: "Eliminates receptionist call backlog and enables 24/7 automated clinical booking with zero human triage."
    },
    {
      title: "AI Customer Support Automation",
      desc: "Built a rules-based and LLM-assisted workflow automation system that classifies and routes support requests accurately, reducing manual triage to zero. Combines Google Gemini API, Gmail API, and Make workflows to parse customer inquiries, assess urgency, and trigger immediate operational workflows.",
      category: "Workflow Automation & AI",
      tags: ["Gemini API", "Gmail API", "Make", "REST APIs", "Automation"],
      github: "https://github.com/akriti172003",
      link: "https://github.com/akriti172003",
      image: "https://lh3.googleusercontent.com/d/1QyLi0UfMJUj2hlAWTC7tmDzQHrgKyfde",
      deliverables: [
        "Automated email ingestion and classification pipeline using Gmail API and Gemini API",
        "Rule-based routing engine directing tickets by urgency, issue type, and department",
        "Make scenario orchestrator dispatching alerts and synchronizing response tracking"
      ],
      businessImpact: "Reduced incoming request triage time from hours to instantaneous routing with 100% classification accuracy."
    }
  ];

  const achievements = [
    { 
      title: "SRM BUILDS 6.0 Finalist", 
      detail: "Recognized in the 'Best All-Girls Team' category at a national level hackathon.",
      link: "https://www.linkedin.com/posts/s-d-keerthiga-devi-5262bb27b_srmbuilds6-hackathonexperience-innovation-ugcPost-7302231041082081280-Q1PQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERreLIByWAja-RWXUAJ_hsF6BFNYWtMNl4"
    },
    { 
      title: "NPTEL: Java Programming", 
      detail: "Certified with a score of 70% in Java Programming course.",
      link: "https://drive.google.com/file/d/10ly3qBCb2l_2M1NG77bW1G_X4rok5Wqy/view?usp=sharing"
    },
    { 
      title: "NPTEL: Cloud Computing", 
      detail: "Certified with a score of 68% in Cloud Computing course.",
      link: "https://www.linkedin.com/posts/linkdinakriti001_nptel-cloudcomputing-aktu-share-7268688205611188225-Psew?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERreLIByWAja-RWXUAJ_hsF6BFNYWtMNl4"
    },
    { 
      title: "Be10X Workshop", 
      detail: "AI workshop focused on Prompt Engineering.",
      link: "https://drive.google.com/file/d/1NJdFPxCyINlr0SJcbSGY7DitjZ6pvJ4l/view?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Navigation */}
      <nav className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-brand-olive/10 pb-8">
          <div className="hidden md:flex gap-8 items-center justify-start flex-1 overflow-x-auto no-scrollbar">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.href} href={link.href} className="text-[9px] uppercase font-bold tracking-[0.15em] hover:text-brand-olive transition-colors whitespace-nowrap">{link.name}</a>
            ))}
          </div>

          <div className="flex-none px-8 group">
            <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark cursor-pointer group-hover:italic transition-all">Akriti Rai</h1>
          </div>

          <div className="hidden md:flex gap-8 items-center justify-end flex-1 overflow-x-auto no-scrollbar">
             {navLinks.slice(3).map((link) => (
              <a key={link.href} href={link.href} className="text-[9px] uppercase font-bold tracking-[0.15em] hover:text-brand-olive transition-colors whitespace-nowrap">{link.name}</a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Editorial Hero */}
        <section id="home" className="pt-16 pb-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1 flex justify-center">
               <div className="w-[300px] h-[400px] md:w-[450px] md:h-[550px] oval-mask overflow-hidden border border-brand-olive/20 shadow-2xl relative bg-brand-olive/5 group">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1X3rqw59Rz-hHryjKLHC1f2LcocJl3eT6" 
                    alt="Akriti Rai"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-olive/5 mix-blend-multiply" />
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark">
                  Analytics Engineer & <br />
                  <span className="italic font-normal">Data Storyteller</span>
                </h2>
                <p className="text-brand-dark/60 text-sm md:text-base max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
                  ETL pipelines, statistical testing, and dashboards that stakeholders actually use.
                </p>
              </div>
              
              <div className="pt-4">
                <a href="#contact" className="btn-editorial inline-block">
                  Work With Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Marquee - After Hero */}
        <div className="bg-brand-dark py-3 px-4 relative overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap justify-center">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-brand-beige">
                <span>ETL Pipelines & Validation</span>
                <span className="opacity-50">✦</span>
                <span>Statistical Hypothesis Testing</span>
                <span className="opacity-50">✦</span>
                <span>Stakeholder BI Dashboards</span>
                <span className="opacity-50">✦</span>
                <span>Data Storytelling</span>
                <span className="opacity-50">✦</span>
              </div>
            ))}
          </div>
        </div>
        {/* Technical Skills Section */}
        <section id="skills" className="py-32 px-6 border-y border-brand-olive/10 bg-brand-cream">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24 pb-12 border-b border-brand-olive/10">
                 <div className="space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-dark/40">Competencies</span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold italic">Technical Skills</h2>
                 </div>
                 <p className="max-w-xs text-[11px] font-medium uppercase tracking-[0.1em] text-brand-dark/50 leading-relaxed italic">
                    A strong analytical foundation in SQL, Python, Excel, and Power BI paired with automated pipelines.
                 </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-20">
                 {technicalSkills.map((skill, i) => {
                   let Icon = Code2;
                   if (skill.category.includes("Language")) Icon = Terminal;
                   if (skill.category.includes("Analytics") || skill.category.includes("Data")) Icon = Database;
                   if (skill.category.includes("Process") || skill.category.includes("Systems") || skill.category.includes("AI")) Icon = Zap;
                   if (skill.category.includes("Tool")) Icon = Settings;
                   if (skill.category.includes("Concept")) Icon = Cpu;

                   return (
                     <div key={i} className="space-y-8 group">
                        <div className="flex justify-between items-start border-b border-brand-olive/20 pb-4 group-hover:border-brand-olive transition-colors">
                           <div className="flex items-center gap-3">
                              <Icon size={16} className="text-brand-olive" />
                              <span className="text-[10px] font-bold text-brand-olive uppercase tracking-[0.2em]">{skill.category}</span>
                           </div>
                           <span className="font-serif italic text-brand-olive/30 text-xl">0{i + 1}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-4">
                           {skill.items.map((item, j) => (
                             <div key={j} className="flex flex-col items-center gap-2 group/item">
                                <div 
                                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 group-hover/item:scale-110 shadow-md"
                                  style={{ backgroundColor: item.color }}
                                >
                                   <img 
                                     src={`https://cdn.simpleicons.org/${item.slug}/${item.iconColor || 'ffffff'}`} 
                                     alt={item.name}
                                     className="w-full h-full object-contain"
                                     referrerPolicy="no-referrer"
                                   />
                                </div>
                                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-brand-dark/60 text-center max-w-[60px] leading-tight">
                                   {item.name}
                                </span>
                             </div>
                           ))}
                        </div>
                     </div>
                   );
                 })}
              </div>
           </div>
        </section>

        {/* About Section - Professional Bio & Analytics Architecture */}
        <section id="about" className="overflow-hidden border-b border-brand-olive/10 bg-brand-olive/5">
           <div className="max-w-7xl mx-auto py-24 px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                 <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-olive">Professional Bio</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
                       Hey, I'm Akriti!
                    </h2>
                 </div>
                 <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg font-serif italic border-l-2 border-brand-olive pl-4">
                    "I specialize in the complete analytics lifecycle: data extraction and validation, exploratory analysis, statistical hypothesis testing, and interactive dashboard development."
                 </p>
                 <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base">
                    I've built production-grade pipelines processing 30,000+ transactions, identified high-risk patterns using rule-based scoring, and created dashboards that enable non-technical stakeholders to explore data independently.
                 </p>
                 <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base">
                    Graduated with a B.Tech in Computer Science from AKTU, drawing core inspiration from the timeless city of Varanasi. Just as the ancient architecture of my hometown stands as a testament to structural permanence and thoughtful design, I approach data systems with precision, mathematical rigor, and clear communication—bridging the gap between raw data engineering and executive decision-making.
                 </p>
              </div>

              <div className="lg:col-span-5">
                 <div className="bg-brand-cream border border-brand-olive/20 rounded-2xl p-8 space-y-6 shadow-xl shadow-brand-olive/5">
                    <div className="border-b border-brand-olive/15 pb-4">
                       <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-olive block">Competency Blueprint</span>
                       <h3 className="font-serif text-2xl font-bold text-brand-dark">Analytics Lifecycle</h3>
                    </div>

                    <div className="space-y-4 text-xs">
                       <div className="space-y-1">
                          <span className="font-bold text-brand-dark tracking-wide uppercase text-[10px] block">01 / Pipeline & Validation</span>
                          <p className="text-brand-dark/70 font-medium">Automated ETL pipelines, data schema cleansing, and 7 automated quality checks across 30k+ records.</p>
                       </div>

                       <div className="space-y-1">
                          <span className="font-bold text-brand-dark tracking-wide uppercase text-[10px] block">02 / Statistical Modeling</span>
                          <p className="text-brand-dark/70 font-medium">Welch's t-test hypothesis testing, A/B discount policy evaluation, and rule-based risk detection scoring.</p>
                       </div>

                       <div className="space-y-1">
                          <span className="font-bold text-brand-dark tracking-wide uppercase text-[10px] block">03 / Business Intelligence</span>
                          <p className="text-brand-dark/70 font-medium">Multi-page Power BI executive dashboards, custom DAX measures, and automated dynamic reporting.</p>
                       </div>
                    </div>

                    <div className="pt-4 border-t border-brand-olive/15 space-y-2">
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-olive block">Toolkit</span>
                       <div className="flex flex-wrap gap-1.5">
                          {["Python (Pandas, NumPy, SciPy)", "SQL/MySQL", "Power BI", "DAX", "Excel (Pivot/Macros)", "A/B Testing", "Anomaly Detection"].map((tool, idx) => (
                             <span key={idx} className="text-[10px] font-semibold px-2.5 py-1 bg-brand-olive/10 border border-brand-olive/15 rounded-full text-brand-dark">
                                {tool}
                             </span>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Portfolio / Projects Grid */}
        <section id="projects" className="py-32 px-6">
           <div className="max-w-7xl mx-auto space-y-20">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 pb-12 border-b border-brand-olive/10">
                 <div className="space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-dark/40">Portfolio</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold italic">Featured Projects</h2>
                 </div>
                 <div className="flex gap-4 pb-2">
                    <a href="https://www.linkedin.com/in/linkdinakriti001/" className="w-10 h-10 border border-brand-olive/20 rounded-full flex items-center justify-center hover:bg-brand-olive hover:text-brand-beige transition-all"><Linkedin size={16} /></a>
                    <a href="https://github.com/akriti172003" className="w-10 h-10 border border-brand-olive/20 rounded-full flex items-center justify-center hover:bg-brand-olive hover:text-brand-beige transition-all"><Github size={16} /></a>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                 {projects.map((project, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="group flex flex-col h-full bg-white/40 backdrop-blur-md border border-brand-olive/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-brand-olive/5 transition-all duration-500"
                   >
                      {/* Project Image */}
                      <div className="relative aspect-video overflow-hidden">
                        {project.isVideoDemo ? (
                          <button 
                            onClick={() => setActiveVideoUrl(project.link)}
                            className="block w-full h-full text-left relative focus:outline-none cursor-pointer"
                          >
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-brand-dark/15 group-hover:bg-brand-dark/35 transition-colors duration-500 flex items-center justify-center">
                              <div className="w-14 h-14 bg-white/90 backdrop-blur-md text-brand-olive rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-olive group-hover:text-brand-beige transition-all duration-300">
                                <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </button>
                        ) : (
                          <a 
                            href={project.link || project.github || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                          >
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500" />
                          </a>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 bg-brand-beige/90 backdrop-blur-md rounded-full shadow-sm text-brand-olive">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-1 space-y-6">
                        <div className="space-y-3">
                          <h3 className="font-serif text-3xl font-bold text-brand-dark group-hover:italic transition-all">
                            {project.title}
                          </h3>
                          <p className="text-sm text-brand-dark/60 leading-relaxed font-medium">
                            {project.desc}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                           {project.tags.map((tag, j) => (
                             <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-brand-olive/5 border border-brand-olive/10 text-brand-olive rounded-md">
                               {tag}
                             </span>
                           ))}
                        </div>

                        {/* Deliverables */}
                        {project.deliverables && (
                          <div className="pt-2 space-y-2 border-t border-brand-olive/10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-olive block">
                              Key Deliverables:
                            </span>
                            <ul className="space-y-1.5 text-xs text-brand-dark/75 leading-relaxed">
                              {project.deliverables.map((d, k) => (
                                <li key={k} className="flex items-start gap-2">
                                  <span className="text-brand-olive font-bold mt-0.5">•</span>
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Business Impact */}
                        {project.businessImpact && (
                          <div className="p-3.5 bg-brand-olive/5 border border-brand-olive/15 rounded-xl text-xs text-brand-dark/80 font-medium">
                            <span className="font-bold text-brand-olive uppercase tracking-wider text-[10px] block mb-1">
                              Business Impact:
                            </span>
                            {project.businessImpact}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="pt-4 mt-auto flex items-center gap-4 flex-wrap">
                          {project.isVideoDemo ? (
                            <button 
                              onClick={() => setActiveVideoUrl(project.link || null)}
                              className="flex items-center gap-2 px-5 py-2.5 bg-brand-olive text-brand-beige rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors shadow-lg shadow-brand-olive/20 group/btn cursor-pointer"
                            >
                              Watch Demo
                              <svg className="w-4 h-4 fill-current group-hover/btn:translate-x-0.5 transition-transform" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          ) : project.link && project.link !== project.github ? (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-brand-olive text-brand-beige rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors shadow-lg shadow-brand-olive/20 group/btn"
                            >
                              Live Demo
                              <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          ) : null}

                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={cn(
                                "flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors group/btn",
                                !project.isVideoDemo && (!project.link || project.link === project.github)
                                  ? "bg-brand-olive text-brand-beige hover:bg-brand-dark shadow-lg shadow-brand-olive/20"
                                  : "border border-brand-olive/20 text-brand-olive hover:bg-brand-olive/5"
                              )}
                            >
                              <Github size={14} />
                              GitHub Repository
                            </a>
                          )}
                        </div>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Resume / Experience */}
        <section id="experience" className="py-32 px-6 bg-[#FDFBF7]">
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
              <div className="space-y-16">
                 <h2 className="font-serif text-3xl font-bold italic border-b border-brand-olive/10 pb-8 uppercase tracking-widest">Experience</h2>
                 <div className="space-y-12">
                    <div className="space-y-5 relative pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-brand-olive/20">
                       <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-brand-olive" />
                       <div className="space-y-1">
                          <span className="text-[10px] font-bold text-brand-olive uppercase tracking-[0.3em]">Aug 2025</span>
                          <a href="https://drive.google.com/file/d/1JXOtY3AZQFxDOtdmsKqEojT6quAIvsWP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block space-y-1 group/cert hover:opacity-80 transition-opacity">
                             <h4 className="text-xl font-bold flex items-center gap-2">
                                AI & ML Virtual Experience Intern — IBM Developer Skills Network
                                <ExternalLink size={14} className="text-brand-olive group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform" />
                             </h4>
                          </a>
                          <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wider">Project-Based Experiential Learning (PBEL Program)</p>
                       </div>
                       
                       <p className="text-sm text-brand-dark/80 leading-relaxed">
                          Specialized in the complete analytics lifecycle: data extraction and validation, exploratory analysis, statistical hypothesis testing, and interactive dashboard development. Built structured data preprocessing and model-training workflows using Python in enterprise cloud environments.
                       </p>
                       
                       <p className="text-sm text-brand-dark/70 leading-relaxed">
                          Built production-grade pipelines processing 30,000+ transactions, identified high-risk patterns using rule-based scoring, and created dashboards that enable non-technical stakeholders to explore data independently.
                       </p>

                       <div className="pt-2 space-y-2 text-xs text-brand-dark/70 bg-brand-olive/5 p-4 rounded-xl border border-brand-olive/10">
                          <div>
                             <strong className="text-brand-olive font-bold uppercase tracking-wider text-[10px] block mb-0.5">My Toolkit:</strong>
                             <span className="font-medium text-brand-dark/80">Python (Pandas, NumPy, SciPy) | SQL/MySQL | Power BI | DAX | Excel</span>
                          </div>
                          <div>
                             <strong className="text-brand-olive font-bold uppercase tracking-wider text-[10px] block mb-0.5">Statistical Analysis & Validation:</strong>
                             <span className="font-medium text-brand-dark/80">A/B testing, t-tests, anomaly detection, structured preprocessing</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-16">
                 <h2 className="font-serif text-3xl font-bold italic border-b border-brand-olive/10 pb-8 uppercase tracking-widest">Education</h2>
                 <div className="space-y-12">
                    {[
                      { school: "Dr. A.P.J Abdul Kalam Technical University", degree: "B.Tech in Computer Science", score: "7.8 CGPA", date: "Sep 2022 – June 2026", loc: "Greater Noida" },
                      { school: "Sant Atulanand Convent School", degree: "Class XII (CBSE)", score: "90.4%", date: "2021", loc: "Varanasi" },
                      { school: "Sant Atulanand Convent School", degree: "Class X (CBSE)", score: "88%", date: "2019", loc: "Varanasi" }
                    ].map((edu, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-12 h-12 flex-shrink-0 border border-brand-olive/20 flex items-center justify-center font-serif text-lg group-hover:bg-brand-olive group-hover:text-brand-beige transition-all italic">
                            {i + 1}
                         </div>
                         <div className="space-y-2">
                            <span className="text-[10px] font-bold text-brand-olive uppercase tracking-widest">{edu.date} — {edu.loc}</span>
                            <h4 className="text-xl font-bold">{edu.degree}</h4>
                            <p className="text-xs text-brand-dark/40 uppercase font-bold tracking-tighter">{edu.school}</p>
                            <div className="pt-2 text-xs font-bold italic">{edu.score} Accomplishment</div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Certifications and Achievements Section */}
        <section id="certifications" className="py-32 px-6 bg-brand-dark text-brand-beige">
           <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-brand-beige/10">
                 <div className="lg:pr-16 pb-16 lg:pb-0 space-y-8">
                    <span className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-40">Trophies</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold italic leading-tight">Certifications <br/>& Accomplishments</h2>
                    <p className="text-brand-beige/40 text-[11px] font-medium leading-relaxed italic max-w-[200px]">
                       Validation of my expertise through academic excellence and practical field tests.
                    </p>
                 </div>

                 <div className="lg:col-span-2 lg:pl-16 space-y-16">
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                       {achievements.map((ach, i) => (
                         <div key={i} className="space-y-3 group cursor-default">
                            <div className="flex items-center gap-4 text-brand-olive">
                               <Award size={18} className="transition-transform group-hover:rotate-12" />
                               <span className="text-[9px] uppercase font-bold tracking-[0.3em]">Honor / Award</span>
                            </div>
                            {ach.link ? (
                               <a href={ach.link} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                                 <h4 className="text-lg font-bold text-brand-beige group-hover:italic transition-all flex items-center gap-2">
                                   {ach.title}
                                   <ExternalLink size={12} className="opacity-40" />
                                 </h4>
                               </a>
                            ) : (
                               <h4 className="text-lg font-bold text-brand-beige group-hover:italic transition-all">{ach.title}</h4>
                            )}
                            <p className="text-[10px] text-brand-beige/40 italic leading-relaxed">{ach.detail}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact Finale */}
        <section id="contact" className="py-40 px-6 text-center bg-brand-cream relative overflow-hidden">
           {/* Flourish Decorative Shape */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-olive/5 rounded-full blur-[120px] -z-10" />
           
           <div className="max-w-3xl mx-auto space-y-12">
              <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-brand-dark/30 block">Get in Touch</span>
              <h2 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
                 Let's create something <br />
                 <span className="italic font-normal text-brand-olive underline decoration-1 underline-offset-8">extraordinary.</span>
              </h2>
              <p className="text-brand-dark/50 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                 Based in the historic city of Varanasi, I'm available for remote roles and technical collaborations worldwide.
              </p>
              
              <div className="pt-8">
                 <a href="mailto:akritirai432@gmail.com" className="btn-editorial inline-block">
                    Send An Inquiry
                 </a>
              </div>
           </div>
        </section>
      </main>

      {/* Editorial Footer */}
      <footer className="py-24 px-6 border-t border-brand-olive/10 bg-brand-cream">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
             <div className="col-span-2 space-y-10">
                <h2 className="font-serif italic text-5xl text-brand-dark">Akriti Rai</h2>
                <div className="flex gap-6">
                   <a href="https://www.linkedin.com/in/linkdinakriti001/" className="text-brand-dark/40 hover:text-brand-olive transition-colors underline text-[10px] font-bold uppercase tracking-widest">LinkedIn</a>
                   <a href="https://github.com/akriti172003" className="text-brand-dark/40 hover:text-brand-olive transition-colors underline text-[10px] font-bold uppercase tracking-widest">GitHub</a>
                   <a href="mailto:akritirai432@gmail.com" className="text-brand-dark/40 hover:text-brand-olive transition-colors underline text-[10px] font-bold uppercase tracking-widest">Email</a>
                </div>
             </div>

             <div className="space-y-8">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-olive/40 italic">Navigation</h4>
                <div className="flex flex-col gap-4 text-brand-dark/60 text-[11px] font-bold uppercase tracking-widest">
                   {navLinks.map((link) => (
                      <a key={link.href} href={link.href} className="hover:text-brand-olive transition-colors">{link.name}</a>
                   ))}
                </div>
             </div>

             <div className="space-y-8">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-olive/40 italic">Varanasi, India</h4>
                <p className="text-brand-dark/60 text-[11px] font-bold uppercase tracking-widest leading-loose">
                   Available for remote <br /> collaborations worldwide.
                </p>
             </div>
          </div>

          <div className="pt-12 border-t border-brand-olive/10 flex flex-col md:flex-row justify-between items-center gap-8 group">
             <div className="text-[9px] uppercase font-bold tracking-[0.3em] text-brand-dark/30 italic">© 2026 Akriti Rai — Professional Portfolio</div>
             <div className="text-[9px] uppercase font-bold tracking-[0.3em] text-brand-dark/30">Built with precision in Varanasi</div>
          </div>
        </div>
      </footer>

      {/* Interactive Lightbox Video Player Modal for Projects */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md">
          {/* Clicking anywhere outside the video modal closes it */}
          <button 
            type="button"
            onClick={() => setActiveVideoUrl(null)} 
            className="absolute inset-0 w-full h-full cursor-default bg-transparent text-transparent border-none outline-none"
            aria-label="Close overlay"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-[#111111] border border-brand-beige/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] max-w-4xl w-full aspect-video z-10"
          >
            {/* Elegant Floating Close Button */}
            <div className="absolute top-4 right-4 z-20">
              <button 
                type="button"
                onClick={() => setActiveVideoUrl(null)}
                className="w-10 h-10 bg-black/40 hover:bg-black/80 backdrop-blur-md text-brand-beige rounded-full flex items-center justify-center transition-all duration-300 border border-brand-beige/10 focus:outline-none cursor-pointer"
                aria-label="Close video player"
              >
                <X size={16} />
              </button>
            </div>
            {/* Embedded Iframe Player */}
            <iframe 
              src={getEmbedUrl(activeVideoUrl)} 
              className="w-full h-full border-none"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Demo Video Preview Player"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
