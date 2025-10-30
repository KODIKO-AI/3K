
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, Database, Mail, MapPin, MessageCircle, Phone, Truck, Wrench } from "lucide-react";

export default function App() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const overlayOpacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Scroll to top button */}
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.15, boxShadow: '0px 0px 15px rgba(250, 204, 21, 0.8)' }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur border-b border-blue-200 shadow-sm bg-white/80"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.h1
            className="text-2xl font-bold text-blue-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            3K Machine Management
          </motion.h1>
          <nav className="hidden md:flex gap-6 text-sm">
            {["Πίνακας Ελέγχου", "Μηχανήματα", "Εργασίες", "Αναφορές", "Επικοινωνία"].map((link, i) => (
              <motion.a
                key={i}
                href={`#${link}`}
                whileHover={{ scale: 1.15, color: "#2563eb" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-blue-600 cursor-pointer"
              >
                {link}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero */}
      <motion.section
        id="Πίνακας Ελέγχου"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative bg-cover bg-center bg-no-repeat text-center text-white h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/images/machines-container-bg.jpg')" }}
      >
        <motion.div className="absolute inset-0 bg-black/50" style={{ opacity: overlayOpacity }} />
        <motion.div className="relative z-10 max-w-3xl mx-auto" variants={fadeIn}>
          <h2 className="text-5xl font-bold drop-shadow-lg mb-4">Διαχείριση Μηχανημάτων & Εξοπλισμού</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Παγκόσμια πλατφόρμα παρακολούθησης, συντήρησης και οργάνωσης στόλου.<br />
            Απλή, εντυπωσιακή και λειτουργική — η λύση 3K.
          </p>
          <motion.button
            className="relative bg-yellow-400 hover:bg-yellow-500 text-black rounded-2xl px-8 py-3 shadow-lg transition-transform hover:scale-110 group"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          >
            <span className="relative z-10">Ξεκίνα τώρα</span>
            <motion.div
              className="absolute inset-0 rounded-2xl bg-yellow-400/30 blur-md opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, boxShadow: "0px 0px 25px rgba(250, 204, 21, 0.7)" }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section id="Μηχανήματα" variants={fadeIn} initial="hidden" whileInView="visible" className="max-w-6xl mx-auto px-4 py-20">
        <motion.h3 variants={fadeIn} className="text-3xl font-bold text-center mb-10">
          Βασικές Λειτουργίες
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Wrench, title: "Συντήρηση", text: "Καταχώρησε και προγραμμάτισε συντηρήσεις με ειδοποιήσεις και ιστορικό." },
            { icon: Truck, title: "Παρακολούθηση Μηχανημάτων", text: "Δες τοποθεσία, κατάσταση και διαθεσιμότητα μηχανημάτων σε πραγματικό χρόνο." },
            { icon: Database, title: "Αναφορές & Δεδομένα", text: "Αναλυτικά στατιστικά για χρήση, κόστος και απόδοση στόλου." }
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div key={i} variants={fadeIn} whileHover={{ scale: 1.07, rotate: 1 }} whileTap={{ scale: 0.97 }} className="rounded-3xl shadow-md hover:shadow-2xl bg-white p-6 transition">
              <Icon className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery with moving gradient bg and parallax */}
      <motion.section
        id="Εργασίες"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        className="relative py-20 overflow-hidden"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ backgroundImage: "linear-gradient(135deg, #e5e7eb 0%, #facc15 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h3 variants={fadeIn} className="text-3xl font-bold text-center mb-10 text-slate-800">
            Τα Μηχανήματά μας
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["machine-simple1.jpg", "machine-simple2.jpg", "machine-dashboard.jpg"].map((img, i) => (
              <motion.div key={i} variants={fadeIn} className="rounded-3xl overflow-hidden shadow-xl relative" whileHover={{ scale: 1.05, rotateY: 10 }}>
                <motion.img
                  src={`/images/${img}`}
                  alt={`Gallery ${i}`}
                  className="w-full h-64 object-cover"
                  style={{ y: useTransform(scrollY, [0, 1000], [0, -50 * (i + 1)]) }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why choose */}
      <motion.section id="Αναφορές" variants={fadeIn} initial="hidden" whileInView="visible" className="relative bg-cover bg-center py-28 text-white" style={{ backgroundImage: "url('/images/machine-dashboard.jpg')" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.h3 variants={fadeIn} className="text-3xl font-bold text-center mb-12 drop-shadow-lg">Γιατί να επιλέξεις το 3K;</motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Παγκόσμια Κάλυψη", text: "Διαχείριση στόλων οπουδήποτε, με online συγχρονισμό και real-time δεδομένα." },
              { title: "Αυτοματισμοί", text: "Αυτόματες ειδοποιήσεις για service, έλεγχο και λήξεις ασφαλειών." },
              { title: "Απλότητα", text: "Καθαρό περιβάλλον, εύκολη χρήση και ελάχιστη εκπαίδευση προσωπικού." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} whileHover={{ scale: 1.05, rotate: 0.5 }} className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:bg.white/20 transition">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-blue-100">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer id="Επικοινωνία" variants={fadeIn} initial="hidden" whileInView="visible" className="bg-slate-900 text-slate-300 py-12">
        <motion.div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-white text-lg mb-2">3K Machine Management</h4>
            <p className="text-sm">Πλατφόρμα διαχείρισης μηχανημάτων & εξοπλισμού – Παγκόσμια κάλυψη.</p>
          </div>
          <div>
            <h5 className="font-medium mb-2">Επικοινωνία</h5>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-yellow-400" /><a href="tel:+30XXXXXXXXXX">+30 XXX XXX XXXX</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-yellow-400" /><a href="mailto:info@example.com">info@example.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-400" />Global HQ</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Συνδεθείτε</h5>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-yellow-400" /><a href="https://wa.me/30XXXXXXXXXX" target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </motion.div>
        <motion.div className="text-center text-xs text-slate-500 mt-10" variants={fadeIn}>
          © {new Date().getFullYear()} 3K Global Management. All rights reserved.
        </motion.div>
      </motion.footer>
    </div>
  );
}
