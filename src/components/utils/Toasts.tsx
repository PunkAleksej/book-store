import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastPropsType = {
  text: string;
  style: 'success' | 'error' | 'info';
};

const toastsWriter = (props: ToastPropsType) => {
  const { text, style } = props;
  switch (style) {
    case 'success':
      toast.success(text, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case 'error':
      toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case 'info':
      toast.info(text, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    default:
      break;
  }
};
export default toastsWriter;
