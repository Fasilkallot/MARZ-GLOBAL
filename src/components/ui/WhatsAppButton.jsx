import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/971558826364?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-2xl group overflow-hidden"
      style={{ height: 56, minWidth: 56 }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
        <MessageCircle size={24} fill="white" />
      </div>

      {/* Label - appears on hover */}
      <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-500 ease-out pr-0 group-hover:pr-4 text-sm font-semibold">
        WhatsApp Us
      </span>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ zIndex: -1 }}
      />
    </motion.a>
  );
}
