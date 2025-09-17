import { toast as hotToast } from 'react-hot-toast';

export const useToast = () => {
  const toast = ({ variant, title, description }) => {
    const message = description || title;
    
    switch (variant) {
      case 'success':
        hotToast.success(message);
        break;
      case 'destructive':
        hotToast.error(message);
        break;
      default:
        hotToast(message);
    }
  };

  return { toast };
};