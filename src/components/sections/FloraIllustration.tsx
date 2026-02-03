import Image from "next/image";

export function FloraIllustration() {
  return (
    <Image
      src="/illustration/floral-illustration-1.png"
      alt=""
      width={1920}
      height={600}
      className="w-full h-auto mix-blend-multiply"
      draggable={false}
      aria-hidden="true"
    />
  );
}
