import Image from "next/image";

export function FloraIllustrationBottom() {
  return (
    <Image
      src="/illustration/floral-illustration-1.png"
      alt=""
      width={1920}
      height={600}
      className="full-bleed w-full h-auto mix-blend-multiply"
      draggable={false}
      aria-hidden="true"
    />
  );
}

export function FloraIllustrationTop() {
  return (
    <div className="full-bleed flex justify-end">
      <Image
        src="/illustration/floral-illustration-2.png"
        alt=""
        width={400}
        height={400}
        className="w-64 md:w-80 lg:w-[28rem] h-auto mix-blend-multiply -mb-32 md:-mb-40 lg:-mb-48"
        draggable={false}
        aria-hidden="true"
      />
    </div>
  );
}
