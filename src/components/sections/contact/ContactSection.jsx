import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import SectionHeading from '../../common/SectionHeading';
import Reveal from '../../common/Reveal';
import { profileData } from '../../../data/portfolioData';

const ContactSection = () => {
  const profile = profileData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="py-16 md:py-24 px-2 sm:px-4 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <SectionHeading
          kicker="Contact"
          title="Get in Touch"
          description="Let's bridge the gap and create something extraordinary."
        />

        <Reveal>
        <div className="grid lg:grid-cols-12 gap-12 relative">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 rounded-4xl p-10 text-white relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>

              <div className="space-y-12 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black tracking-tight">Contact Information</h3>
                  <p className="text-slate-400 font-bold">Say hello via these channels.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500 transition-colors">
                      <MdEmail className="text-2xl text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email me at</p>
                      <p className="text-lg font-bold">{profile.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500 transition-colors">
                      <MdPhone className="text-2xl text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Call me at</p>
                      <p className="text-lg font-bold">{profile.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500 transition-colors">
                      <MdLocationOn className="text-2xl text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Location</p>
                      <p className="text-lg font-bold">{profile.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 flex gap-6 relative z-10">
                <a href={profile.github || '#'} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300">
                  <FaGithub />
                </a>
                <a href={profile.linkedin || '#'} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
                  <FaLinkedin />
                </a>
                <a href={profile.instagram || '#'} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-pink-600 hover:border-pink-600 transition-all duration-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-4xl p-10 shadow-sm relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Your Identity</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 font-bold outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 font-bold outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 font-bold outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Your Narrative</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell me more about your idea..."
                    className="w-full px-6 py-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 font-bold outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-2xl flex items-center justify-center gap-4 font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-indigo-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <div className="w-5 h-5 border-2 border-slate-400 border-t-white animate-spin rounded-full"></div>
                  ) : (
                    <>
                      <MdSend className="text-xl" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-sm font-bold text-emerald-500 text-center">
                    Message sent! I will get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-bold text-red-500 text-center">
                    Something went wrong. Please try again or email me directly at {profile.email}.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactSection;
