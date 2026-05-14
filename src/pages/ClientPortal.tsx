import { useState } from 'react';
import { motion } from 'motion/react';

export default function ClientPortal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Portal login UI only, no backend at this stage
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-off-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-16">
          <span className="text-xl font-serif tracking-[0.4em] uppercase text-teal block mb-4">RIAH</span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-mauve font-semibold block mb-12">Client Portal</span>
          <h1 className="text-2xl md:text-3xl text-teal font-serif italic leading-tight">
            Welcome back.
          </h1>
          <p className="text-sm text-teal/50 font-light mt-4 leading-relaxed">
            Your celebration awaits.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full bg-transparent border border-teal/15 px-6 py-5 text-[11px] text-teal placeholder:text-teal/30 tracking-[0.15em] outline-none focus:border-teal/40 transition-colors duration-300"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-transparent border border-teal/15 px-6 py-5 text-[11px] text-teal placeholder:text-teal/30 tracking-[0.15em] outline-none focus:border-teal/40 transition-colors duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-teal text-off-white text-[10px] uppercase tracking-[0.5em] hover:bg-mauve transition-colors duration-500 mt-4"
          >
            Enter Portal
          </button>
        </form>

        <p className="text-center mt-10 text-[10px] text-teal/30 font-light tracking-wide">
          Access is provided to RIAH clients upon booking.
        </p>
      </motion.div>
    </div>
  );
}
