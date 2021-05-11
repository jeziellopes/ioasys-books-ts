import { useForm } from 'hooks';
import * as S from './FormError.styles';

export function FormError() {
  const { errors } = useForm();

  return (
    <S.Wrapper>
      <S.ErrorMessage>{errors?.message}</S.ErrorMessage>
      <svg
        width="239"
        height="56"
        viewBox="0 0 239 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b)">
          <rect
            y="8"
            width="239"
            height="48"
            rx="4"
            fill="white"
            fillOpacity="0.4"
          />
        </g>
        <g filter="url(#filter1_b)">
          <path
            d="M25 -3.49691e-07L33 8L17 8L25 -3.49691e-07Z"
            fill="white"
            fillOpacity="0.4"
          />
        </g>
        <defs>
          <filter
            id="filter0_b"
            x="-2"
            y="6"
            width="243"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="1" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b"
            x="15"
            y="-2"
            width="20"
            height="12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="1" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </S.Wrapper>
  );
}
