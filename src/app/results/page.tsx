'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCamera,
  faTriangleExclamation,
  faCircleCheck,
  faHeartPulse,
  faListOl,
  faTag,
  faRuler,
} from '@fortawesome/free-solid-svg-icons';

type AnalysisResult = {
  aparat?: string;
  descriere?: string;
  pasi?: string[];
  avertismente?: string[];
  valori_normale?: string;
  categorie?: string;
  eroare?: string;
};

const CATEGORY_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  Cardiovascular: {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    dot: 'bg-rose-400',
  },
  Respirator: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    dot: 'bg-sky-400',
  },
  Metabolism: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    dot: 'bg-amber-400',
  },
  Neurologie: {
    bg: 'bg-violet-50',
    text: 'text-violet-700',
    dot: 'bg-violet-400',
  },
  default: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    dot: 'bg-emerald-400',
  },
};

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('simplexo_result');
    const photo = localStorage.getItem('simplexo_photo');
    if (!raw) {
      router.replace('/camera');
      return;
    }
    try {
      setResult(JSON.parse(raw));
    } catch {
      router.replace('/camera');
      return;
    }
    if (photo) setPhotoUrl(photo);
    setTimeout(() => setVisible(true), 50);
  }, [router]);

  if (!result) return null;

  const catStyle =
    CATEGORY_STYLES[result.categorie ?? ''] ?? CATEGORY_STYLES.default;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 flex flex-col items-center pb-16 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full max-w-2xl px-4 pt-8">
        <div className="flex items-center justify-between">
          <Link
            href="/camera"
            className="w-11 h-11 rounded-full bg-white/10 text-emerald-300 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <span className="text-emerald-400 font-bold text-2xl tracking-tight">
            Simplexo
          </span>
          <Link
            href="/camera"
            className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-900"
            title="Poză nouă"
          >
            <FontAwesomeIcon icon={faCamera} />
          </Link>
        </div>
      </div>

      {result.eroare ? (
        <div className="w-full max-w-2xl px-4 mt-10">
          <div className="bg-rose-50 border border-rose-200 rounded-3xl p-8 text-center">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-rose-400 text-4xl mb-4"
            />
            <p className="text-rose-700 font-semibold text-lg">{result.eroare}</p>
            <Link
              href="/camera"
              className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-white rounded-2xl font-semibold hover:bg-emerald-500 transition-all"
            >
              Încearcă din nou
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl px-4 mt-6 space-y-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            {photoUrl && (
              <div className="w-full h-52 overflow-hidden relative">
                <img
                  src={photoUrl}
                  alt="Aparatul fotografiat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            )}

            <div className="p-6">
              {result.categorie && (
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${catStyle.bg} ${catStyle.text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
                    {result.categorie}
                  </span>
                </div>
              )}
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                {result.aparat}
              </h1>
              {result.descriere && (
                <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {result.descriere}
                </p>
              )}
              {result.valori_normale && result.valori_normale !== 'N/A' && (
                <div className="mt-4 flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl px-4 py-3">
                  <FontAwesomeIcon
                    icon={faRuler}
                    className="text-emerald-500 text-sm"
                  />
                  <div>
                    <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-widest">
                      Valori normale
                    </p>
                    <p className="text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
                      {result.valori_normale}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {result.pasi && result.pasi.length > 0 && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon
                  icon={faListOl}
                  className="text-emerald-500"
                />
                <h2 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs">
                  Instrucțiuni de utilizare
                </h2>
              </div>

              <div className="space-y-4">
                {result.pasi.map((pas, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4"
                    style={{
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shadow-md shadow-emerald-200">
                      {i + 1}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {pas}
                      </p>
                      {i < (result.pasi?.length ?? 0) - 1 && (
                        <div className="w-px h-4 bg-emerald-100 dark:bg-emerald-900 ml-[-28px] mt-2 ml-3.5" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <FontAwesomeIcon icon={faCircleCheck} className="text-lg" />
                <span className="text-sm font-semibold">
                  Urmați pașii cu atenție pentru rezultate corecte.
                </span>
              </div>
            </div>
          )}
          {result.avertismente && result.avertismente.length > 0 && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="text-amber-500"
                />
                <h2 className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest">
                  Atenție
                </h2>
              </div>

              <div className="space-y-3">
                {result.avertismente.map((av, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/60 dark:bg-black/20 rounded-2xl px-4 py-3"
                  >
                    <span className="text-amber-400 mt-0.5 flex-shrink-0">⚠</span>
                    <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                      {av}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Link
            href="/camera"
            className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-lg rounded-3xl shadow-xl shadow-emerald-900/40 transition-all"
          >
            <FontAwesomeIcon icon={faCamera} />
            Analizează alt aparat
          </Link>
          <p className="text-center text-xs text-emerald-700/60 px-4 pb-2">
            Informațiile sunt orientative. Consultați întotdeauna un medic pentru diagnostic.
          </p>
        </div>
      )}
    </div>
  );
}