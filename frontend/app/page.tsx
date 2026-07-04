"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  FileText,
  Heart,
  Lock,
  MessageSquare,
  Pill,
  Shield,
  Stethoscope,
  UploadCloud,
  CheckCircle2,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Simple drag-and-drop state handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    alert("In this demo, report files are simulated. Your file is protected and analyzed locally!");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
              <Activity className="w-5 h-5 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              CarePilot<span className="text-blue-600 font-extrabold">.AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#security" className="hover:text-blue-600 transition-colors">Privacy & Security</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#chat" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              Sign In
            </a>
            <a
              href="#upload"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md hover:shadow-lg shadow-blue-100"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-6 space-y-4">
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-700">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#security"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                Privacy & Security
              </a>
            </nav>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="#chat"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Sign In
              </a>
              <a
                href="#upload"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:py-24 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse duration-10000"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-100/20 rounded-full blur-3xl -z-10 animate-pulse duration-7000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text & CTA */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                HIPAA-Compliant Medical AI
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Your AI <span className="text-blue-600">Healthcare</span> Assistant
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transform complex medical jargon into clear, actionable health insights. Upload reports, chat with our secure AI symptom checker, and manage your health with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#upload"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-200 hover:shadow-xl hover:translate-y-[-1px] transition-all"
                >
                  <UploadCloud className="w-5 h-5" />
                  Upload Medical Report
                </a>
                <a
                  href="#chat"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold shadow-sm hover:shadow-md hover:translate-y-[-1px] transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Start AI Chat
                </a>
              </div>

              {/* Trust markers */}
              <div className="pt-4 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left border-t border-slate-200/60">
                <div>
                  <div className="text-xl font-bold text-slate-900">99.2%</div>
                  <div className="text-xs text-slate-500 font-medium">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">256-bit</div>
                  <div className="text-xs text-slate-500 font-medium">Data Encryption</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">Instant</div>
                  <div className="text-xs text-slate-500 font-medium">Report Analysis</div>
                </div>
              </div>
            </div>

            {/* Interactive Preview Container */}
            <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">report_analysis_034.pdf</h4>
                      <p className="text-xs text-slate-400">Blood Panel & Chemistry</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-semibold">
                    Complete
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 bg-blue-50/50 border border-blue-100/50 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-800">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                      CarePilot AI Key Insights:
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Your **Cholesterol levels** are slightly elevated (220 mg/dL).</li>
                      <li>**Vitamin D** is within the optimal range of 42 ng/mL.</li>
                      <li>**Hydration metrics** are excellent. Keep up the high fluid intake.</li>
                    </ul>
                  </div>

                  {/* AI Chat preview bubble */}
                  <div className="flex items-start gap-2 text-xs">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">C</div>
                    <div className="bg-slate-100 p-2.5 rounded-2xl rounded-tl-none text-slate-700 max-w-[85%]">
                      "I notice elevated LDL. Are there dietary recommendations to help lower it?"
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs justify-end">
                    <div className="bg-blue-600 text-white p-2.5 rounded-2xl rounded-tr-none max-w-[85%] space-y-1">
                      <p>Absolutely! Prioritize soluble fiber (oats, beans, apples) and healthy fats like avocados. Avoid trans fats.</p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-slate-600 font-semibold font-sans">AI</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-500" />
                    HIPAA Secure Connection
                  </div>
                  <span>Analyzed 2m ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              AI-Powered Care, Tailored To You
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              CarePilot AI brings clinical-grade medical document mapping and interactive health guidance right to your fingertips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-200/60 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Medical Report Analysis</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Upload blood tests, MRI reports, or doctors' notes. Our AI analyzes data, highlights key values, and defines medical jargon in layperson terms.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200/50 mt-6 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 cursor-pointer">
                Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-200/60 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex p-3 bg-teal-50 text-teal-600 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">AI Symptom Checker</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Experiencing unusual symptoms? Have an interactive, private chat with our virtual nurse assistant to understand possible causes and triaging severity levels.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200/50 mt-6 flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700 cursor-pointer">
                Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-200/60 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Pill className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Medicine Information</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Check medication safety profiles, common side effects, dosage guides, and check for negative drug-drug interactions before taking new prescriptions.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200/50 mt-6 flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 cursor-pointer">
                Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50/50 border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three Simple Steps to Health Literacy
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Empowering your wellness journey with professional AI tracking should be seamless. Here's how to begin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
            {/* Horizontal Line for Desktop (Connected feel) */}
            <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-[2px] bg-blue-100 -z-10"></div>

            {/* Step 1 */}
            <div className="text-center space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-blue-200 relative">
                1
                <span className="absolute -bottom-1 w-3 h-3 bg-blue-600 rotate-45 rounded-sm"></span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 pt-2">Upload or Chat</h3>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                Drag-and-drop your medical reports securely, or simply write down your symptoms in the friendly AI chat interface.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-500 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-teal-100 relative">
                2
                <span className="absolute -bottom-1 w-3 h-3 bg-teal-500 rotate-45 rounded-sm"></span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 pt-2">AI Analyzes Data</h3>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                Our advanced clinical language models parse and evaluate details, referencing secure health databases instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-indigo-100 relative">
                3
                <span className="absolute -bottom-1 w-3 h-3 bg-indigo-600 rotate-45 rounded-sm"></span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 pt-2">Get Clear Insights</h3>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                Receive interactive summaries, symptom triage scores, and personalized checklists to bring to your next doctor checkup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Interactive Upload/Chat Section */}
      <section id="security" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Upload Widget Area */}
            <div id="upload" className="space-y-6">
              <div className="text-left space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Try CarePilot.AI Now</h3>
                <p className="text-sm text-slate-500">
                  Select a test medical report file or start describing symptoms to preview our tools.
                </p>
              </div>

              {/* Drag and Drop Zone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
                  isDragging
                    ? "border-blue-600 bg-blue-50/70"
                    : "border-slate-300 hover:border-blue-500 bg-slate-50/50 hover:bg-white"
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-800">
                      Drag and drop medical report here
                    </span>
                    <p className="text-xs text-slate-400 mt-1">
                      Supports PDF, PNG, JPG (Max 15MB)
                    </p>
                  </div>
                  <div className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    Browse Files
                  </div>
                </div>
              </div>

              {/* Simulated chat widget trigger */}
              <div id="chat" className="p-5 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">CarePilot Symptom Triage</h5>
                    <p className="text-[10px] text-slate-400">Describe what you are feeling to our virtual nurse.</p>
                  </div>
                </div>
                <button
                  onClick={() => alert("Launching virtual chat interface...")}
                  className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
                >
                  Start Chat
                </button>
              </div>
            </div>

            {/* Security Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  Industry Standard Protection
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Your Medical Privacy Is Our Absolute Priority
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  CarePilot AI operates under strict security protocols to safeguard your medical history. We believe health data is human dignity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">HIPAA Compliant Standard</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Our system aligns with HIPAA security procedures, ensuring patient details are fully encrypted and confidential.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Zero-Trace Data Policies</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Your documents are scanned, analyzed, and are not stored permanently or used for external machine learning models without direct instruction.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Clinically Cross-Referenced</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Our intelligence pathways verify outcomes against verified medical publications to protect user wellness guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Banner */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/30 rounded-full blur-2xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Take Control of Your Health Literacy Today
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of patients who are navigating health diagnostics with absolute clarity. It's safe, secure, and entirely free to try.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#upload"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all"
            >
              Get Started with Analysis
            </a>
            <a
              href="#chat"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-700 text-white hover:bg-blue-800 font-semibold rounded-xl transition-all border border-blue-500"
            >
              Consult Symptom Checker
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo/Brand */}
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white">
                  CarePilot<span className="text-blue-500">.AI</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interactive, modern artificial intelligence to map, break down, and simplify health diagnostics and prescription queries securely.
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h5 className="text-sm font-bold text-white mb-4">Product</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Report Analyser</a></li>
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Symptom Checker</a></li>
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Medicine Profiles</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white mb-4">Security</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#security" className="hover:text-blue-400 transition-colors">HIPAA Compliance</a></li>
                <li><a href="#security" className="hover:text-blue-400 transition-colors">Data Encryption</a></li>
                <li><a href="#security" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white mb-4">Disclaimer</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Medical Disclosure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="pt-8 border-t border-slate-800 text-[10px] text-slate-500 leading-relaxed text-center md:text-left space-y-4">
            <p>
              **IMPORTANT MEDICAL DISCLAIMER**: CarePilot AI provides informational summaries, analytical translation of medical terms, and symptom triage for general guidance. All output, chat interactions, and analytical reports generated by CarePilot AI do NOT constitute official medical advice, diagnosis, treatment plans, or professional clinical guidelines. CarePilot AI is designed to support and facilitate patient-doctor communication, not to replace it. Always seek the advice of your qualified primary physician or authorized medical practitioner with any questions regarding health conditions or medicine prescriptions. Never delay or disregard professional medical advice because of information presented on this platform. In the event of a medical emergency, call emergency services immediately.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4 pt-4">
              <span>© {new Date().getFullYear()} CarePilot AI. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
