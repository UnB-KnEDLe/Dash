import { WaveLoading } from 'react-loadingg';

export function Loading() {
  return (
    <WaveLoading
      speed="1.5"
      color="#fcfcfc"
      style={{transform:'scale(0.5)'}}
    />
  );
}