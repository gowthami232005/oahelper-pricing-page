type PremiumFeatureCardProps = {
  surfaceClassName: string;
  footerClassName: string;
  footerTopClassName: string;
  image: string;
  imageAlt: string;
  imageClassName: string;
  title: string;
  body: string;
  bodyClassName: string;
};

export function PremiumFeatureCard({
  surfaceClassName,
  footerClassName,
  footerTopClassName,
  image,
  imageAlt,
  imageClassName,
  title,
  body,
  bodyClassName,
}: PremiumFeatureCardProps) {
  return (
    <article
      className={`relative h-[calc(426px*0.88)] w-[calc(349px*0.88)] shrink-0 overflow-hidden ${surfaceClassName}`}
    >
      <div className={`absolute ${imageClassName}`}>
        <img
          src={image}
          alt={imageAlt}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
        />
      </div>
      <div
        className={`absolute left-0 h-[calc(169px*0.88)] w-[calc(349px*0.88)] ${footerTopClassName} ${footerClassName}`}
      />
      <div className="absolute top-[calc(309.41px*0.88)] left-[calc(24px*0.88)] flex w-[calc(306px*0.88)] flex-col gap-[calc(7px*0.88)]">
        <h3 className="w-full text-[calc(24px*0.88)] leading-normal font-semibold tracking-[calc(-0.48px*0.88)] text-black">
          {title}
        </h3>
        <p
          className={`text-[calc(15px*0.88)] leading-[1.0919] font-normal tracking-[calc(-0.15px*0.88)] text-black/65 ${bodyClassName}`}
        >
          {body}
        </p>
      </div>
    </article>
  );
}
