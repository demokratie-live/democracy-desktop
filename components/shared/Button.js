import { Button as AntButton } from 'antd';
import Icon from './Icon';

const Button = ({ icon, children, ...props }) => (
  <AntButton {...props}>
    <>
      {icon && <Icon type={icon} />}
      {children}
    </>
  </AntButton>
);

export default Button;
