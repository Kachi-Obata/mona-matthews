import { useState } from 'react';
import { motion } from 'framer-motion';

const womensSizes = [
  { uk: '13', eu: '33', us: '3', jp: '20', mm: '215' },
  { uk: '13.5', eu: '33.5', us: '3.5', jp: '20.5', mm: '215' },
  { uk: '1', eu: '34', us: '4', jp: '21', mm: '215' },
  { uk: '1.5', eu: '34.5', us: '4.5', jp: '21.5', mm: '215' },
  { uk: '2', eu: '35', us: '5', jp: '22', mm: '220' },
  { uk: '2.5', eu: '35.5', us: '5.5', jp: '22.5', mm: '225' },
  { uk: '3', eu: '36', us: '6', jp: '23', mm: '225' },
  { uk: '3.5', eu: '36.5', us: '6.5', jp: '23.5', mm: '230' },
  { uk: '4', eu: '37', us: '7', jp: '24', mm: '235' },
  { uk: '4.5', eu: '37.5', us: '7.5', jp: '24.5', mm: '235' },
  { uk: '5', eu: '38', us: '8', jp: '25', mm: '240' },
  { uk: '5.5', eu: '38.5', us: '8.5', jp: '25.5', mm: '245' },
  { uk: '6', eu: '39', us: '9', jp: '26', mm: '245' },
  { uk: '6.5', eu: '39.5', us: '9.5', jp: '26.5', mm: '250' },
  { uk: '7', eu: '40', us: '10', jp: '27', mm: '255' },
  { uk: '7.5', eu: '40.5', us: '10.5', jp: '27.5', mm: '255' },
  { uk: '8', eu: '41', us: '11', jp: '28', mm: '260' },
  { uk: '8.5', eu: '41.5', us: '11.5', jp: '28.5', mm: '265' },
  { uk: '9', eu: '42', us: '12', jp: '29', mm: '265' },
  { uk: '9.5', eu: '42.5', us: '12.5', jp: '29.5', mm: '270' },
  { uk: '10', eu: '43', us: '13', jp: '30', mm: '275' },
];

const mensSizes = [
  { uk: '5', eu: '39', us: '6', mm: '245' },
  { uk: '5.5', eu: '39.5', us: '6.5', mm: '250' },
  { uk: '6', eu: '40', us: '7', mm: '255' },
  { uk: '6.5', eu: '40.5', us: '7.5', mm: '255' },
  { uk: '7', eu: '41', us: '8', mm: '260' },
  { uk: '7.5', eu: '41.5', us: '8.5', mm: '265' },
  { uk: '8', eu: '42', us: '9', mm: '265' },
  { uk: '8.5', eu: '42.5', us: '9.5', mm: '270' },
  { uk: '9', eu: '43', us: '10', mm: '275' },
  { uk: '9.5', eu: '43.5', us: '10.5', mm: '275' },
  { uk: '10', eu: '44', us: '11', mm: '280' },
  { uk: '10.5', eu: '44.5', us: '11.5', mm: '285' },
  { uk: '11', eu: '45', us: '12', mm: '285' },
  { uk: '11.5', eu: '45.5', us: '12.5', mm: '290' },
  { uk: '12', eu: '46', us: '13', mm: '295' },
  { uk: '12.5', eu: '46.5', us: '13.5', mm: '295' },
  { uk: '13', eu: '47', us: '14', mm: '300' },
];

export default function SizeGuidePage() {
  const [gender, setGender] = useState<'women' | 'men'>('women');

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="border-b border-mm-gray-200 px-6 md:px-20 lg:px-32 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-xl"
        >
          <p className="text-[10px] uppercase tracking-mm-wide text-mm-gray-400 mb-4">
            Mona Matthews
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal mb-6">
            Size Guide
          </h1>
          <p className="text-sm text-mm-gray-500 leading-relaxed">
            Our footwear is thoughtfully designed to maintain elegance and
            balance across extended sizes. Use the guide below to find your
            perfect fit.
          </p>
        </motion.div>
      </div>

      {/* Toggle + table */}
      <div className="px-6 md:px-20 lg:px-32 py-12 md:py-16">
        {/* Gender toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-0 mb-10 w-fit border border-mm-gray-200"
        >
          {(['women', 'men'] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`px-8 py-3 text-[11px] uppercase tracking-mm-wide transition-colors duration-200 ${
                gender === g
                  ? 'bg-black text-white'
                  : 'bg-white text-mm-gray-500 hover:text-black'
              }`}
            >
              {g === 'women' ? "Women's" : "Men's"}
            </button>
          ))}
        </motion.div>

        {/* Table */}
        <motion.div
          key={gender}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-x-auto"
        >
          {gender === 'women' ? (
            <table className="size-table">
              <thead>
                <tr>
                  <th>UK</th>
                  <th>EU / IT</th>
                  <th>US</th>
                  <th>JP</th>
                  <th>Foot Length (mm)</th>
                </tr>
              </thead>
              <tbody>
                {womensSizes.map((row) => (
                  <tr key={`${row.uk}-${row.eu}`}>
                    <td>{row.uk}</td>
                    <td>{row.eu}</td>
                    <td>{row.us}</td>
                    <td>{row.jp}</td>
                    <td>{row.mm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="size-table">
              <thead>
                <tr>
                  <th>UK</th>
                  <th>EU / IT</th>
                  <th>US</th>
                  <th>Foot Length (mm)</th>
                </tr>
              </thead>
              <tbody>
                {mensSizes.map((row) => (
                  <tr key={`${row.uk}-${row.eu}`}>
                    <td>{row.uk}</td>
                    <td>{row.eu}</td>
                    <td>{row.us}</td>
                    <td>{row.mm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 pt-10 border-t border-mm-gray-200 max-w-lg"
        >
          <p className="text-sm text-mm-gray-500 leading-relaxed mb-4">
            Unsure of your size, or require a bespoke fit? Our team is happy to
            assist — reach us directly on WhatsApp.
          </p>
          <p className="font-display text-sm italic text-mm-gray-600">
            Because elegance is not defined by size — and neither are we.
          </p>
          <a
            href="https://wa.me/2348023055212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-[11px] uppercase tracking-mm-wide underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Contact on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
