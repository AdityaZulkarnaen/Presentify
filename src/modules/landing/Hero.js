import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-lg text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
        Presentify
      </h1>
      <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Latih kemampuan presentasi Anda dengan menganalisis{" "}
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          filler words
        </span>{" "}
        dalam bahasa Indonesia. Upload rekaman audio atau video presentasi Anda dan dapatkan analisis instan.
      </p>
    </div>
  );
}
