import NextImage from 'next/image';
import { memo, useCallback, useState } from 'react';
import { IImageProps } from '.';

const fallback = '/assets/images/fallback.png';

export const Image = memo<IImageProps>(({ src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleFallbackImage = useCallback(() => setImgSrc(fallback), []);

  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const img = event.currentTarget;
      if (img.naturalWidth === 0) setImgSrc(fallback);
    },
    []
  );

  return (
    <NextImage
      src={imgSrc}
      placeholder="blur"
      onLoad={handleLoad}
      onError={handleFallbackImage}
      style={{ objectFit: 'cover' }}
      blurDataURL="data:image/octet-stream;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAB8gAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EBDAAAAAAUaXNwZQAAAAAAAAJyAAABYAAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAAfptZGF0EgAKChhmJxr7BAgIGhAy4QNEUABBBBBAtLdxO+ufZDT62N1xD2v0qMPB0fecvDtq5TRdEoiJ2xJNRFuw19s7jJWfC+XU+oju2qfjk8P5K3Zww+cW4ah57MD8awXAZFVE32xazLhll23JlrWpU+aR8InUqbZsDnfUX22pBVMDuUpBd2ZT8MP2VocS/LfuXUO1Gu2adQ2P9Smvn3C44ughHli56cU9DwBvrUjhOoT/kw0XMNtYzYBLeVrlerEXVoeGUA6MKX1VCWu1WjmlKgUneMH5FuOhxSmmU/fQO8LAp+iwid2kiSxSCqTNl+wUwSTpWscSd4CCvLMzSUnBAf6WamY7VpStVsLXsss/JP+P9K444jQW7r6A5zTVG1Zg0B5MQ4RhgY75ImP2Kx44jRwBoGKXaWWWGHw++/N6C9HvGM62w+xOr9fbZbSB+x4BQWtLmtphY1slIQA65DjIdQMj5aBM+24r+OMMEpjCJ+rCQwDaFvyvOIF0rOrFaLrCXOcXtkLeGjvufwiTL2gdBYrWWqNssLjDtLMh8SLNlh/jxdT8j2J7WpGOwz76k1O68tboiEJ0uELTYCm1s6ucsIrFaMv5Au3x2aksuQS8BSlWDSfd1jGstA7GRvkIPtiCitMHoQiTK4yrTtS4W3+sYt56O8TZ"
      {...props}
    />
  );
});
