import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

import { ButtonVariant } from '@/components/buttons/Button';

const Loader: React.FC<{ variant: keyof typeof ButtonVariant }> = ({
  variant,
}) => (
  <div
    className={clsxm(
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      {
        'text-white': ['primary', 'dark'].includes(variant),
        'text-black': ['light'].includes(variant),
        'text-primary-500': ['outline', 'ghost'].includes(variant),
      }
    )}
  >
    <ImSpinner2 className='animate-spin' />
  </div>
);
export default Loader;
